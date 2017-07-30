var pipe = (function(){
	var pipe;
	return function(value){
		pipe = [];//将其命名为一个数组
		return new Proxy({},{
			get:function(pipeObject,fnName){
				if(fnName=='get'){
					return pipe.reduce(function(val,fn){
						return fn(val);
					},value);
				}
				pipe.push(window[fnName]);
				return pipeObject;
			}
		});
	}
}());