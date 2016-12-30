Meteor.methods({
	'insertPlayerData': function(name, score){
		var currentUserId = Meteor.userId();
		PlayersList.insert({
			name: name,
			score: parseInt(score),
			createdBy: currentUserId
		});
	},
	'modifyPlayerScore': function(selectedPlayer, scoreValue){
		var currentUserId = Meteor.userId();
		PlayersList.update(
			{_id: selectedPlayer, createdBy: currentUserId},
			{$inc: {score: scoreValue}});
	},
	'removePlayer': function(selectedPlayer){
		var currentUserId = Meteor.userId();
		PlayersList.remove({_id: selectedPlayer, createdBy: currentUserId});
	}
});