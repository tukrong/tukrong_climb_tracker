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
  const data = getFormFields(event.target)

  api.updateClimb(data)
    .then(ui.onUpdateClimbSuccess)
    .then(function () {
      onGetClimbs(event)
    })
    .catch(ui.onUpdateClimbFailure)
}

const onGetClimbs = (event) => {
  event.preventDefault()
  api.getClimbs()
    .then(ui.getClimbsSuccess)
    .catch(ui.getClimbsfailure)
}

const onClearClimbs = (event) => {
  event.preventDefault()
  ui.clearClimbs()
}
const onRemoveClimbs = (event) => {
  const id = $(event.target).data('id')
  // console.log($(event.target))
  api.removeClimbs(id)
    .then(function () {
      onGetClimbs(event)
    })
    .catch(ui.failure)
}

// const showUpdateForm = (event) => {
//   event.preventDefault()
//   $('#update-modal').modal('show')
// }

const addHandlers = () => {
  $('#getClimbsButton').on('click', onGetClimbs)
  $('#clearClimbsButton').on('click', onClearClimbs)
  $('.content').on('click', '.remove-climb', onRemoveClimbs)
  // $('.content').on('click', '.update-climb', showUpdateForm)
}
module.exports = {
  onCreateClimb,
  onUpdateClimb,
  addHandlers
}
