export const renderDescription = (des) =>{
		if(des.length > 200){
			const sub = des.substring(0,200)
			return `${sub} ...`
		}
		return des
	}