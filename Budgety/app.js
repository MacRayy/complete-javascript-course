'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = function (budgetCtrl, UICtrl) {
		const init = () => {
			console.log('start')
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
		const input = UICtrl.getInput()
		console.log(input)
	}

	return {
		init
	}
}

// START APP
controller(budgetController, UIController).init()

