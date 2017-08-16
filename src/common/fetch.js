import fetchJsonp from 'fetch-jsonp'
import * as config from './config'
require('es6-promise').polyfill()

export function fetch_movie(params) {
  if (!params) {
    return false
  }
  let REQUEST_PATH = config.SERVER_PATH + `/movie/${params.type}`
  console.log(params.type)
  if (params.type !== 'us_box') {
    REQUEST_PATH += `?start=${params.start}&count=${params.count}`
  }
  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 3400
  })
  return result.then(function (response) {
    console.log(response.json())
    return response.json()
  })
  .catch(function (err) {
    console.log('Fetch error: ', err)
  })
}

export function fetch_movieDetail(params) {
  if (!params) {
    return false
  }
  const REQUEST_PATH = config.SERVER_PATH + `/movie/subject/${params.id}`
  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 3400
  })
  return result.then(function (response) {
    // console.log(response.json())
    return response.json()
  })
  .catch(function (err) {
    console.log('Fetch movie detail error: ', err)
  })
}

