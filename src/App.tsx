import React, { ReactElement, useEffect } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from './components/layout/layout';
import Routing from './components/routing/routing';

function App(): ReactElement {
  return (
    <div>
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
