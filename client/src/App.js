import React, {useState} from 'react';
import './css/style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing'
import NewCollection from './components/NewCollection'
import TopPanels from './components/TopPanels'
import Footer from './components/Footer'




function App() {

	const [lang, setLang] = useState('NL')
	const [shoppingCart, setShoppingCart] = useState([])

  return (
  	<Router>
	    <div className="App">
	    	<TopPanels lang={lang} setLang={setLang} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
	    	<Route exact={true} path='/' render={()=><Landing lang={lang} setLang={setLang} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
	     	<Route path="/new/:prodId"  render={({match})=><NewCollection match={match} lang={lang}/>} />
	     	<Footer lang={lang}/>
	    </div>
    </Router>
  );
}

export default App;
