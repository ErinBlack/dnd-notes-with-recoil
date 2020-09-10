import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DnDnotes from './DnDnotes';
import * as serviceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <DnDnotes /> 
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
