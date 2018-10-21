import React from 'react';
import {render} from 'react-dom' ;
import {createStore} from 'redux' ;
import { Provider } from 'react-redux' ;
import CollageContainer from './containers/CollageContainer' ;
import reducer from './reducers'
import './index.css';

const store = createStore(reducer);
const root = document.getElementById('root');

render(
  <Provider store={store} >
    <CollageContainer />
  </Provider> ,
  root
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
