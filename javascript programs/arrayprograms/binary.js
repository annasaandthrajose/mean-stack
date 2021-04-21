var arr = [10, 1, 11, 2, 12, 3];
arr.sort((o1, o2) => o1 - o2);
var flag = 0;

var low = 0; var upp = arr.length - 1;
var elemt=12;
while (low < upp) {
    let mid = Math.floor((low + upp) / 2);
    if (elemt > arr[mid])
    {
        low = mid + 1;
    }
else if (elemt < arr[mid]) 
{
        upp = mid - 1;
    }
    else if (elemt == arr[mid]) {
        flag+=1;
        break;
    }
}
if (flag == 1) {
    console.log("element  found");
}
else {
    console.log("element not found");
}
