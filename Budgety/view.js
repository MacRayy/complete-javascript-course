'use strict'

const UIController = (function () {
	const DOMStrings = {
		addBtn: '.add__btn',
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		incomeContainer : '.income__list',
		expensesContainer: '.expenses__list'
	}

	const getInput = () => {
		return {
			type: document.querySelector(DOMStrings.inputType).value, //will be 'inc' or 'exp'
			description: document.querySelector(DOMStrings.inputDescription).value,
			value: document.querySelector(DOMStrings.inputValue).value
		}
	}

	const addListItem = (obj, type) => {
		let html = ''
		let element = ''

		if (type === 'inc') {
			element = DOMStrings.incomeContainer
			html = `<div class="item clearfix" id="income-${obj.id}">
								<div class="item__description">${obj.description}</div>
								<div class="right clearfix">
									<div class="item__value">${obj.value}</div>
									<div class="item__delete">
										<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
									</div>
								</div>
							</div>`
		} else if (type === 'exp') {
			element = DOMStrings.expensesContainer
			html = `<div class="item clearfix" id="expense-${obj.id}">
								<div class="item__description">${obj.description}</div>
								<div class="right clearfix">
									<div class="item__value">${obj.value}</div>
									<div class="item__percentage">21%</div>
									<div class="item__delete">
										<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
									</div>
								</div>
							</div>`
		}

		document.querySelector(element).insertAdjacentHTML('beforeend', html)
	}

	const clearFields = () => {
		let fields = ''
		let fieldsArray = []
		fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue)
		fieldsArray = Array.from(fields)
		// fieldsArray = Array.prototype.slice.call(fields)
		fieldsArray.forEach(node => node.value = '')
		fieldsArray[0].focus()
	}

	return {
		DOMStrings,
		getInput,
		addListItem,
		clearFields
	}

})()

export default UIController
