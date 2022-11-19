/* eslint-disable default-case */
import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer'; 
import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(reducer); // создаём store

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// функция которая возвращает другую функцию, в которой происходит dispatch action-ов
// args - какие-то доп. аргументы
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// bindActionCreator - функция которую мы создали для наглядности
// bindActionCreators - функция которая встроена в Redux, но работает точно также как и наша функция

// document.getElementById('inc').addEventListener('click', inc); // incDispatch - промежуточная функция для оптимизации кода

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random() * 10);
//     rnd(value);
// });



// let state = reducer(initialState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// console.log(state);
