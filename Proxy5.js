let target = {};

let handler = {
	ownKeys(target){
		return ['hello','world'];
	}
};

let proxy = new Proxy(target,handler);

Object.keys(proxy);
//异步加载图片
function loadImageAsync(url){
	return new Promise(function(resolve,reject){
		var image = new Image();
		image.onload = function(){
			resolve(image);
		};
		image.onerror = function(){
			reject(new Error('Could not load image at'+url));
		};
		image.src = url;
	});
}

//用promoise实现ajax操作
var getJson = function(url){
	var promise = new Promise(function(resolve,reject){
		var client = new XMLHttpRequest();//首先创建一个XMLHtppRequest实例
	})
}