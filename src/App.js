import logo from './logo.svg';
import './App.css';
import CodePen from './components/CodePen'
// import CodePen from 'react-codepen-box'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="coding">
          Leedom is learning React.
        </p>
        <div className="codepen-box">
          <CodePen
            user="leedom92"
            hash="gOLvgRe"
            theme="39028"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
