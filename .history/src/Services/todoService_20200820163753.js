function getTodo(id = 1) {

  const promise =   fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  (console.log("1.", promise))
}

export default getTodo




