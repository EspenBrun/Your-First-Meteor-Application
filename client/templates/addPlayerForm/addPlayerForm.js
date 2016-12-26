Template.addPlayerForm.events({
	'submit form': function(e){
		e.preventDefault();
		var playerNameVar = e.target.playerName.value;
		var playerScoreVar = e.target.playerScore.value;
		Meteor.call('insertPlayerData', playerNameVar, playerScoreVar);
		e.target.playerName.value = '';
		e.target.playerScore.value = 0;
	}
});