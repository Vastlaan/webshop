import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {  Context } from '../store'
import { FaCheck } from "react-icons/fa";


function Item(props) {

	const {item} = props

      const history = useHistory()
      const { store, dispatch } = useContext(Context)
      const {user} = store
      
      useEffect(()=>{
            if(user.email){
                  fetch('/auth/updateClient',{
                        method:'POST',
                        headers:{
                              "Content-Type":"application/json"
                        },
                        body:JSON.stringify({item: item.id, userId: user.id})
                  }).then(res=>res.json())
                  .then(data=>{
                        
                        if(data.error){
                              return console.log(data.error)
                        }
                        if(data.email){
                              return dispatch({
                                    type:'updateUser',
                                    payload: data
                              })
                        }
                  })
                  .catch(e=>console.error(e))
            }        
      }, [])  
      
      


	const [selectedColor, setSelectedColor] = useState(item.colors[0])
	const [selectedSize, setSelectedSize] = useState(item.sizes[0])
	const [selectedTab, setSelectedTab] = useState('description') // possible: 'description', 'shipping', 'reviews'

	const renderShoppingCard =()=>{
		dispatch({
                  type:'addToShoppingBag',
                  payload:[{item, selectedColor, selectedSize, amount: 1}]
            })
            return history.push('/shoppingBag')//temporaray '/contact'
	}
	const claculateScore = (item) =>{
		const l = item.score.length
		const s = item.score.reduce((acc, s)=>acc+s,0)
		return s/l
	}
      const checkLang = (e, n) =>{
            return props.lang==='NL'?n:e
      }

  return (
    <div className="item">

      	<div className='item__main'>
      		<div  className='item__main--name'>
      			<h3>{item.name}</h3>
      		</div>
      		<div className='item__main--image'>
      			<img src={item.imageurl} alt={`product ${item.name}`}/>
      		</div>
      		<div className='item__main--info'>
      			<div className='item__main--info-price'>&euro; {item.price}</div>
      			<div className='item__main--info-sizes'>
      			{
      				item.sizes.map((size,i)=>{
      					return(
      						<div key={`${size}-${i}`} onClick={()=>setSelectedSize(size)}>
      							{size}
      						</div>
      						)
      				})
      			}
      			</div>
      			<div className='item__main--info-colors'>
      			{
      				item.colors.map((color,i)=>{
      					return(
      						<div key={`${color}-${i}`} style={{backgroundColor:color}} onClick={()=>setSelectedColor(color)}>
      							
      						</div>
      						)
      				})
      			}
      			</div>
      			<div className='item__main--info-btn'>
      				<button onClick={renderShoppingCard}>{checkLang('Order','Bestel')}</button>
      			</div>
      			<ul className='item__main--info-shipping'>
      				<li><FaCheck/>{checkLang('Free shipping','Gratis verzenden & retourneren')}</li>
      				<li><FaCheck/>{checkLang('Order before 18:00 at working days and get your delivery tomorrow!','Op werkdagen voor 18.00u besteld = morgen in huis')}</li>
      			</ul>
      		</div>
      		<div className='item__main--details'>
      			<div className='item__main--details-tabs'>
      				<div onClick={()=>setSelectedTab('description')} className={selectedTab==='description'?'highlightedTab':''}>
      					{checkLang('Descrition', 'Omschrijving')}
      				</div>
      				<div onClick={()=>setSelectedTab('shipping')} className={selectedTab==='shipping'?'highlightedTab':''}>
      					{checkLang('Shipping','Verzending')}
      				</div>
      				<div onClick={()=>setSelectedTab('reviews')} className={selectedTab==='reviews'?'highlightedTab':''}>
      					{checkLang('Reviews','Reviews')}
      				</div>
      			</div>
      			<div className='item__main--details-content'>
      				{
      					selectedTab==='description'? 
      						<div>
      							<h3>{item.name} - id: {item.id}</h3>
      							<p>{item.description}</p>
      						</div> 
      					: selectedTab==='shipping'?
      						<div>
      							<h3>{checkLang('Shipping','Verzending')}</h3>
      							<p>{checkLang('Ordered during working days before 18:00, next day deliver to your house. Your order will be delivered for free by DHL. Delivery on demand hour is unfortunately not possible.','Op werkdagen voor 18:00 uur besteld is de volgende dag in huis. Je bestelling wordt gratis bezorgd door DHL. Levering op afspraak is helaas niet mogelijk.')}</p>
      							<h3>{checkLang('EXCHANGE AND RETURN','RUILEN EN RETOURNEREN')}</h3>
      							<p>{checkLang('Do you want to exchange your package? Send back the package and simply place new order. Do you want to retun the package? This is possible within 14 working days?','Wil je een artikel ruilen? Stuur het artikel/de artikelen retour en plaats vervolgens zelf een nieuwe bestelling. Wil je een artikel retoureren? Dat is mogelijk binnen 14 dagen na ontvangst van je pakket')}.</p>    														
							</div> 
      						: <div>
      							<h3>{checkLang('Reviews','Reviews')}</h3>
      							<h4>{checkLang('This product has scored:','Dit product scored:')}</h4>
      							{
      								item.score.length===0?<p>{checkLang('There are no reviews.','Er zijn nog geen reviews')}</p>:<h1>{claculateScore(item)}</h1>
      							}
      						</div>
      					
      				}
      			</div>

      		</div>
      	</div>
	     
    </div>
  );
}

export default Item;