export const renderDescription = (des, inter) =>{
		if(des.length > inter ||200){
			const sub = des.substring(0,inter||200)
			return `${sub} ...`
		}
		return des
	}