PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
	console.log("Hello from js file to client");

	Template.leaderboard.helpers({
		'player': function(){
			return PlayersList.find()
		},
		'playerCount': function(){
			return PlayersList.find().count()
		},
		'selectedClass': function(){
			return "selected"
		}
	});

	Template.leaderboard.events({
		'click .player': function(){
			var playerId = this._id;
			Session.set('selectedPlayer', playerId);
			
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

