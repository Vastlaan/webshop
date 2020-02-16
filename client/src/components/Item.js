import React, {useState} from 'react';
import { FaCheck } from "react-icons/fa";


function Item(props) {

	const {item} = props

	const [selectedColor, setSelectedColor] = useState(item.colors[0])
	const [selectedSize, setSelectedSize] = useState(item.sizes[0])
	const [selectedTab, setSelectedTab] = useState('description') // possible: 'description', 'shipping', 'reviews'

	const renderShoppingCard =()=>{
		console.log(item.id, selectedColor, selectedSize)
	}
	const claculateScore = (item) =>{
		const l = item.score.length
		const s = item.score.reduce((acc, s)=>acc+s,0)
		return s/l
	}

  return (
    <div className="item">

      	<div className='item__main'>
      		<div  className='item__main--name'>
      			<h3>{item.name}</h3>
      		</div>
      		<div className='item__main--image'>
      			<img src={item.imageUrl} alt={`product ${item.name}`}/>
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
      				<button onClick={renderShoppingCard}>Bestel</button>
      			</div>
      			<ul className='item__main--info-shipping'>
      				<li><FaCheck/>Gratis verzenden & retourneren</li>
      				<li><FaCheck/>Op werkdagen voor 18.00u besteld = morgen in huis</li>
      			</ul>
      		</div>
      		<div className='item__main--details'>
      			<div className='item__main--details-tabs'>
      				<div onClick={()=>setSelectedTab('description')} className={selectedTab==='description'?'highlightedTab':''}>
      					Omschrijving
      				</div>
      				<div onClick={()=>setSelectedTab('shipping')} className={selectedTab==='shipping'?'highlightedTab':''}>
      					Verzending
      				</div>
      				<div onClick={()=>setSelectedTab('reviews')} className={selectedTab==='reviews'?'highlightedTab':''}>
      					Reviews
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
      							<h3>Verzending</h3>
      							<p>Op werkdagen voor 18:00 uur besteld is de volgende dag in huis. Je bestelling wordt gratis bezorgd door DHL. Levering op afspraak is helaas niet mogelijk.</p>
      							<h3>RUILEN EN RETOURNEREN</h3>
      							<p>Wil je een artikel ruilen? Stuur het artikel/de artikelen retour en plaats vervolgens zelf een nieuwe bestelling. Wil je een artikel retourneren? Dat is mogelijk binnen 14 dagen na ontvangst van je pakket.</p>    														
							</div> 
      						: <div>
      							<h3>Reviews</h3>
      							<h4>Dit product scored:</h4>
      							{
      								item.score.length===0?<p>Er zijn nog geen reviews</p>:<h1>{claculateScore(item)}</h1>
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