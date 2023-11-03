// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
// Progression 3: When the promise call is rejected then throw an error
const btnGet = document.getElementById('btnGet');

btnGet.addEventListener('click', handlePromise);

function handlePromise() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data), appendData(data);
    })
    .catch((error) => {
      console.log('Promise rejected.');
      console.log(error.message);
    });
}

// Progression 2: Display the fetched data in the form of list
const message = document.getElementById('message');

function appendData(data) {
  data.forEach((el) => {
    let div = document.createElement('div');
    div.className = 'player';

    let p1 = document.createElement('p');
    p1.innerText = `Name : ${el.name}`;
    let p2 = document.createElement('p');
    p2.innerText = `Email : ${el.email}`;
    let p3 = document.createElement('p');
    p3.innerText = `Phone : ${el.phone}`;
    let p4 = document.createElement('p');
    p4.innerText = `Website : ${el.website}`;
    let p5 = document.createElement('p');
    p5.innerText = `Company : ${el.company.name}`;
    let p6 = document.createElement('p');
    p6.innerText = `City : ${el.address.city}`;
    let p7 = document.createElement('p');
    p7.innerText = `Zipcode : ${el.address.zipcode}`;

    div.append(p1, p2, p3, p4, p5, p6, p7);
    message.append(div);
  });
}

