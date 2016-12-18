PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
	console.log("Hello from js file to client");

	Template.leaderboard.helpers({
		'player': function(){
			return PlayersList.find({}, {sort: {score: -1, name: 1}}) //PlayersList.find()===return PlayersList.find({})
		},
		'playerCount': function(){
			return PlayersList.find().count()
		},
		'selectedClass': function(){
			var playerId = this._id;
			var selectedPlayer = Session.get('selectedPlayer');
			if(playerId == selectedPlayer){
				return "selected"
			}
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
		},
		'click .increment': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			var playerScore = PlayersList.update(selectedPlayer, {$inc: {score: 5}});

			return console.log(playerScore)
		},
		'click .decrement': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			var playerScore = PlayersList.update(selectedPlayer, {$inc: {score: -5}});
		}
	});
}
else if(Meteor.isServer){
	console.log("Hello from js file to server");
}

