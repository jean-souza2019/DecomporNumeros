import './App.css';
import { React, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';

export default function App() {
  const [entrada, setEntrada] = useState(0);
  const [numeroEntrada, setNumeroEntrada] = useState("");
  const [numerosDivisores, setNumerosDivisores] = useState("");
  const [divisoresPrimos, setDivisoresPrimos] = useState("");

  const enviarDecomposer = async (event) => {
    setNumeroEntrada("");
    setNumerosDivisores("");
    setDivisoresPrimos("");
    event.preventDefault();
    if (parseInt(entrada.value) > 0) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: entrada.value })
      };
      var response = await fetch('http://localhost:5000/decomposer/', requestOptions);
      var data = await response.text();
      setNumeroEntrada(`Número de Entrada: ${JSON.parse(data).numeroEntrada}`);
      setNumerosDivisores(`Números divisores: ${JSON.parse(data).numerosDivisores.join(', ')}`);
      setDivisoresPrimos(`Divisores Primos: ${JSON.parse(data).divisoresPrimos.join(', ')}`);
    }
  };

  const adicionarEntrada = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setEntrada({ value: value });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Decomposer</h1>
        <br /><br />
        <p>
          Insira abaixo o <code>valor</code>.
        </p>

        <p className="App-link">

          <FormControl type="number" onChange={adicionarEntrada} />
          <Button variant="secondary" onClick={enviarDecomposer}>Gerar</Button>
        </p>
        <p>
          {numeroEntrada}
        </p>
        <p>
          {numerosDivisores}
        </p>
        <p>
          {divisoresPrimos}
        </p>
      </header>

    </div>
  );
}

