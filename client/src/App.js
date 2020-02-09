import React, {useState} from 'react';
import './css/style.css';
import Landing from './components/Landing'
import TopPanels from './components/TopPanels'
import Footer from './components/Footer'




function App() {

	const [lang, setLang] = useState('NL')
	const [shoppingCart, setShoppingCart] = useState([])

  return (
    <div className="App">
    	<TopPanels lang={lang} setLang={setLang} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
     	<Landing lang={lang} setLang={setLang} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
     	<Footer lang={lang}/>
    </div>
  );
}

export default App;
