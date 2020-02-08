import React, {useState} from 'react';
import './css/style.css';
import Landing from './components/Landing'



function App() {

	const [lang, setLang] = useState('NL')
	const [shoppingCart, setShoppingCart] = useState([])

  return (
    <div className="App">
     	<Landing lang={lang} setLang={setLang} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </div>
  );
}

export default App;
