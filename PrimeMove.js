/** Move the Prime Number while Input (num) come in as the index of array. For example is num is 16 , the output should be 53 as 53 is the 16th prime number */

//Check for Prime Number
function isPrime(n) {
    if (n <= 3) { return n > 1; }
    if (n % 2 == 0 || n % 3 == 0) { return false; }
    for (var  i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) { return false; }
    }
    return true;
}
function PrimeMove(num){
	var count = 0;
	do{
		count++;
		if (isPrime(count)){
			num --;
		}
	}while(num > 0)
	return count;

}