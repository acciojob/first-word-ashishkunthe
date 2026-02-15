function firstWord(s) {
  // your code here
	const str=s.trim()
	const arr=str.split(" ")
	return arr[0]
}

// Do not change the code below  
 
const s = prompt("Enter String:");
alert(firstWord(s));
