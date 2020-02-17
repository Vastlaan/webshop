import React, {useState} from 'react';
import './css/style.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './components/Landing'
import NewCollection from './components/NewCollection'
import Bestsellers from './components/Bestsellers'
import Sale from './components/Sale'
import TopPanels from './components/TopPanels'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Men from './components/Men'
import Women from './components/Women'

const CATEGORIES_MEN =  ["sweaters", "vest", "shirts", "underwear", "trousers", "suits", "jackets", "additions"]
const CATEGORIES_WOMEN =  ["sweaters", "vest", "shirts", "underwear", "trousers", "dresses", "jackets", "additions"]

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
	     	<Route path="/men/:prodId"  exact={true} render={({match})=><Men match={match} lang={lang}/>} />
	     	
	     	{CATEGORIES_MEN.map((cat,i)=> <Route key={`app-route-men-${i}`} path={`/men/${cat}/:prodId`}  render={({match})=><NewCollection match={match} lang={lang}/>} />)}
	     	{CATEGORIES_WOMEN.map((cat,i)=> <Route key={`app-route-women-${i}`} path={`/women/${cat}/:prodId`}  render={({match})=><NewCollection match={match} lang={lang}/>} />)}

	     	<Route path="/women/:prodId"  exact={true} render={({match})=><Women match={match} lang={lang}/>} />
	     	<Route path='/contact' exact={true} component={Contact} />
	     	<Footer lang={lang}/>
	    </div>
    </Router>
  );
}

export default App;
