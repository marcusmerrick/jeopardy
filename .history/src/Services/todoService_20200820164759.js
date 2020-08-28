function getTodo(id = 1) {

  const promise =   fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  console.log("1.", promise)
  const promiseofwhat = promise.then(response => response.text())
  console.log('2.', promiseofwhat)
  
  promiseofwhat.then
}

export default getTodo




