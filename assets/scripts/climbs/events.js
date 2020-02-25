'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateClimb = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createClimb(data)
    .then(ui.onCreateClimbSuccess)
    .catch(ui.onCreateClimbFailure)
}

const onUpdateClimb = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.updateClimb(data)
    .then(ui.onUpdateClimbSuccess)
    .catch(ui.onUpdateClimbFailure)
}
module.exports = {
  onCreateClimb,
  onUpdateClimb
}
