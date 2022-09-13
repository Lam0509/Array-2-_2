let arr1 = ['apple', 'banana', 'mango'];
let arr2 = ['táo', 'chuối', 'xoài'];
function myArray() {
    let x = document.getElementById("text").value;
    for (i = 0; i < arr1.length; i++) {
        if (x !== arr1[i]) {
            document.getElementById("res").innerHTML = "Không tìm thấy";
        }
    }
    for (i = 0; i < arr1.length; i++) {
        if (x === arr1[i]) {
            document.getElementById("res").innerHTML = arr2[i];
        }
}
}