import logo from './logo.svg';
import './App.css';
import Home from "./views/home"
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Hororpt1 from './cerita/hororpt1';
import PageHoror from './cerita/pgaeHoror';
import Hororpt2 from './cerita/hororpt2';
import Horopt3 from './cerita/hororpt3';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <main>
      <Route path="/" component={Home} exact />
      <Route path="/horor-pt-1" component={Hororpt1} exact />
      <Route path="/page-horor" component={PageHoror} exact />
      <Route path="/horor-pt-2" component={Hororpt2} exact />
      <Route path="/horor-pt-3" component={Horopt3} exact />
     </main>
     </BrowserRouter>
    </div>
  );
}

export default App;
