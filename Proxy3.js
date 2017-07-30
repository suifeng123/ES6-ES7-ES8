var handler = {
	get(target,key){
		invariant(key,'get');
		return target[key];
	},
	set(target,key,value){
		invariant(key,'set');
		return true;
	}
}

function invariant(key,action){
	if(key[0] === '_'){
		throw new Error(`Invalid attempt to ${action} private "${key}" property`);
	}
}

var target = {};
var proxy = new Proxy(target,handler);
console.log(proxy._prop);
proxy._prop = 'c';
