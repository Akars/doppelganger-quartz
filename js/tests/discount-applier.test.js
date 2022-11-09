const test = require('tape')
const DiscountApplier = require('../discount-applier')

const discountApplier = new DiscountApplier({
  notificationSent: 0,
  notify: ((user, message) => this.notificationSent++)
})

const testUsers = ['Benoit', 'Titouan', 'William']

test('apply v1', (t) => {
  // TODO: write a test that fails due to the bug in
  const discount = '3$'
  discountApplier.applyV1(discount, testUsers)
  t.equal(discountApplier.notifier.notificationSent, testUsers.length)
  t.end()
})

test('apply v2', (t) => {
  // TODO: write a test that fails due to the bug in
  // DiscountApplier.applyV2
  t.end()
})
