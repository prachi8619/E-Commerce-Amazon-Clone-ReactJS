import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Checkout from './Checkout';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </StateProvider>
  );
}

export default App;