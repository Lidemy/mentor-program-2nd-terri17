var add = require('./hw5')

describe("hw5", function() {
  it("should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111", function() {
    expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222')
  })
})

describe("hw5", function() {
  it("should return correct answer when a=123 and b=456", function() {
    expect(add('123', '456')).toBe('579')
  })
})

describe("hw5", function() {
  it("should return correct answer when a=99999 and b=99999999", function() {
    expect(add('99999', '99999999')).toBe('100099998')
  })
})
