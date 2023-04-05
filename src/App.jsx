import marvelLogo from './Images/marvel.svg';
import './Styles/marvel.scss';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <nav>
        <img className="img-logo" src={marvelLogo} alt={"Marvel logo"}/>
          <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li><a href="/characters">Characters</a></li>
            <li><a href="/comics">Comics</a></li>
            <li><a href="/about-us">About Us</a></li>
          </ul>
        </nav>
      </div>
      <div className="Body">

      </div>
      <div id="img-scrollbar">
      </div>
      <div id="img-avengers">
      </div>
    </div>
  );
}

export default App;