var arr = [10, 11, 13, 14, 16];
var arr2 = [8, 9, 10, 11, 16];


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr[i] == arr2[j]) {
            console.log(arr[i]);
        }
    }
}
