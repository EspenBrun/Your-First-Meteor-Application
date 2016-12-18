PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
	console.log("Hello from js file to client");

	Template.leaderboard.helpers({
		'player': function(){
			return PlayersList.find()
		},
		'playerCount': function(){
			return PlayersList.find().count()
		}
	});

	Template.leaderboard.events({
		'click .player': function(){
			return console.log("you clicked a .player yo")
		},
		'dblclick .player': function(){
			return console.log(".player dblclicked")
		},
		'mouseover .player': function(){
			return console.log("just mousing over")
		}
	});
}
else if(Meteor.isServer){
	console.log("Hello from js file to server");
}

