
var imgTag = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16", "img17", "img18", "img19", "img20" ];

var imgBlankGaming = "./images/Marvel.jpg";

var imgActual = new Array();

function Gaming(){
	 randomImg();
    for(var i = 0; i < imgTag.length; i++){
        document.getElementById(imgTag[i]).src= imgBlankGaming;
    }
}
function randomImg(){

    var imgLink = ['./images/Spider.jpg', './images/Ironman.jpg', './images/Baddeadpool.jpg', './images/Hulk.jpg',  "./images/Captain.jpg",  "./images/Thor.jpg", "./images/Deadpool.jpg", "./images/Avengers.jpg", "./images/Widow.jpg", "./images/Shield.jpg"];

    var count = [0,0,0,0,0,0,0,0,0,0];

    while(imgActual.length < 20){

        var randomNumber = Math.floor(Math.random() * imgLink.length)

        if(count[randomNumber] < 2){
            imgActual.push(imgLink[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}
function flipImg(number){
    document.getElementById(imgTag[number]).src= imgActual[number];
}
