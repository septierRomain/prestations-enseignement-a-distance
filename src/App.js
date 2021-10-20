import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Component/App/Home';
import Assujetti from './Component/Assujetti';
import NonAssujetti from './Component/NonAssujetti';
import France from './Component/Assujetti/France';
import Foreign from './Component/Assujetti/Foreign';
import ForeignUnsubmit from './Component/NonAssujetti/ForeignUnsubmit';
import FranceUnsubmit from './Component/NonAssujetti/FranceUnsubmit';

function App() {
  return (
    <div id="container">
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />

          {/* Routes pour les assujetti */}
          <Route exact path='/Assujetti' component={Assujetti} />
          <Route exact path='/France' component={France} />
          <Route exact path='/hors_France' component={Foreign} />

          {/* Routes pour les non assujetti */}
          <Route exact path='/non_assujetti' component={NonAssujetti} />
          <Route exact path='/hors_France_non_assujetti' component={ForeignUnsubmit} />
          <Route exact path='/France_non_assujetti' component={FranceUnsubmit} />

        </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
