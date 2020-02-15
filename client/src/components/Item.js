import React, {useState} from 'react';
import { FaCheck } from "react-icons/fa";


function Item(props) {

	const {item} = props

	const [selectedColor, setSelectedColor] = useState(item.colors[0])

	const renderShoppingCard =()=>{

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
      						<div key={`${size}-${i}`}>
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
      	</div>
	     
    </div>
  );
}

export default Item;