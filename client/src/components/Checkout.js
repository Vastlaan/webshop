import React, {useContext, useState, useEffect} from 'react';
import {  Context } from '../store'
import {useHistory} from 'react-router-dom'

const Checkout = (props) =>{

    const { store, dispatch } = useContext(Context)
    const {shoppingCart, user} = store
    const history = useHistory()

    const [step, setStep] = useState(1)
    //user state details
    const [gender, setGender] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [toe, setToe] = useState('')
    const [postcode, setPostcode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('Nederland')
   


    if(shoppingCart.length<1){
        history.push('/')
    }
    const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
    }
    const claculatePrice =(price, tax) =>{
		return (Number(price) + (Number(price)*Number(tax))).toFixed(2)
    }
    const total = shoppingCart.reduce((acc, item)=>{ return Number(acc)+(Number(claculatePrice(item.item.price,item.item.tax))*item.amount)},0)

    useEffect(()=>{
        if(user){
            if(user.gender){
                setGender(user.gender)
            }
            if(user.email){
                setEmail(user.email)
            }
            if(user.name){
                setName(user.name)
            }
            if(user.surname){
                setSurname(user.surname)
            }
            if(user.phone){
                setPhone(user.phone)
            }
            if(user.address){
                setStreet(user.address.street)
                setNumber(user.address.number)
                setToe(user.address.toe)
                setPostcode(user.address.postcode)
                setCity(user.address.city)
            }
        }
    },[])

	return(
		<div className='checkout'>
            <form className='checkout__form'>
                <div className='checkout__form--1'>
                    <div>
                        <p>{checkLang('Step 1: Your email address','Stap 1: Uw email adress')}</p>
                        <div>
                            <input type='email' value={email} name='email' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    
                </div>
                
            </form>
            <div  className='checkout__summary'>
                    <h3 className='checkout__summary--header'>{checkLang('Your basket:','Uw maandje:')}</h3>
                    {shoppingCart.map((item,i)=>{
                        return(
                            <div className='checkout__summary--item' key={`item -${i * 197.31417}-checkout`}>
                                <div className='checkout__summary--item-name'>
                                    <p>{item.item.name}</p>
                                </div >
                                <div className='checkout__summary--item-photo'>
                                    <img src={item.item.imageurl} alt={item.item.name} />
                                    <div>
                                        <p>{checkLang('Size:','Maat:')} {item.selectedSize}</p>
                                        <p>{checkLang('Color:','Kleur:')} {item.selectedColor}</p>
                                        <p>{checkLang('Amount:','Stuks:')} {item.amount}</p>
                                    </div>
                                </div>  
                                <div className='checkout__summary--item-price'>
                                    <p>{checkLang('Price: ','Prijs: ')}{claculatePrice(item.item.price, item.item.tax)}</p>
                                </div> 
                            </div>
                        )
                    })
                    }
                    <div className='checkout__summary--total'>
                        <p>{checkLang('Total:','Totaal:')} {total}</p>
                    </div>

            </div>
            
		</div>
		)
}

export default Checkout

