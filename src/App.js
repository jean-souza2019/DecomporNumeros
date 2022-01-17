import './App.css';
import { React, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';

export default function App() {
  const [retorno, setRetorno] = useState();
  const [entrada, setEntrada] = useState();

  const enviarDecomposer = async (event) => {
    console.log(entrada)
    event.preventDefault();
    // const requestOptions = {
    //   mode: 'no-cors',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     "Access-Control-Allow-Origin": "http://localhost:5000"
    //   },
    //   body: JSON.stringify({ 'number': 45 })
    // };
    // const response = await fetch('http://localhost:5000/decomposer', requestOptions);
    // const data = await response.status;
    // console.log(data)




    axios({

      method: 'http://localhost:5000/decomposer',
      mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:5000"
      },
      body: JSON.stringify({ 'number': 45 })
        .then(function (responde) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    });
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
      </header>

    </div>
  );
}

