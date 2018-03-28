'use strict'

const App = function () {
	const greet = () => 'hello'

	const sum = (a, b) => a + b

	// greet()
	return {
		greet,
		sum
	}
}

export default App
