function getTodo(id) {
  fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  .then(response => response.json())
  .then(json => console.log(json))
}





