'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = function (budgetCtrl, UICtrl) {
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

	const ctrlAddItem = () => {
		// 1. Get the filed input data
		const input = UICtrl.getInput()

		// 2. Add the item to the budget controller
		const newItem = budgetCtrl.addItem(input.type, input.description, input.value)

		// 3. Add the item to the UI
		UICtrl.addListItem(newItem, input.type)
		UICtrl.clearFields()

		// 4. Calculate the budget

		// 5. Display the budget on the UI
	}

	return {
		init
	}
}

// START APP
controller(budgetController, UIController).init()

