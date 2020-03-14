import React from 'react';
import { FiArrowRight } from "react-icons/fi";



function CustomerReviews(props) {

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}


  return (
    <div className="customerReviews">
      <div className='customerReviews__header'>
      	<div className='customerReviews__header--main'>
      		<h1 style={{color:'#854442'}}>{checkLang('customers','klanten')}</h1>
      		<h1 style={{color:'#3c2f2f'}}>{checkLang('reviews','reviews')}</h1>
      	</div>
      	<div className='customerReviews__header--small'>
      		<h3>{checkLang('We work for our customers and we are happy when they are satisfied','Wij werken voor onze klanten en wij zijn trots om de beste kwaliteit producten aan u te bieden.')}</h3>	
      	</div>
      	<div className='customerReviews__header--btn'>
      		<button>{checkLang('Read more','Lees meer')}<FiArrowRight/></button>
      	</div>
      </div>
      <div className='customerReviews__reviews'>
      	<div className='customerReviews__reviews--each customerReviews__reviews--top'>
      		<div className='customerReviews__reviews--each-image'>
      			<img src='https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='face' />
      		</div>
      		<div className='customerReviews__reviews--each-text'>
      			<h1>John Lemon</h1>
      			<h3>{checkLang('customer','klant')}</h3>
      			<p>{checkLang('The dress I bought was wonderful. Thank you very much! ','De dress die heb ik gekocht was prima! Dank u wel!')}</p>
      		</div>
      	</div>
      	<div className='customerReviews__reviews--each customerReviews__reviews--middle'>
      		<div className='customerReviews__reviews--each-image'>
      			<img src='https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='face' />
      		</div>
      		<div className='customerReviews__reviews--each-text'>
      			<h1>Meryl Moonrock</h1>
      			<h3>{checkLang('customer','klant')}</h3>
      			<p>{checkLang('The dress I bought was wonderful. Thank you very much! ','De dress die heb ik gekocht was prima! Dank u wel!')}</p>
      		</div>
      	</div>
      	<div className='customerReviews__reviews--each customerReviews__reviews--bottom'>
      		<div className='customerReviews__reviews--each-image'>
      			<img src='https://images.unsplash.com/photo-1582971805810-b24306e0afe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80' alt='face' />
      		</div>
      		<div className='customerReviews__reviews--each-text'>
      			<h1>Henk Friday</h1>
      			<h3>{checkLang('customer','klant')}</h3>
      			<p>{checkLang('The dress I bought was wonderful. Thank you very much! ','De dress die heb ik gekocht was prima! Dank u wel!')}</p>
      		</div>
      	</div>
      </div>
    </div>
  );
}

export default CustomerReviews;