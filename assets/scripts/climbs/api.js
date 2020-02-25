'use strict'
const store = require('./../store')
const config = require('./../config')

const createClimb = function () {
  return $.ajax({
    url: config.apiUrl + '/climbs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      climb: {
        route_name: console.log(),
        route_grade: console.log(),
        number_of_tries: console.log(),
        did_send: false
      }
    }
  })
}

module.exports = {
  createClimb
}
