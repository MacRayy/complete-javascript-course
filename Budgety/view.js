'use strict'

const UIController = (function () {
	const DOMStrings = {
		addBtn: '.add__btn',
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value'
	}

	const getInput = () => {
		return {
			type: document.querySelector(DOMStrings.inputType).value, //will be 'inc' or 'exp'
			description: document.querySelector(DOMStrings.inputDescription).value,
			value: document.querySelector(DOMStrings.inputValue).value
		}
	}

	return {
		getInput,
		DOMStrings
	}

})()

export default UIController
