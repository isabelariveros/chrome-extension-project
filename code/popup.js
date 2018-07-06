// function storeSumName() {
//     document.getElementById('sumName').submit();
//     }
// console.log(sumName);
// console.log(storeSumName);
// function sumName() {
//     var input = document.getElementById("userInput").value;
    
// }
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
    if (nameField.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';
        //alert('Username must contain at least 3 characters');
    } else {
        result.textContent = 'Your username is: ' + nameField;
        //alert(nameField);
    }
    }