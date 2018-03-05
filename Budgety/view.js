'use strict'

const UIController = (function () {
	const DOMStrings = {
		addBtn: '.add__btn',
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		incomeContainer : '.income__list',
		expensesContainer: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expensesLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage'
	}

	const getInput = () => {
		return {
			type: document.querySelector(DOMStrings.inputType).value, //will be 'inc' or 'exp'
			description: document.querySelector(DOMStrings.inputDescription).value,
			value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
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

	const displayBudget = (obj) => {
		document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget
		document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc
		document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp

		if (obj.percentage > 0) {
			document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%'
		} else {
			document.querySelector(DOMStrings.percentageLabel).textContent = '---'
		}
	}

	return {
		DOMStrings,
		getInput,
		addListItem,
		clearFields,
		displayBudget
	}

})()

export default UIController
