import React, {useContext, useState, useEffect} from 'react';
import {  Context } from '../store'
import {useHistory} from 'react-router-dom'

const Checkout = (props) =>{

    const { store, dispatch } = useContext(Context)
    const {shoppingCart, user} = store
    const history = useHistory()

    const [step, setStep] = useState(1)
    const [warning, setWarning] = useState('')
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

    const validateEmail = (email) =>{
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}

    const renderStep2 = () =>{
        if(!validateEmail(email)){
            return setWarning('email adress not valid!')
        }else{
            return setStep(2)
        }
    }

	return(
		<div className='checkout'>
            {
                warning?(
                    <div>
                        {warning}
                    </div>
                ):null
            }
            <form className='checkout__form'>
                <div className='checkout__form--fieldArea'>
                    <div  className='checkout__form--fieldArea-header'>
                        <p>{checkLang('Step 1: Your email address','Stap 1: Uw email adress')} {step!==1?`: ${email}`:null}</p>
                    </div>
                    
                    {
                        step===1?(
                            <div className='checkout__form--fieldArea-inputArea'>
                                <label>{checkLang('Fill here your email address:','Vul hieronder uw email adress:')}</label>
                                <input type='email' value={email} name='email' onChange={(e)=>setEmail(e.target.value)}/>
                                <div className='checkout__form--fieldArea-btn'>
                                    <button onClick={renderStep2}>{checkLang('Next','Volgende')}</button>
                                </div>
                            </div>
                        ):null
                    }
                    
                    
                </div>

                <div className='checkout__form--fieldArea'>
                    <div  className='checkout__form--fieldArea-header'>
                        <p>{checkLang('Step 2: Your address details','Stap 2: Uw adress gegevens')}</p>
                    </div>
                    
                    {
                        step===2?(
                            <div className='checkout__form--fieldArea-inputArea'>
                                <label>{checkLang('Fill here your name:','Vul hieronder uw naam:')}</label>
                                <input type='name' value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
                                <label>{checkLang('Fill here your last name:','Vul hieronder uw achternaam:')}</label>
                                <input type='name' value={surname} name='surname' onChange={(e)=>setSurname(e.target.value)}/>
                                <label>{checkLang('Fill here street name:','Vul hieronder straat:')}</label>
                                <input type='name' value={street} name='street' onChange={(e)=>setStreet(e.target.value)}/>
                                <label>{checkLang('Fill here your street number:','Vul hieronder uw achternaam:')}</label>
                                <input type='text' value={number} name='number' onChange={(e)=>setNumber(e.target.value)}/>
                                <div className='checkout__form--fieldArea-btn'>
                                    <button onClick={()=>setStep(1)}>{checkLang('Back','Terug')}</button>
                                    <button onClick={renderStep2}>{checkLang('Next','Volgende')}</button>
                                </div>
                            </div>
                        ):null
                    }
                    
                    
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

