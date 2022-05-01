// js 版本测试

function readonly(obj) {
	const result = {}

	for( const key in obj ) {
		result["readonly " + key] = obj[ key ]
	}
	return result
}

let obj = {
	
	title: "Hey",
  description: "foobar"
}

console.log('%c 🍨 obj: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', readonly(obj));