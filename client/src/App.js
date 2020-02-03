import React, {useState} from 'react';
import './css/style.css';
import InformativePanel from './components/InformativePanel'
import Header from './components/Header'



function App() {

	const [lang, setLang] = useState('NL')
	const [shoppingCart, setShoppingCart] = useState([])

  return (
    <div className="App">
      <InformativePanel lang={lang} setLang={setLang}/>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
    </div>
  );
}

export default App;
