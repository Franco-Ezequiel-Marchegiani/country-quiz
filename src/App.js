import './App.css';
import QuestionFlag from './components/QuestionFlag';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className='containerAll'>
      <h1 className='titleApp'>Country Quiz</h1>
          <section className='questionContainer'>
            <h2>Bienvenido! Cual Quiz deseas realizar?</h2>
            <Link to="#"><button>Quiz de Capitales</button></Link>
            <Link to="#"><button>Quiz de Banderas</button></Link>
          </section>
      <footer>
        <p>Created by <Link className='footerLink' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank">Franco Ezequiel Marchegiani</Link> - devChallenges.io</p>
      </footer>

    </main>
  );
}

export default App;
