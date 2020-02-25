'use strict'

const store = require('./../store')

const onCreateClimbSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully created a climb!')
  $('#climb').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

// const onCreateClimbFailure

const onUpdateClimbSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully upated a climb!')
  $('#climb').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

module.exports = {
  onCreateClimbSuccess,
  onUpdateClimbSuccess
}
