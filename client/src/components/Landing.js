import React from 'react';
import InformativePanel from './InformativePanel'
import Header from './Header'
import CategoriesMenuPanel from './CategoriesMenuPanel'
import MirrorCategories from './MirrorCategories'
import NewCollectionPanel from './NewCollectionPanel'
import BestsellersCollectionPanel from './BestsellersCollectionPanel'


function Landing(props) {


  return (
    <div className="landing">
      <InformativePanel lang={props.lang} setLang={props.setLang}/>
      <Header shoppingCart={props.shoppingCart} setShoppingCart={props.setShoppingCart}/>
      <CategoriesMenuPanel lang={props.lang}/>
      <MirrorCategories lang={props.lang} />
      <NewCollectionPanel lang={props.lang}/>
      <BestsellersCollectionPanel lang={props.lang} />
    </div>
  );
}

export default Landing;