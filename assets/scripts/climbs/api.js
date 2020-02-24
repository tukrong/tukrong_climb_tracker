'use strict'
const store = require('./../store')
const config = require('./../config')

const createClimb = function (data) {
  return $.ajax({
    url: config.apiUrl + '/climbs',
    method: 'POST',
    data: data
  })
}

module.exports = {
  createClimb
}
