'use strict'

// const store = require('./../store')
const showClimbsTemplate = require('../templates/climb-listing.handlebars')

const onCreateClimbSuccess = function (response) {
  // $('#message').text(response.user.email + ' successfully created a climb!')
  $('#climb').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

// const onCreateClimbFailure

const onUpdateClimbSuccess = function (response) {
  // $('#message').text(response.user.email + ' successfully upated a climb!')
  $('#climb').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const getClimbsSuccess = (data) => {
  // console.log(data)
  $('.content').html('')
  const showClimbsHtml = showClimbsTemplate({ climbs: data.climbs })
  $('.content').append(showClimbsHtml)
}

const clearClimbs = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onCreateClimbSuccess,
  onUpdateClimbSuccess,
  failure,
  clearClimbs,
  getClimbsSuccess
}
