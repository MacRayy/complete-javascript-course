'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = function (budgetCtrl, UICtrl) {
	let budget = {}

	const init = () => {
		console.info('start')
		setupEventListeners()
	}

	const setupEventListeners = () => {
		const DOM = UICtrl.DOMStrings

		document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem)

		document.addEventListener('keypress', (event) => {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem()
			}
		})
	}

	const updateBudget = () => {
		// 1. Calculate the budget
		budgetCtrl.calculateBudget()

		// 2. Retrn the budget
		budget = budgetCtrl.getBudget()

		// 3. Display the budget on the UI
		console.log(budget)
	}

	const ctrlAddItem = () => {
		// 1. Get the filed input data
		const input = UICtrl.getInput()

		if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
			// 2. Add the item to the budget controller
			const newItem = budgetCtrl.addItem(input.type, input.description, input.value)

			// 3. Add the item to the UI
			UICtrl.addListItem(newItem, input.type)

			// 4. Clear the fields
			UICtrl.clearFields()

			// 5. Calvulate and update budget
			updateBudget()

			// console.log(budgetCtrl.budgetData)
		}
	}

	return {
		init
	}
}

// START APP
controller(budgetController, UIController).init()

