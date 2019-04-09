var charList = new Array();

class characterOrganizer {
    constructor (title, description, linkPath){
        this.title = title;
        this.description = description;
        this.linkPath = linkPath;
    }
    toStringTitle(){
        return this.title;
    }
    toStringDescription(){
        return this.description;
    }
    get theImgLink() {
        return this.linkPath;
    }

}

function initializeArray() {

    var char1 = new characterOrganizer("Captain America", "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization. ", '../images/Captain.jpg');
    var char2 = new characterOrganizer("Deadpool", "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks. ", '../images/Deadpool.jpg');
    var char3 = new characterOrganizer("Hulk", "uce Banner, a genetics researcher with a tragic past, suffers an accident that causes him to transform into a raging green monster when he gets angry.", '../images/Hulk.jpg');
    var char4 = new characterOrganizer("Thor", "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.", '../images/Thor.jpg');
    var char5 = new characterOrganizer("Ironman", "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. ", '../images/Ironman.jpg');
    charList.push(char1,char2,char3,char4,char5);
}

var x = 1;
var xx = 2;
var xxx = 3;
var xxxx = 4;
var xxxxx = 5;
var xxxxxx = 6;


$(function () {
    $("#title").html(charList[x].toStringTitle());
    $("#description").html(charList[x].toStringDescription());
    $("#characterCenter").attr("src", charList[x].theImgLink);
    $("#characterR").attr("src", charList[xx].theImgLink);
    $("#characterOutR").attr("src", charList[xxx].theImgLink);
    $("#characterL").attr("src", charList[xxxx].theImgLink);
    $("#characterOutL").attr("src", charList[xxxxx].theImgLink);


    $("button").click(function(){

        $("#characterOutR").animate({
            left: '920px',
            height: '+=120px',
            width: '+=80px',
            top: "350px",
            opacity: 0.7,});
        $("#characterCenter").animate({
            left: '280px',
            height: '-=120px',
            width: '-=80px',
            top: "350px",
            opacity: 0.7,});
        $("#characterL").animate({
            left: '560px',
            height: '+=120px',
            width: '+=80px',
            top: "270px",
            opacity: 1,});
        $("#characterR").animate({
            left: '90px',
            height: '-=120px',
            width: '-=80px',
            top: "400px",
            opacity: 0.2,});





            counterX1();
            counterX2();
            counterX3();
            counterX4();
            counterX5();

            $("#characterCenter").attr("src", charList[x].theImgLink).delay( 800 );
            $("#characterR").attr("src", charList[xx].theImgLink).delay( 800 );
            $("#characterOutR").attr("src", charList[xxx].theImgLink).delay( 800 );
            $("#characterL").attr("src", charList[xxxx].theImgLink).delay( 800 );
            $("#characterOutL").attr("src", charList[xxxxx].theImgLink).delay( 800 );
            $("#title").html(charList[x].toStringTitle());
            $("#description").html(charList[x].toStringDescription());

      });
});

function counterX1(){
    x++;
    if (x === 9){
        x = 0;
    }
    return x;
}
function counterX2(){
    xx++;
    if (xx === 9){
        xx = 0;
    }
    return xx;
}
function counterX3(){
    xxx++;
    if (xxx === 9){
        xxx = 0;
    }
    return xxx;
}
function counterX4(){
    xxxx++;
    if (xxxx === 9){
        xxxx = 0;
    }
    return xxxx;
}
function counterX5(){
    xxxxx++;
    if (xxxxx === 9){
        xxxxx = 0;
    }
    return xxxxx;
}



function timeRestart(){
        $("#characterOutL").animate({opacity: '0'},"slow");
        $("#characterOutL").animate({left: '90px'},"fast");
        $("#characterOutL").animate({opacity: '0.2'},"fast");

        $("#characterCenter").animate({opacity: '0'},"slow");
        $("#characterCenter").animate({left: '560px', height: '+=120px',
        width: '+=80px', top: '270px'},"fast");
        $("#characterCenter").animate({opacity: '1'},"fast");

        $("#characterOutR").animate({opacity: '0'},"slow");
        $("#characterOutR").animate({left: '1200px', top: '400px',  height: '-=120px',
        width: '-=80px'},"fast");
        $("#characterOutR").animate({opacity: '0.2'},"fast");

        $("#characterL").animate({opacity: '0'},"slow");
        $("#characterL").animate({left: '920px', top: "350px", height: '-=120px',
        width: '-=80px'},"fast");
        $("#characterL").animate({opacity: '0.7'},"fast");

        $("#characterR").animate({opacity: '0'},"slow");
        $("#characterR").animate({left: '280px', height: '+=120px',
        width: '+=80px', top: "350px"},"fast");
        $("#characterR").animate({opacity: '0.7'},"fast");

}
