import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware,compose } from 'redux';
//import AdvertisementReducer from './reducers/advertisementReducer';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from "redux";
import UsersReducer from './reducers/UsersReducer';
import MessagesReducer from './reducers/MessagesReducer';
import ThisUserReducer from './reducers/ThisUserReducer';

let allReducers = combineReducers({
    users: UsersReducer,
    messages: MessagesReducer,
    thisUser: ThisUserReducer,
    //'AdvertisementReducer': AdvertisementReducer
});

registerServiceWorker();

 let productStore = createStore(allReducers,applyMiddleware(ReduxThunk));
productStore.subscribe(()=>console.log('storeState :',productStore.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={productStore}>
      <BrowserRouter>
    <App store={productStore}/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
