export function renderNewPage(direction, page, setPage){
	if(direction==='down'){
		setPage(page-1)
	}else if( direction==='up'){
		setPage(page+1)
	}
	return window.scrollTo(0,0)
}
