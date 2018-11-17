import React from 'react';

import { BrowserRouter, Route } from "react-router-dom";

import Main from '../../pages/Main';
import MyPage from '../../pages/MyPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/mypage" component={MyPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;