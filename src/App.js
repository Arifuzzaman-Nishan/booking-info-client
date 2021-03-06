import React from 'react';
import AddInfo from './Component\'/AddInfo/AddInfo';
import Home from './Component\'/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component\'/NoMatch/NoMatch';
import ShowAllData from './Component\'/ShowAllData/ShowAllData';
import Search from './Component\'/Search/Search';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/addInfo">
          <AddInfo></AddInfo>
        </Route>
        <Route path="/allInfo">
          <ShowAllData></ShowAllData>
        </Route>
        <Route path="/search">
          <Search></Search>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;