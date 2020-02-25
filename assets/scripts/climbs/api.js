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

const getClimbs = function () {
  return $.ajax({
    url: config.apiUrl + '/climbs',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const removeClimbs = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/climbs/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  createClimb,
  updateClimb,
  getClimbs,
  removeClimbs

}
