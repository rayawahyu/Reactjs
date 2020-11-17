import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  let nama = 'Raya Wahyu';
  let kelas = 'XI-RPL';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Nama: {nama}</h1>
        <h2>Kelas: {kelas}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}




const AppVar = ()=>{
 const nama = 'Raya Wahyu';
  const kelas = 'XI-RPL';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Nama: {nama}</h1>
        <h2>No. Absen: {no_absen}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



class AppClass extends React.Component {
constructor(props){
  super(props);
  this.nama ='Raya Wahyu'
  this.kelas = 'XI-RPL'
}

render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Nama: {this.nama}</h1>
        <h2>No. Absen: {this.kelas}</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export {
  App,
  AppVar,
  AppClass
}
