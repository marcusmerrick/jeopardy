function getTodo(id = 1) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  .then(response => response.json())
  .then(json => console.log(json))
}

export default getTodo




