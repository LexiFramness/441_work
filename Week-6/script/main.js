var imgTag = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20" ];

var imgBlankGaming = "../images/Marvel.jpg";

var imgActual = new Array();

var number1 = -1;
var number2 = -1;

var attempts = 0;
var changePage = 9;

var playerInfo = {"firstname": "", "lastname":"", "Age":"", "Score":""};

function Game(){
	randomImg();
    for(var i = 0; i < imgTag.length; i++){
        document.getElementById(imgTag[i]).src= imgBlankGaming;
    }
}


function randomImg(){

    var imgLink = ['../images/Spider.jpg', '../images/Ironman.jpg', '../images/Baddeadpool.jpg', '../images/Hulk.jpg',  "../images/Captain.jpg",  "../images/Thor.jpg", "../images/Deadpool.jpg", "../images/Avengers.jpg", "../images/Widow.jpg", "../images/Shield.jpg"];

    var count = [0,0,0,0,0,0,0,0,0,0];

    while(imgActual.length < 20){

        var randomNumber = Math.floor(Math.random() * imgLink.length);

        if(count[randomNumber] < 2){
            imgActual.push(imgLink[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImg(number){


    if (number1 >= 0){
        number2 = number;
        document.getElementById(imgTag[number]).src= imgActual[number2];
    }
    else if (number1 < 0){
        number1 = number;
        document.getElementById(imgTag[number1]).src= imgActual[number1];
    }
    if (imgActual[number1] != imgActual[number2] && number1 >= 0 && number2 >= 0){
        setTimeout(imgDisappear, 400);
        attempts++;
        return attempts;
    }
    else if (imgActual[number1] == imgActual[number2] && number1 >= 0 && number2 >= 0) {
        number1 = -1;
        number2 = -2;
        attempts++;
        changePage--;
        console.log(changePage);
        return attempts;

    }
    if (changePage === 0){

        console.log("work");
        setTimeout(finalPage, 2000);
    }
}

function imgDisappear(){
    document.getElementById(imgTag[number1]).src= imgBlankGaming;
    document.getElementById(imgTag[number2]).src= imgBlankGaming;
    number1 = -1;
    number2 = -2;
}

function addInfo(){
	var firstName = document.getElementById("firName").value;
	var lastName = document.getElementById("lasName").value;
	var age = document.getElementById("txtage").value;

    playerInfo.firstname = firstName;
    playerInfo.lastname = lastName;
    playerInfo.Age = age;

    localStorage.setItem("player", JSON.stringify(playerInfo));
    window.location = "./pages/gameMarvel.html";
}

function player(){
    playerInformation = localStorage.getItem("player");
    playerInfo = JSON.parse(playerInformation);
}

function finalPage() {
    playerInfo.Score = attempts;

    localStorage.setItem("player", JSON.stringify(playerInfo));
    window.location = "../pages/win.html";
}

function loadScore (){
    document.getElementById('fNames').innerHTML = playerInfo.firstname + " " + playerInfo.lastname;
    document.getElementById('age').innerHTML = "Age: " + playerInfo.Age;
    document.getElementById('score').innerHTML = "Your Score: " + playerInfo.Score;
}
