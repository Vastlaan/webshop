import React from 'react';

import MirrorCategories from './MirrorCategories'
import NewCollectionPanel from './NewCollectionPanel'
import BestsellersCollectionPanel from './BestsellersCollectionPanel'
import CustomerReviews from './CustomerReviews'



function Landing(props) {


  return (
    <div className="landing">
      
      <MirrorCategories lang={props.lang} />
      <NewCollectionPanel lang={props.lang}/>
      <CustomerReviews lang={props.lang} />
      <BestsellersCollectionPanel lang={props.lang} />
    </div>
  );
}

export default Landing;