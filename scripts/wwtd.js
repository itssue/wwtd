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

// robot.respond /open the (.*) doors/i, (res) ->
//   doorType = res.match[1]
//   if doorType is "pod bay"
//     res.reply "I'm afraid I can't let you do that."
//   else
//     res.reply "Opening #{doorType} doors"



// module.exports = function(robot) {
// 	robot.respond(/(.*)job(.*)/, function(msg){
// 		msg.send("Make your work more pleasurable.");
// 	});
// }

// module.exports = function(robot) {
// 	robot.respond(/(.*)house(.*)/, function(msg){
// 		msg.send("Build a wall.");
// 	});
// }

// http://townhall.com/columnists/johnhawkins/2015/10/24/the-25-best-quotes-from-donald-trump-n2070450/page/full
// http://www.newsmax.com/Headline/Trump-University-Lawsuit-Settle/2016/03/03/id/717221/



// module.exports = function(robot) {
// 	robot.hear(/palindrome (.*)/, function(msg){
// 		var word = msg.match[1];
// 		var reversed = word.split("").reverse().join("");

// 		if(word == reversed) {
// 			msg.send(word + " is a palindrome!");
// 		} else {
// 			msg.send(word + " is not a palindrome. Dumbass.");
// 		}
// 	})
// }


// More Trump Quotes
// "One of the problems when you become successful is that jealousy and envy inevitably follow.",
// "Sometimes your best investments are the ones you don't make.", 
// "Sometimes by losing a battle you find a new way to win the war.", 
// "Part of being a winner is knowing when enough is enough.",
// "You have to think anyway, so why not think big?",
// "What separates the winners from the losers is how a person reacts to each new twist of fate.",
// "You get paid what you are worth only when the person you are dealing with has no other choice.",
// "Listen to your gut, no matter how good something sounds on paper.",
// "Sometimes your best investments are the ones you don’t make.",
// "Rich people are rich because they solve difficult problems. You must learn to thrive on problems.",
// "Luck does not come around often.",
// "The point is that you can't be too greedy.",