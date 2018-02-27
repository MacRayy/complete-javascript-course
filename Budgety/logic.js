'use strict'

const budgetController = (function () {
	const budgetData = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	}

	// ES5
	// const Expense = function (id, description, value) {
	// 	this.id = id
	// 	this.description = description
	// 	this.value = value
	// }

	// const Income = function (id, description, value) {
	// 	this.id = id
	// 	this.description = description
	// 	this.value = value
	// }

	// ES6
	class Expense {
		constructor (id, description, value) {
			this.id = id
			this.description = description
			this.value = value
		}
	}

	class Income {
		constructor (id, description, value) {
			this.id = id
			this.description = description
			this.value = value
		}
	}

	const addItem = (type, des, val) => {
		let newItem
		let ID = 0

		// Create new ID
		if (budgetData.allItems[type].length > 0) {
			// ID = budgetData.allItes[type][budgetData.allItems[type].length - 1].id + 1
			ID = [...budgetData.allItems[type]].pop().id + 1
		}

		//Create new item based on 'inc' or 'exp' type
		if (type === 'exp') {
			newItem = new Expense(ID, des, val)
		} else if (type === 'inc') {
			newItem = new Income(ID, des, val)
		}

		//Push it into date structure
		budgetData.allItems[type].push(newItem)

		//Return new item
		return newItem
	}

	return {
		addItem,
		budgetData
	}
})()

export default budgetController
