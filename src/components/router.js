import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StorePicker from './store_picker';
import App from './app';
import NotFound from './not_found';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:storeId" component={App} />
      {/*catch-all for anything else */}
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
