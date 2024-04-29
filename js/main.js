
    let select = prompt("pari o dispari", );
    let number = prompt("da 1 a 5", );
    
  


const getRandomInt = ( min = 1, max = 5 ) => {
	return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

const arr = [ 1, 2, 3, 4, 5, ],
	items = arr.length,
	total = items - 1,
	index = getRandomInt( 0, total );
	
console.log( arr[index] ); 


