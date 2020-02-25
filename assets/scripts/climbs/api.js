'use strict'
const store = require('./../store')
const config = require('./../config')

const createClimb = function (data) {
  return $.ajax({
    url: config.apiUrl + '/climbs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateClimb = function (data) {
  return $.ajax({
    url: config.apiUrl + '/climbs',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createClimb,
  updateClimb
}
