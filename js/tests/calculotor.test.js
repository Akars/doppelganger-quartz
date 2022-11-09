const test = require('tape')
const Calculator = require('../calculator')



test('should throw when not authorized', (t) => {
  const falseAuthorizer = { authorize: (() => false) }
  const calculator = new Calculator(falseAuthorizer)

  calculator.divide()
  // We verify if the call of divide() was authorize
  t.equal(calculator.authorizer.authorize(), true)
  t.end()
})
