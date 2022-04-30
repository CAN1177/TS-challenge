const tuple = ['tesla', 'model 3', 'model X', 'model Y']

function tupleToObj(arr) {
	
	const obj = {}
	arr.forEach(val=>{
		obj[val] = val
	})

	return obj
}

console.log('%c 🍑 tupleToObj: ', 'font-size:20px;background-color: #42b983;color:#fff;', tupleToObj(tuple));