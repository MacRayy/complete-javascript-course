'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = function (budgetCtrl, UICtrl) {
	const DOM = UICtrl.DOMStrings

	const ctrlAddItem = () => {
		const input = UICtrl.getInput()
		console.log(input)
	}

	document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem)

	document.addEventListener('keypress', (event) => {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem()
		}
	})
}

controller(budgetController, UIController)
