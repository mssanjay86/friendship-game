document.querySelector(".click").addEventListener("click", function() {
    var mname = document.querySelector("#mname");
    var fname = document.querySelector("#fname");
    if ((fname.value == "") && (mname.value == "")) {
        alert("Enter your name and ur friend's name");
    }
    if (mname.value == "") {
        alert("Enter your name");
    } else if (fname.value == "") {
        alert("Enter your friend's name");
    } else {
        var randomNum = Math.floor(Math.random() * 101);
        document.querySelector("h3").innerHTML = "Your score: " + randomNum;
    }
    if (randomNum >= 70) {
        document.querySelector("p").innerHTML = 'Congratulations! bonding between you and your friend is strong. <i class="far fa-smile-wink" </i>';

    } else if ((randomNum <= 70) && (randomNum >= 50)) {
        document.querySelector("p").innerHTML = 'The bonding between you and your friend is good. <i class="far fa-grin-stars"></i>';

    } else if ((randomNum <= 50) && (randomNum >= 30)) {
        document.querySelector("p").innerHTML = 'Your bonding need to improve. <i class="far fa-grin"></i>';

    } else {
        document.querySelector("p").innerHTML = 'Sorry! your bonding is very poor. <i class="far fa-frown"></i>';
    }
});

document.querySelector(".reset").addEventListener("click", function() {
    document.getElementById("mname").value = '';
    document.getElementById("fname").value = '';
});