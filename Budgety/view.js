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
		percentageLabel: '.budget__expenses--percentage',
		container: '.container',
		expensesPercLabel: '.item__percentage',
		dateLabel: '.budget__title--month'
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
			html = `<div class="item clearfix" id="inc-${obj.id}">
								<div class="item__description">${obj.description}</div>
								<div class="right clearfix">
									<div class="item__value">${formatNumber(obj.value, type)}</div>
									<div class="item__delete">
										<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
									</div>
								</div>
							</div>`
		} else if (type === 'exp') {
			element = DOMStrings.expensesContainer
			html = `<div class="item clearfix" id="exp-${obj.id}">
								<div class="item__description">${obj.description}</div>
								<div class="right clearfix">
									<div class="item__value">${formatNumber(obj.value, type)}</div>
									<div class="item__percentage">21%</div>
									<div class="item__delete">
										<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
									</div>
								</div>
							</div>`
		}

		document.querySelector(element).insertAdjacentHTML('beforeend', html)
	}

	const deleteListItem = (selectorID) => {
		let el = document.getElementById(selectorID)
		el.parentNode.removeChild(el)
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
		let type = ''
		type = obj.budget > 0 ? type = 'inc' : type = 'exp'

		document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type)
		document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc
		document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp

		if (obj.percentage > 0) {
			document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%'
		} else {
			document.querySelector(DOMStrings.percentageLabel).textContent = '---'
		}
	}

	const displayPercentages = (percentages) => {
		let fields = [...document.querySelectorAll(DOMStrings.expensesPercLabel)]
		fields.forEach((item, index) => {
			if (percentages[index] > 0) {
				item.textContent = percentages[index] + '%'
			} else {
				item.textContent = '---'
			}
		})
	}

	const displayMonth = () => {
		const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		const now = new Date()
		const month = now.getMonth()
		const year = now.getFullYear()
		document.querySelector(DOMStrings.dateLabel).textContent = `${months[month]} ${year}`
	}

	const formatNumber = (num, type) => {
		let numSplit = []
		let int = ''
		let dec = ''

		num = Math.abs(num)
		num = num.toFixed(2)

		numSplit = num.split('.')

		int = numSplit[0]
		if (int.length > 3 ) {
			int = `${int.substr(0, int.length - 3)},${int.substr(int.length - 3, int.length)}`
		}

		dec = numSplit[1]

		return `${(type === 'exp' ? '-' : '+')} ${int}.${dec}`
	}

	return {
		DOMStrings,
		getInput,
		addListItem,
		clearFields,
		deleteListItem,
		displayBudget,
		displayPercentages,
		displayMonth
	}

})()

export default UIController
