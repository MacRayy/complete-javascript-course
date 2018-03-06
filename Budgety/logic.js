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
		},
		budget: 0,
		percentage: -1
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

	const getBudget = () => {
		return {
			budget: budgetData.budget,
			totalInc: budgetData.totals.inc,
			totalExp: budgetData.totals.exp,
			percentage: budgetData.percentage
		}
	}

	const deleteItem = (type, id) => {
		let ids = []
		let index = 0

		ids = budgetData.allItems[type].map( current => current.id)

		index = ids.indexOf(id)

		if (index !== -1) {
			budgetData.allItems[type].splice(index, 1)
		}

		console.log(budgetData);
	}

	const calculateBudget = () => {
		// calculate total income and expenses
		calculateTotal('inc')
		calculateTotal('exp')

		// calculate budget
		budgetData.budget = budgetData.totals.inc - budgetData.totals.exp

		// calculate % of total income that spent
		if (budgetData.totals.inc > 0) {
			budgetData.percentage = Math.round((budgetData.totals.exp / budgetData.totals.inc) * 100)
		} else {
			budgetData.percentage = -1
		}
	}

	const calculateTotal = (type) => {
		let sum = budgetData.allItems[type].reduce((prev, curr) => prev + curr.value, 0)
		budgetData.totals[type] = sum
	}

	return {
		budgetData,
		addItem,
		calculateBudget,
		getBudget,
		deleteItem
	}
})()

export default budgetController
