const matrix = [[1, 2, 3], 
               [4, 5, 6],
               [7, 8, 9]];

matrix[0][0] = 'x';    
matrix[0][1] = 'y';               
matrix[0][2] = 'z';               



for(let row of matrix){
    const rowString = row.join(' ');
console.log(rowString);
}
