'use strict'

import UIController from './view.js'
import budgetController from './logic.js'

const controller = (function (budgetCtrl, UICtrl) {

	budgetCtrl.publicTest(5)
	UICtrl.printAlma()

})(budgetController, UIController)
