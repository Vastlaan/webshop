import React from 'react'

const MirrorCategories = (props) =>{

	if(props.lang==='EN'){
		return(
				<div className='mirrorCategories'>
					<div className='mirrorCategories__section mirrorCategories__section--men'>
						<h3>Men Fashion</h3>
						<button onClick={()=>window.location.href='/men'} >Shop Men Collection</button>
					</div>
					<div className='mirrorCategories__section mirrorCategories__section--women'>
						<h3>Women Fashion</h3>
						<button onClick={()=>window.location.href='/women'} >Shop Women Collection</button>
					</div>
				</div>
			)
	}
	return(
		<div className='mirrorCategories'>
			<div className='mirrorCategories__section mirrorCategories__section--men'>
				<h3>Mannen Mode</h3>
				<button onClick={()=>window.location.href='/men'} >Shop Mannen Collectie</button>
			</div>
			<div className='mirrorCategories__section mirrorCategories__section--women'>
				<h3>Vrouwen Mode</h3>
				<button onClick={()=>window.location.href='/women'} >Shop Vrouwen Collectie</button>
			</div>
		</div>
		)
}

export default MirrorCategories