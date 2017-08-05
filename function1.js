//写法1 对象解构
function m1({x = 0,y = 0}={}){
	return [x,y];
}
//方法2 没有进行对象的解构
function m2({x,y} = { x= 0, y = 0}){
	return [x,y];
}
//rest参数
function add(...values){
	let sum  = 0;

	for(var val of values){
		sum += val;
	}

	return sum;
}

//arguments 变量的写法
const sortNumbers = () => Array.property.slice.call(arguments).sort();

//rest参数写法
const sortNumbers = (...numbers) => numbers.sort();

function push(array,...items){
	items.forEach( item => {
		array.push(item);
		console.log(item);
	});
}

//ES5 的写法
function f(x,y,z){}
var args = [1,2,3];
f.apply(null,args);

//ES6的写法
function f(x,y,z){}
var args = [1,2,3];
f(...args);

//ES5的写法
var arr1 = [0,1,2];
var arr2 = [3,4,5];
Array.prototype.push.apply(arr1,arr2);

//ES6的写法
var arr1 = [0,1,2];
var arr2 = [3,4,5];
arr.push(..arr2);

//ES5
[1,2].concat(more)
//ES6
[1,2,...more]

var nodeList = document.querySelectorAll('div');
var array = [...nodeList];

let map = new Map([
   [1,'one'],
   [2,'two'],
   [3,'three'],
]);

let arr = [...map.keys()];

//箭头函数用法
var f = v => v;
//上面的函数等同于
var f = function(v){
	return v;
}
//传递多个参数
var sum = (num1+num2) => num1 + num2;
//等同于
var sum = function(num1,num2){
	return num1 + num2;
};

const full = ({first,last}) => first + ' '+last;

//等同于
function full(person){
	return person.first + " " + person.name;
}

//正常函数的写法
var result = values.sort(function(a,b){
	return a - b;
});
//箭头函数的写法
var result = values.sort( (a,b) => a - b);

//对象的写法
var properties = {
	"width":1,
	"height":1
};

if(properties[someName]){
	//do something
}

//Set 的写法
var properties = new Set();

properties.add("width");
properties.add("height");

if(properties.has(someName)){
	//doing  something
}

let set = new Set(['red','green','blue']);

for(let item of set.keys()){
	console.log(item);
}