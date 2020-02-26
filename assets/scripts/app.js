'use strict'
const authEvents = require('./auth/events')
const climbEvents = require('./climbs/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#climb').on('submit', climbEvents.onCreateClimb)
  $('#climbUpdate').on('submit', climbEvents.onUpdateClimb)
  $('#change-password').hide()
  $('#climb').hide()
  $('#climbUpdate').hide()
  $('#climbsButtonHide').hide()
  $('#sign-out').hide()
  // $('#climb-form').on('submit', climbEvents.onUpdateClimb)
  // $('#update-modal').hide()
  // $('#updateClimb').on('submit', climbEvents.onUpdateClimb)
  climbEvents.addHandlers()
})
