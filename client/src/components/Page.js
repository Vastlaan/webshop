import React from 'react';
import {renderNewPage} from '../utils/renderNewPage'
import { FaChevronRight, FaChevronLeft} from "react-icons/fa";

const Page = ({page, setPage, maxPages, toTop=true}) =>{

	if(maxPages===0){
		return null
	}
	
	return(
		<div className='page'>
			<div className='page-less' onClick={()=>renderNewPage('down', page, setPage, toTop)} style={page===1?{ display: 'none'}:{display:'flex'} } >
				<FaChevronLeft/>
			</div>
			<div className='page-num'>
				{page}
			</div>
			<div className='page-more' onClick={()=>renderNewPage('up', page, setPage, toTop)} style={page===maxPages?{ display: 'none'}:{display:'flex'} } >
				<FaChevronRight/>
			</div>
		</div>
		)
}

export default Page