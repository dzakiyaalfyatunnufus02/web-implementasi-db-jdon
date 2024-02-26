import './App.css';
import Home from "./views/home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Hororpt1 from './cerita/hororpt1';
import PageHoror from './cerita/pgaeHoror';
import Hororpt2 from './cerita/hororpt2';
import Horopt3 from './cerita/hororpt3';
import Funnypt1 from './cerita/funnypt1';
import Funnypt2 from './cerita/funnypt2';
import PageFunny from './cerita/pageFunny';
import Funnypt3 from './cerita/funnypt3';
import Romancept1 from './cerita/romancept1';
import PageMavia from './cerita/pageMavia.';
import Maviapt1 from './cerita/maviapt1';
import Maviapt2 from './cerita/maviapt2';
import Maviapt3 from './cerita/maviapt3';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <main>
      <Switch/>
      <Route path="/" component={Home} exact />
      <Route path="/horor-pt-1" component={Hororpt1} exact />
      <Route path="/page-horor" component={PageHoror} exact />
      <Route path="/page-funny" component={PageFunny} exact />
      <Route path="/horor-pt-2" component={Hororpt2} exact />
      <Route path="/horor-pt-3" component={Horopt3} exact />
      <Route path="/funny-pt-1" component={Funnypt1} exact />
      <Route path="/funny-pt-2" component={Funnypt2} exact />
      <Route path="/funny-pt-3" component={Funnypt3} exact />
      <Route path="/romance-pt-1" component={Romancept1} exact />
      <Route path="/mavia-pt-1" component={Maviapt1} exact />
      <Route path="/mavia-pt-2" component={Maviapt2} exact />
      <Route path="/mavia-pt-3" component={Maviapt3} exact />
      <Route path="/page-mavia" component={PageMavia} exact />
      <Switch/>
     </main>
     </BrowserRouter>
    </div>
  );
}

export default App;
