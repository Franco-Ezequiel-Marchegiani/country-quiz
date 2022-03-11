import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

function App() {
  return (
    /* Puedo hacer que sean con DOS llamados a distintas APIs
    Que una API sea de paises
    Y otra de capitales de ciudades
    API Flags: https://www.countryflagsapi.com/ 
    API Countries/capitales 
    var myHeaders = new Headers();
myHeaders.append("apikey", "Q1dDLxCfahEE8WEQFGghtx7OQtTEWmUo");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/geo/city/name/{city}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  */
    <main className='containerAll'>
      <div>
      <h1>Country Quiz</h1>
      <section>
        <Question/>
      </section>
      <footer></footer>
      </div>
    </main>
  );
}

export default App;
