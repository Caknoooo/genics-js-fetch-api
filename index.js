function max(a, b) {
  return a > b ? a : b;
}

console.log(1, 2)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const url = "https://jsonplaceholder.typicode.com/users";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(err) {
    console.log(err)
  }
}

fetchData(url);