//22_尚硅谷_Promise从入门到自定义_自定义Promise_构造函数实现1.avi
/*
 自定义Promise函数模块： IIFE
 */
(function(window) {
	/*
	Promise构造函数 
	excutor：执行器函数(同步执行)
	*/
	function Promise(excutor){
		
	}
	
	/**
	 * Promise原型对象的then方法
	 * 指定成功和失败的回调函数
	 * 返回一个新的Promise对象
	 */
	Promise.prototype.then = function(onResolved, onRejected){
		
	}
	
	/**
	 * Promise原型对象的catch方法
	 * 指定失败的回调函数
	 * 返回一个新的promise对象
	 */
	Promise.prototype.catch = function(onRejected){
		
	}
	
	/**
	 * Promise原型对象的resolve方法
	 * 返回一个指定结果的成功的promise
	 */
	Promise.resolve = function(value){
		
	}
	
	/**
	 * Promise原型对象的reject方法
	 * 返回一个指定reason的失败的Promise
	 */
	Promise.reject = function(reason){
		
	}
	
	/**
	 * Promise原型对象的all方法
	 * 返回一个promise，只有当所有promise都成功时才成功，否则只要有一个失败的就失败
	 */
	Promise.all = function(promises){
		
	}
	
	/**
	 * Promise原型对象的race方法
	 * 返回一个promise，其结果由第一个完成的promise决定
	 */
	Promise.race = function(promises){
		
	}
	
	// 向外暴露Promise函数
	window.Promise = Promise
})(window)
