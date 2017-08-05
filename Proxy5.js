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
		client.open("GET",url);
		client.onreadystatechange = handler;
		client.responseType ="json";
		client.setRequestHeader("Accept","application/json");
		client.send();

		function handler() {
			if(this.readyState !== 4){
				return;
			}
			if(this.status === 200){
				resolve(this.response);
			}else{
				reject(new Error(this.statusText));
			}
		}
	});
	return promise;
};

getJson("/post/1.json").then(
   post => getJson(post.commentURL);
).then(
    comments => console.log("Resolve:",comments);
    err => console.log("Reject:",err);
)

var promise = new Promise(function(resolve,reject){
	resolve("ok");
	throw new Error('test');
})

promise.then(function(value){console.log(value)})
        .catch(function(error){console.log(error)});

class Foo{
	constructor(){
		return Object.create(null); //现在返回的不再是this
	}
}

//定义类
class Point{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	toString(){
		return '('+this.x+","+this.y+")";
	}
}