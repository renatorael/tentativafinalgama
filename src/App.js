import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <span>Gama Academy 2021</span>
        </nav>
      </header>
      <section id="principal">
        <img src="http://midias.gazetaonline.com.br/_midias/jpg/2017/11/20/black_2951013_960_720-5379677.jpg" alt="logo" />
      </section>
      <section id="lead">
        <form>
          <input type="text" id="nome" placeholder="Nome Sobrenome" />
          <input type="email" id="email" placeholder="nome@email.com" />
          <input type="submit" id="enviar" value="enviar" />
        </form>
      </section>
      <footer>
        <span>Renato @ 2021</span>
      </footer>
    </div>
  );
}

export default App;
