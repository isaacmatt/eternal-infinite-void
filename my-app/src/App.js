import './App.css';

function App() {
  return (
    <div className="App">
      <div className="blackhole"></div>
      <h1>Welcome to my portfolio!</h1>
      <h2>Thanks for visiting!</h2>
      <div className="buttons">
        <button onClick={() => alert('About Me: Coming Soon!')}>About Me</button>
        <button onClick={() => alert('Other Items: Coming Soon!')}>Other Items</button>
      </div>
    </div>
  );
}

export default App;
