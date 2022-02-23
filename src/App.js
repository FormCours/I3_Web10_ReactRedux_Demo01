import './App.css';
import CounterDisplay from './containers/counter-display/counter-display';
import CounterAction from './containers/counter-action/counter-action';
import CounterReset from './containers/counter-reset/counter-reset';

function App() {
  return (
    <div className="App">
      <h1>Demo Redux ♣</h1>
      <CounterDisplay />
      <CounterAction />
      <CounterAction step={5} />
      <CounterReset />
    </div>
  );
}

export default App;
