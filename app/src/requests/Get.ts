export const GetData = async (
  url: any,
  token: any,
  otherFunction: any,
  errorFunction: any,
) => {
  await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : null,
    },
  })
    .then(response => {
      const statusCode = response.status
      const data = response.json()

      return Promise.all([statusCode, data])
    })
    .then(([res, data]) => {
      if (res < 300) {
        otherFunction(data, null)
      } else {
        otherFunction(data, res)
        console.log('error statusCode ' + url, res)
      }
    })
    .catch(e => {
      console.log('e ', url, e.message)
      errorFunction(e)
    })
}
