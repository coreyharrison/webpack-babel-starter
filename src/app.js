import example from './module';

console.log(example.name);

const name = document.createElement('h2');
name.textContent = example.name;

document.querySelector('body').appendChild(name);

async function getPosts () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  const data = await response.json();

  return data;
}

getPosts().then(posts => console.log(posts));