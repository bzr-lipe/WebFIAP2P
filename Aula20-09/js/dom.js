//pegando pelo id 
const getId1 = document.getElementById('herois');
console.log(getId1)

// ou

const getId2 = document.querySelector('#heroi3');
console.log(getId2);

// peganndo pela class

const getClass1 = document.getElementsByClassName('heroi');
console.log(getClass1);
console.log(getClass1[2]);
console.log(getClass1[2].textContent);

const getClass2 = document.querySelector('.nome');
console.log(getClass2);
console.log(getClass2[3]); 
console.log(getClass2[3].textContent);
getClass2[3].textContent = 'Mulher Maravilha' 

//pegar pela tag
const getTag1 = document.getElementsByTagName('th');
console.log(getTag1);

const getTag2 = document.querySelector('td');
console.log(getTag2);