import fetchJsonp from 'fetch-jsonp'

function fetch() {
  fetchJsonp('https://api.douban.com/v2/book/1220562')
  .then(function (response) {
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