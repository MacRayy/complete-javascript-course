'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = (function (budgetCtrl, UICtrl) {
	const ctrlAddItem = () => {
		console.log('alma')
	}

	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

	document.addEventListener('keypress', (event) => {
		if (event.keyCode === 13 || event.which === 13) {
			ctrlAddItem()
		}
	})

})(budgetController, UIController)
