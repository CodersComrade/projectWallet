import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
