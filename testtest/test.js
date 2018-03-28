'use strict'

import test from 'tape'
import App from './app'

const testApp = App()

test('A passing test', (assert) => {
	assert.pass('This test will pass.')
	assert.end()
})

test('greeting say hello', (t) => {
	t.equal(testApp.greet(), 'hello')
	t.end()
})

test('a + b equals the total', (t) => {
	t.equal(testApp.sum(2, 2), 4)
	t.equal(testApp.sum(-1, 1), 0)
	t.equal(testApp.sum(-1, -1), -2)
	t.end()
})
