import './App.css';
import React from 'react';
import Sidebar from "./Sidebar";
// import Favicon from 'react-favicon';
// import ReactDOM from 'react-dom'
import Chat from "./Chat";
function App() {
  return (
    <div className="app">
      {/* <Favicon src='http://oflisback.github.io/react-favicon/img/github.ico' /> */}
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
