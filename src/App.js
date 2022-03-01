import React, { useState } from 'react';
import Header from './components/Header';
import Customize from './components/Customize';
import Checkout from './components/Checkout';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';

function App() {
  const [ingredients, setIngredients] = useState
  ({
    onions: false,
    basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Customize ingredients={ingredients}></Customize>}>
          </Route>
          <Route exact path="/checkout" element={<Checkout></Checkout>}>
          </Route>
          <Route exact path="/customize" element={<Customize ingredients={ingredients}></Customize>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
