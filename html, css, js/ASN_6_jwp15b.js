function Distance_Formula(x1,x2,y1,y2,z1,z2) {
	var x = Math.pow(x2 - x1, 2);
	var y = Math.pow(y2 - y1, 2);
	var z = Math.pow(z2 - z1, 2);
	var a = (x + y + z);
	var d = Math.sqrt(a);
}

function Quadratic_Formula(a,b,c) {
	if (a=0) {
		return "Error"
	} else if ((b*b-4*a*c)<0) {
		return "Error"
	} else {
		var x = Math.sqrt((b * b) - ( 4 * a * c)); 
		var y = ((-b + x) / (2*a));
		var z = ((-b - x) / (2*a));
		return y,z
	}
}

function fibonacci(num) {
  var a = 1, b = 0, temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function fibonacci_matrix(x) {
	a=fibonacci(x)
	b=fibonacci(x+1)
	c=fibonacci(x+2)
	d=fibonacci(x+3)
	var matrix = [ [a,b],
        	  [c,d] ];
    return matrix

