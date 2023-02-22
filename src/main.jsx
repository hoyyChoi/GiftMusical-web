import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>, 
  //react stric 모드란  React.StrictMode로 App 컴포넘트를 감싸서 렌더링 해주는데 이 경우 개발 단계시 오류를 잡기 위해 두번 렌더링 된다고 한다. 그렇기에 한번만 렌더링 하고 싶은 경우 React.StrictMode를 제거 해주면 된다.
)
