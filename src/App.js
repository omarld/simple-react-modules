import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const options = [
    {key: 1, value: "Options 1"},
    {key: 2, value: "Options 2"},
    {key: 3, value: "Options 3"},
    {key: 4, value: "Options 4"}
  ]
  return (
    <div className="App">
      <Dropdown options={options}/>
    </div>
  );
}

export default App;
