import Noos from '@noos/views';
import './App.css';

function App() {
  const functions = {};
  const save = { goals: [{ id: '1', subGoals: [] }] };

  return <Noos functions={functions} save={save} />;
}

export default App;
