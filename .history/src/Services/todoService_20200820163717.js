function getTodo(promise = 1) {

  const promise =   fetch('https://jsonplaceholder.typicode.com/posts/' + promise)
  (console.log("1.", promise))
}

export default getTodo




