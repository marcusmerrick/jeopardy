function getTodo(id = 1) {

  const promise =   fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  console.log("1.", promise)
  const promiseofwhat = promise.then(response => response.json())
  console.log('2.', promiseofwhat)
  
  promiseofwhat.then(payload => {
    console.log(payload)
  })
}

fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  .then(response => response.json())
  .then (payload => {
    console.log(payload)
  })
}
export default getTodo




