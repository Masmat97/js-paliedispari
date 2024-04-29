
//     let select = prompt("pari o dispari", );
//     console.log(select)
//     let number = prompt("da 1 a 5", );
//     console.log(number)

// const getRandomInt = ( min = 1, max = 5 ) => {
//     const arr = [ 1, 2, 3, 4, 5, ],
// 	items = arr.length,
// 	total = items - 1,
// 	index = getRandomInt( 0, total );
	
// console.log( arr[index] ); 
// 	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
// }


//Dichiarazione
function test() {
    
    let select = prompt("pari o dispari" );
    console.log(select)
    let number = prompt("da 1 a 5");
    console.log(number)

const getRandomInt = ( min = 1, max = 5 ) => {
    const arr = [ 1, 2, 3, 4, 5, ],
	items = arr.length,
	total = items - 1,
	index = getRandomInt( 0, total );
	
console.log( arr[index] ); 
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

var z = (number) + getRandomInt;
return z;

console.log("result")




  }
  
  //Esecuzione
  test();
  