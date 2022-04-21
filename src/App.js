import './App.css';
import Footer from './components/Footer/Footer';
import AllChart from './components/Chart/AllChart/AllChart';
import UpdateRates from './components/UpdateRates/UpdateRates';

function App() {
  return (
    <div>
      <UpdateRates></UpdateRates>
      <AllChart/>
      <Footer/>
    </div>
  );
}

export default App;
