Template.leaderboard.helpers({
	'player': function(){
		var currentUserId = Meteor.userId();

		return PlayersList.find({}, {sort: {score: -1, name: 1}}
		) //PlayersList.find()===return PlayersList.find({})
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
	}
});

Template.leaderboard.events({
	'click .player': function(){
		var playerId = this._id;
		Session.set('selectedPlayer', playerId);
		
	},
	'click .increment': function(){
		var selectedPlayer = Session.get('selectedPlayer');
		Meteor.call('modifyPlayerScore', selectedPlayer, 5);
	},
	'click .decrement': function(){
		var selectedPlayer = Session.get('selectedPlayer');
		Meteor.call('modifyPlayerScore', selectedPlayer, -5);
	},
	'click .remove': function(){
		var selectedPlayer = Session.get('selectedPlayer');
		var confirm = window.confirm("Are you sure you want to delete this player?");
		if(confirm){
			Meteor.call('removePlayer', selectedPlayer);
		}
	}
});