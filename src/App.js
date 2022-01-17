import './App.css';
import { React, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';

export default function App() {
  const [valorFinal, setValorFinal] = useState();
  const [entrada, setEntrada] = useState();

  const enviarDecomposer = async (event) => {
    event.preventDefault();
    if (entrada || entrada > 0) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: entrada.value })
      };
      var response = await fetch('http://localhost:5000/decomposer/', requestOptions);
      var data = await response.text();
      var resultados = data.split("\n")
      setValorFinal(resultados)
    }
  };

  const adicionarEntrada = (event) => {
    event.preventDefault();
      setEntrada({ value: event.target.value });
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
        <p >
          {valorFinal ? valorFinal : ''}
        </p>
      </header>

    </div>
  );
}

