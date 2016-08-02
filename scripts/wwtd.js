quotes = [
	"Build a wall.",
	"Fight the lawsuit. Never Settle!",
	"I’d like to punch him in the face.",
	"Get him the hell out of here!", 
	"The Sharper Image is one of my favorite stores.",
	"If you do not get even, you are just a schmuck!",
	"I don't frankly have time for total political correctness.",
	"You’re generally better off sticking with what you know.",
	"I play to people's fantasies.",
	"The world is a horrible place.",
	"You have to protect yourself in life.",
	"I mean she's basically a disaster.",
	"Make your work more pleasurable.",
	"Well, I think that when you get right down to it, we're a nation that speaks English.",
	"THE UNITED STATES HAS ENOUGH PROBLEMS!",
	"You know, it really doesn’t matter what they write as long as you’ve got a young and beautiful piece of ass.",
	"We’re losing a lot of people because of the Internet.",
	"You know the funny thing, I don't get along with rich people.",
	"I don’t think I’ve made mistakes."
	];

images = [
	"http://img.ifcdn.com/images/35332100b93bd3382c63d1441a429bef619e73c4bc41ad1b91b3b28ceadc1251_1.jpg",
	"https://s-media-cache-ak0.pinimg.com/236x/20/90/24/209024d7ecc796d95ef0bdd39e95a874.jpg"
	];

dumbass = [
	"https://a.disquscdn.com/get?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FxTiTnIKzo4rD2oGOJy%2Fgiphy.gif&key=7tiIeKdV3qBbzFff3dmn8Q",
	"http://bit.ly/1R72KUa"
	];

module.exports = function(robot) {
	robot.respond(/what|who|what|where|why|should|would|when(.*)/, function(msg){
		var ranQuotes = quotes[Math.floor(Math.random() * quotes.length)];
		msg.send(ranQuotes);
	});
	robot.respond(/(.*)job(.*)/, function(msg){
		msg.send("Make your work more pleasurable.");
	});
	robot.respond(/(.*)house(.*)/, function(msg){
		msg.send("Build a wall.");
	});
	robot.respond(/(.*)food|lunch|breakfast|dinner|brunch(.*)/, function(msg){
		msg.send("Trump Steaks are by far the best tasting.");
	});
	robot.hear(/haha|lmao|lol|lulz|lawl(.*)/, function(msg){
		var ranImages = images[Math.floor(Math.random() * images.length)];
		msg.send(ranImages);
	});
	robot.hear(/(.*)dumbass|idiot|moron|ugh(.*)/, function(msg){
		var ranDumbass = dumbass[Math.floor(Math.random() * dumbass.length)];
		msg.send(ranDumbass);
	});
}