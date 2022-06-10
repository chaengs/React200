import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'; //스토어 생성함수
import reducers from './reducers';

const store = createStore(reducers); //createStore 함수의 파라미터로 reducers 폴더 경로를 넘긴다.

const listener = () => {
  ReactDOM.render(
    <App store= {store}/>, //8번줄의 stroe를 App 컴포넌트에 전달. 
    document.getElementById('root')
  );
};

store.subscribe(listener); // store 데이터에 변화가 있을 때 listener 함수 내부의 render 함수를 실행하고 변경된 데이터를 렌더링
listener(); //수동으로 render 함수를 실행