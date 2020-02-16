import React from 'react'

const MirrorCategories = (props) =>{

	if(props.lang==='EN'){
		return(
				<div className='mirrorCategories'>
					<div className='mirrorCategories__section mirrorCategories__section--men'>
						<h3>Men Fashion</h3>
						<button onClick={()=>window.location.href='/men/home'} >Shop Now</button>
					</div>
					<div className='mirrorCategories__section mirrorCategories__section--women'>
						<h3>Women Fashion</h3>
						<button onClick={()=>window.location.href='/women/home'} >Shop Now</button>
					</div>
				</div>
			)
	}
	return(
		<div className='mirrorCategories'>
			<div className='mirrorCategories__section mirrorCategories__section--men'>
				<h3>Mannen Mode</h3>
				<button onClick={()=>window.location.href='/men/home'} >Shop Nu</button>
			</div>
			<div className='mirrorCategories__section mirrorCategories__section--women'>
				<h3>Vrouwen Mode</h3>
				<button onClick={()=>window.location.href='/women/home'} >Shop Nu</button>
			</div>
		</div>
		)
}

export default MirrorCategories