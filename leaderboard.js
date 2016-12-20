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
		},
		'showSelectedPlayer': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			
			return PlayersList.findOne(selectedPlayer)
			// Gives wierd warning
			// return PlayersList.findOne(selectedPlayer).name
		}
	});

	Template.leaderboard.events({
		'click .player': function(){
			var playerId = this._id;
			Session.set('selectedPlayer', playerId);
			
		},
		'click .increment': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			var playerScore = PlayersList.update(selectedPlayer, {$inc: {score: 5}});
		},
		'click .decrement': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			var playerScore = PlayersList.update(selectedPlayer, {$inc: {score: -5}});
		},
		'click .remove': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			var confirm = window.confirm("Are you sure you want to delete this player?");
			if(confirm){
				PlayersList.remove(selectedPlayer);
			}
		}
	});

	Template.addPlayerForm.events({
		'submit form': function(e){
			e.preventDefault();
			var playerNameVar = e.target.playerName.value;
			var playerScoreVar = e.target.playerScore.value;
			PlayersList.insert({name: playerNameVar, score: playerScoreVar});
			e.target.playerName.value = '';
			e.target.playerScore.value = 0;
		}
	})
}
else if(Meteor.isServer){
	console.log("Hello from js file to server");
}

