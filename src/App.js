import './App.css';
import Question from './components/Question';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className='containerAll'>
      <h1 className='titleApp'>Country Quiz</h1>
        <Question/>
      <footer>
        <p>Created by <Link className='footerLink' to="//github.com/Franco-Ezequiel-Marchegiani" target="_blank">Franco Ezequiel Marchegiani</Link> - devChallenges.io</p>
      </footer>

    </main>
  );
}

export default App;
