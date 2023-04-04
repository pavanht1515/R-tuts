import logo from './logo.svg';
import './App.css';


function App() {
  
  let data = "user1"

  const fun = () =>
  {
    data = "user2"
    alert(data)
  }
  
  return (
    <div className='App'>
        <h3>{data}</h3>
        <button onClick={()=>fun()}></button>
    </div>
  );
}

export default App;
