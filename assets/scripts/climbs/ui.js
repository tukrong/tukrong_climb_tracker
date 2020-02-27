'use strict'

// const store = require('./../store')
const showClimbsTemplate = require('../templates/climb-listing.handlebars')

const onCreateClimbSuccess = function () {
  // $('#message').text(response.user.email + ' successfully created a climb!')
  $('#climb').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text('Climb created')
}
// $('#update-modal').modal('show')
// const onCreateClimbFailure

const onUpdateClimbSuccess = function () {
  $('#climbUpdate').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const getClimbsSuccess = (data) => {
  // console.log(data)
  $('.content').html('')
  const showClimbsHtml = showClimbsTemplate({ climbs: data.climbs })
  $('.content').append(showClimbsHtml)
  $('#message').text('you have created a climb')
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}

const clearClimbs = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onCreateClimbSuccess,
  failure,
  clearClimbs,
  getClimbsSuccess,
  onUpdateClimbSuccess
}
