import React, { useState } from 'react';

function App() {
  const [cliente, setCliente] = useState('');
  const [email, setEmail] = useState('');

  function handleDados(){
    localStorage.setItem('email', email);
    localStorage.setItem('cliente', cliente);
  }

  return (
    <div className="App">
      <header>
        <nav>
          <span>Gama Academy 2021</span>
        </nav>
      </header>
      <section id="principal">
        <section id="logo">
          <h1>Black Friday 2021!</h1>
        </section>
        <section id="lead">
          <form autoComplete="on">
            <label>Cadastre seu melhor email e receba nossas ofertas da Black Friday!</label>
            <br/>
            <input className="cliente" placeholder="Nome Sobrenome" onChange={e => setCliente(e.target.value) } />
            <input type="email"  className="email" placeholder="nome@email.com" onChange={e => setEmail(e.target.value) }  />
            <button type="button" onClick={handleDados}>Enviar</button>
          </form>
        </section>
      </section>
      <footer>
        <span>Renato @ 2021</span>
      </footer>
    </div>
  );
}

export default App;
