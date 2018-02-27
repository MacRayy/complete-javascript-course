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

	const Expense = (id, description, value) => {
		this.id = id
		this.description = description
		this.value = value
	}

	const Income = (id, description, value) => {
		this.id = id
		this.description = description
		this.value = value
	}
})()

export default budgetController
