'use strict'

const store = require('./../store')

const onCreateClimbSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully created a climb!')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

module.exports = {
  onCreateClimbSuccess
}
