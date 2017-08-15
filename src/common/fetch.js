import fetchJsonp from 'fetch-jsonp'

function fetch(params) {
  const result = fetchJsonp(`https://api.douban.com/v2/movie/in_theaters?start=${params.start}&count=${params.count}`, {
    timeout: 3400
  })
  result.then(function (response) {
    console.log(response.json())
    return response.json()
  })
  .then(function(json) {
    console.log('Json res', json.rating.numRaters)
  })
  .catch(function (err) {
    console.log('Fetch error: ', err)
  })
}

export default fetch