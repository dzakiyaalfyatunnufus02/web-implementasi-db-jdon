import logo from './logo.svg';
import './App.css';
import Home from "./views/home"
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <main>
      <Route path="/" component={Home} exact />
     </main>
     </BrowserRouter>
    </div>
  );
}

export default App;
