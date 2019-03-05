var movieArry = new Array();

var movImg = ['images/ironman.jpg', 'images/captain.jpg', 'images/deadpool.jpg', 'images/spiderman.jpg', 'images/avengers.jpg', 'images/thor.jpg'];

class movieFinderClass
{
	constructor (Title, Director, Year, Description){
		this.Title = Title;
		this.Director = Director;
		this.Year = Year;
		this.Description = Description;
	}

	toStringTitle(){
		return this.Title;
	}
	toStringDirector(){
		return "Artist: " + this.Director;
	}
	toStringYear(){
		return "Year: " + this.Year;
	}
	toStringDescription(){
		return "Description: " + this.Description;
	}
}

function initializeArray() {
	var movie0 = new movieFinderClass("'Iron Man", "Jon Favreau", "2008", "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil. ");
	var movie1 = new movieFinderClass("Captain America: The First Avenger", "Joe Johnston", "2011", "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a Super-Soldier serum. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.");
	var movie2 = new movieFinderClass("Deadpool", "Tim Miller", "2016", "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.");
	var movie3 = new movieFinderClass("Spider-Man: Into the Spider-Verse", "Bob Persichetti, Peter Ramsey", "2018", "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities. ");
	var movie4 = new movieFinderClass("The Avengers", "Joss Whedon", "2012", "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity. ");
	var movie5 = new movieFinderClass("Thor", "Kenneth Branagh", "2011", "The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders. ");

    movieArry.push(movie0,movie1,movie2,movie3,movie4,movie5);
}

function accessInformation() {
	var x = Math.floor((Math.random() * 5) +1 );

    document.getElementById("Artwork").src= movImg[x];
    document.getElementById("Title").innerHTML = movieArry[x].toStringTitle();
	document.getElementById("Director").innerHTML = movieArry[x].toStringDirector();
	document.getElementById("Year").innerHTML = movieArry[x].toStringYear();
	document.getElementById("Description").innerHTML = movieArry[x].toStringDescription();

}
