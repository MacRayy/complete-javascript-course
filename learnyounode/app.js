'use strict'

// const sum = () => {
// 	const args = process.argv.slice(2)
// 	let sum = 0
// 	for (let i = 0; i < args.length; i++) {
// 		sum += parseInt(args[i])
// 	}
// 	return console.log(sum)
// }

// sum()

// const fs = require('fs')

// const countLines = () => console.log(fs.readFileSync(process.argv[2], {encoding: 'utf8'}).split('\n').length - 1)

// countLines()


const fs = require('fs')

const countLines = () => fs.readFile(process.argv[2], {encoding: 'utf8'}, (err, data) => (err) ? err : console.log(data.split('\n').length - 1))

countLines()
