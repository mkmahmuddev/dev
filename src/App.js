import logo from './logo.svg';
import './App.css';
import Router from './Routes/Router/Router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faX, faBars)

function App() {
  return (
    <div className="App min-w-[360px] max-w-[1440px] border-2 m-auto px-2">
      <Router>
      </Router>
    </div>
  );
}

export default App;
