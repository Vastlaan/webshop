import React, {useState} from 'react';
import './css/style.css';
import InformativePanel from './components/InformativePanel'
import Header from './components/Header'
import CategoriesMenuPanel from './components/CategoriesMenuPanel'
import MirrorCategories from './components/MirrorCategories'



function App() {

	const [lang, setLang] = useState('NL')
	const [shoppingCart, setShoppingCart] = useState([])

  return (
    <div className="App">
      <InformativePanel lang={lang} setLang={setLang}/>
      <Header shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
      <CategoriesMenuPanel lang={lang}/>
      <MirrorCategories />
    </div>
  );
}

export default App;
