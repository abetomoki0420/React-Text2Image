import React from 'react';
import {render} from 'react-dom' ;
import {createStore} from 'redux' ;
import { Provider } from 'react-redux' ;
import PeachCollageContainer from './containers/PeachCollageContainer' ;
import reducer from './reducers'
import './index.css';

const store = createStore(reducer);
const root = document.getElementById('root');

render(
  <Provider store={store} >
    <PeachCollageContainer />
  </Provider> ,
  root
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
