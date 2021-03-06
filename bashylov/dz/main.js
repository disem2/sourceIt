var multiplicationTableHolder = document.getElementById('multiplication-table');
var matrixHolder = document.getElementById('matrix');
var pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML =  render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
	var table = [];
		for (var i=0; i<size; i++){
			table[i]=[];
			for (var j=0; j<size; j++){
				table[i][j] = (i+1)*(j+1);
			}
		}
    return table;
}

function matrix (size) {
	size=20
    var matrix = [];
		for (var i=0; i<size; i++){
			matrix[i]=[];
			for (var j=0; j<size; j++){
				if (i==j){
					matrix[i][j] = 1 ;
				} else if ((i+j)==(size-1)){
					matrix[i][j] = 2;
				} else if (i<j && i+j < size){
					matrix[i][j]= 3;
				} else if (i<j && i+j >= size){
					matrix[i][j]= 4;
				} else if (i>j && i+j <= size){
					matrix[i][j]= 5;
				} else if (i>j && i+j > size){
					matrix[i][j]= 6;
				}
			}
		}	
    return matrix;
}

function pascal (size) {
    var pascal = [];
		for (var i=0; i<size; i++){
			pascal[i]=[];
			for (j=0; j<size; j++){
				if (j==0 || i==j){
					pascal[i][j]=1;
				} else if (i>j){
					var a=pascal[i-1][j-1]; var b=pascal[i-1][j];
					pascal[i][j]=(a+b)
				}
			}
		}
    return pascal;
}
function render (array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }
    return result.join('');
}