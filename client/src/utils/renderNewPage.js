export function renderNewPage(direction, page, setPage, toTop){
	if(direction==='down'){
		setPage(page-1)
	}else if( direction==='up'){
		setPage(page+1)
	}
	return toTop?window.scrollTo(0,0):undefined
}
