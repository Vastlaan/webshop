import React, {useState} from 'react';
import './css/style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing'
import NewCollection from './components/NewCollection'
import Bestsellers from './components/Bestsellers'
import Sale from './components/Sale'
import TopPanels from './components/TopPanels'
import Footer from './components/Footer'


const Contact = () =>{
	return(
		<div style={{marginTop:'17rem'}}>
			Contact
		</div>
		)
}

function App() {

	const [lang, setLang] = useState('NL')
	const [shoppingCart, setShoppingCart] = useState([])

  return (
  	<Router>
	    <div className="App">
	    	<TopPanels lang={lang} setLang={setLang} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
	    	<Route exact={true} path='/' render={()=><Landing lang={lang} setLang={setLang} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
	     	<Route path="/new/:prodId"  render={({match})=><NewCollection match={match} lang={lang}/>} />
	     	<Route path="/bestsellers/:prodId"  render={({match})=><Bestsellers match={match} lang={lang}/>} />
	     	<Route path="/sale/:prodId"  render={({match})=><Sale match={match} lang={lang}/>} />
	     	<Route path="/men/:prodId"  render={({match})=><NewCollection match={match} lang={lang}/>} />
	     	<Route path="/women/:prodId"  render={({match})=><NewCollection match={match} lang={lang}/>} />
	     	<Route path='/contact' exact={true} component={Contact} />
	     	<Footer lang={lang}/>
	    </div>
    </Router>
  );
}

export default App;
