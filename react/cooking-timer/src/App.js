import './App.css';
import CountdownTimer from './components/CountdownTimer/CountdownTimer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer
          label="Eggs"
          initialTime={90}/>
      </header>
    </div>
  );
}

export default App;
