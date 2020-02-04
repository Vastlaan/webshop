import React from 'react'
import Women from '../img/women_1.png'
import Man from '../img/man_1.png'

const MirrorCategories = (props) =>{
	return(
		<div className='mirrorCategories'>
			<div className='mirrorCategories__section mirrorCategories__section--men'>
				<button >Shop Mannen Collectie</button>
			</div>
			<div className='mirrorCategories__section mirrorCategories__section--women'>
				<button >Shop Vrouwen Collectie</button>
			</div>
		</div>
		)
}

export default MirrorCategories