function calculate() {

    var yourName = document.getElementById('yourname').value;
    var friendName = document.getElementById('friendname').value;

    if (yourName == "") {
        alert('Please enter your Name');
    } else if (yourName.length <= 2) {
        alert('Min length should be 3');
    } else if (!isNaN(yourName)) {
        alert('Numbers are not allowed');
    }

    if (friendName == "") {
        alert('Please enter your Friend Name');
    } else if (friendName.length <= 2) {
        alert('Min length should be 3');
    } else if (!isNaN(yourName)) {
        alert('Numbers are not allowed');
    } else if (yourName == friendName) {
        alert('Your Friend Name should not match your name')
    } else {
        var calculatePercent = Math.floor(Math.random() * 100);
        document.getElementById('friendvalue').value = calculatePercent + "%";
    }
}