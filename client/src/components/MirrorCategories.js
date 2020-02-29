import React from 'react'
import {useHistory} from 'react-router-dom';

const MirrorCategories = (props) =>{

	const history = useHistory()

	const checkLang = (e, n) =>{
		return props.lang==='NL'?n:e
	}

	return(
		<div className='mirrorCategories'>
			<div className='mirrorCategories__section mirrorCategories__section--men'>
				<h3>{checkLang('Men\'s Fashion','Mannen Mode')}</h3>
				<button onClick={()=>history.push('/men/home')} >{checkLang('Shop now','Shop Nu')}</button>
			</div>
			<div className='mirrorCategories__section mirrorCategories__section--women'>
				<h3>{checkLang('Women Fashion','Vrouwen Mode')}</h3>
				<button onClick={()=>history.push('/women/home')} >{checkLang('Shop now','Shop Nu')}</button>
			</div>
		</div>
		)
}

export default MirrorCategories