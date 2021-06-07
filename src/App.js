import logo from './logo.svg';
import './App.css';
import First from './view/first'
import Second from './view/second'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <First/>
        <Second/>
      </header>
    </div>
  );
}

export default App;
