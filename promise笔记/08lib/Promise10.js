//24_尚硅谷_Promise从入门到自定义_自定义Promise_构造函数测试和完善.avi
/*
 自定义Promise函数模块： IIFE
 */
(function(window) {
	/*
	Promise构造函数 
	excutor：执行器函数(同步执行)
	*/
	function Promise(excutor){
		// 将当前promise对象保存起来
		const self = this
		self.status = 'pending' // 给promise对象指定status属性，初始值为pending
		self.data = undefined // 给promise对象指定一个用于储存结果数据的属性
		self.callbacks = [] // 每个元素的结构：{ onResolved(){}, onRejected(){}}
		
		function resolve(value){
			// 如果当前状态不是pending，直接结束
			if(self.status !== 'pending'){ //如果是直接使用this而不是self，则此时的this会是window对象
				return
			}
			
			// 将状态改为resolved
			self.status = 'resolved'
			// 保存value数据
			self.data = value
			// 如果有待执行callback函数，立即异步执行回调函数onResolved
			if(self.callbacks.length > 0){
				setTimeout(() => { // 放入队列中执行所有成功的回调
					self.callbacks.forEach(callbacksObj => {
						callbacksObj.onResolved(value)
					})
				})
			}
		}
		
		function reject(reason){
			// 如果当前状态不是pending，直接结束
			if(self.status !== 'pending'){
				return
			}
			
			// 将状态改为rejected
			self.status = 'rejected'
			// 保存reason数据
			self.data = reason
			// 如果有待执行callback函数，立即异步执行回调函数onRejected
			if(self.callbacks.length > 0){
				setTimeout(() => { // 放入队列中执行所有失败的回调
					self.callbacks.forEach(callbacksObj => {
						callbacksObj.onRejected(reason)
					})
				})
			}
		}
		
		// 立即同步执行excutor
		try{
			excutor(resolve, reject)
		} catch (error) { // 如果执行器抛出异常，promise对象变为rejected状态
			reject(error)
		}
		
	}
	
	/**
	 * Promise原型对象的then方法
	 * 指定成功和失败的回调函数
	 * 返回一个新的Promise对象
	 */
	Promise.prototype.then = function(onResolved, onRejected){
		const self = this
		// 假设当前状态还是pending状态，将回调函数保存起来
		self.callbacks.push({
			onResolved,
			onRejected
		})
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
