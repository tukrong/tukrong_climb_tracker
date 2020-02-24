'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateClimb = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.onCreateClimb(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

module.exports = {
  onCreateClimb
}
