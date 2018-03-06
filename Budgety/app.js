'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = function (budgetCtrl, UICtrl) {
	let budget = {
		budget: 0,
		totalInc: 0,
		totalExp: 0,
		percentage: -1
	}

	const init = () => {
		console.info('start')
		UICtrl.displayBudget(budget)
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

		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)
	}

	const updateBudget = () => {
		// 1. Calculate the budget
		budgetCtrl.calculateBudget()

		// 2. Retrn the budget
		budget = budgetCtrl.getBudget()

		// 3. Display the budget on the UI
		UICtrl.displayBudget(budget)
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

	const ctrlDeleteItem = (event) => {
		let itemID = event.target.parentNode.parentNode.parentNode.parentNode.id
		let splitID = []
		let type = ''
		let ID = ''

		if (itemID) {
			splitID = itemID.split('-')
			type = splitID[0]
			ID = parseInt(splitID[1])

			// 1.delete the item from the data structure
			budgetCtrl.deleteItem(type, ID)

			// 2. delete the item from UI

			// 3. update the UI with the new budget
		}
	}

	return {
		init
	}
}

// START APP
controller(budgetController, UIController).init()

