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
          <h3>Gama Academy 2021</h3>
        </nav>
      </header>
      <section id="principal" className="section-container">
        <section id="logo">
          <img src="assets/black-friday.png" alt="logo: Black Friday"/>
        </section>
        <section id="lead" className="section-container">
          <form autoComplete="on">
            <label><strong>Cadastre seu melhor email e receba nossas ofertas da Black Friday!</strong></label>
            <br/>
            <input className="cliente" placeholder="Nome Sobrenome" onChange={e => setCliente(e.target.value) } />
            <input type="email"  className="email" placeholder="nome@email.com" onChange={e => setEmail(e.target.value) }  />
            <button type="button" onClick={handleDados}>Enviar</button>
          </form>
        </section>
      </section>
      <footer>
        <p>Renato @ 2021 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
