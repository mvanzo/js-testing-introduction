// Node.js is the import language supported by Jest, can't use ES6...import { generateText } from 'util'
const { generateText } = require('./util')

// description, function to run test
// below is one unit test with text passed into a function
test('should output name and age', () => {
    const text = generateText('Max', 29)
    expect(text).toBe('Max (29 years old)')
})

// below is a second unit test for the same function, but with no data passed in
test('should output data-less text', () => {
    const text = generateText()
    expect(text).toBe('undefined (undefined years old)')
})