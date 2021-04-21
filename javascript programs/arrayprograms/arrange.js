var arr = [10, 11, 12, 13, 14];
var even = []; var odd = [];
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 2 == 0) {
        even.push(arr[i]);
        
        
    }
    else {
        odd.push(arr[i]);
    }
    
}
console.log(odd);
console.log(even);