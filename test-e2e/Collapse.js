module.exports = {
  'Smoketest, examples are loaded': function (browser) {
    browser
      .url('http://localhost:8080/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Example 1')
      .assert.containsText('body', 'Example 2')
      .assert.containsText('body', 'Example 3')
      .assert.containsText('body', 'Example 4')
      .end();
  }
};
