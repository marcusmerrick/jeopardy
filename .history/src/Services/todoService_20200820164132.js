function getTodo(id = 1) {

  const promise =   fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  console.log("1.", promise)
  const promisepromise.then(response => response.text())
}

export default getTodo




