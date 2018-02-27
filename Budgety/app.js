'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = function (budgetCtrl, UICtrl) {
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
		const input = UICtrl.getInput()
		console.log(input)
	}

	return {
		init: () => {
			console.log('start')
			setupEventListeners()
		}
	}
}

controller(budgetController, UIController)

// START APP
controller.init()
