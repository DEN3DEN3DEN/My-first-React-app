import React from 'react';
import { render } from 'react-dom';
import './App.css';


const App = () => (
  <div>
    <header>
      <h1>My React App</h1>
    </header>
    <nav>
      <ul>
        <li>Contacts</li>
        <li>About US</li>
        <li>Catalog</li>
      </ul>
    </nav>
    <main>
      <img src="https://www.thestreet.com/.image/t_share/MTk1MzAwNTI4NzQwMTE1Nzcw/corvette-z06-lead-js-012023.jpg" alt='dino'></img>
    </main>
  </div>
);

render(<App />, document.getElementById('root'));
export default App;