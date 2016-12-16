PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){
	console.log("Hello from js file to client");

	Template.leaderboard.helpers({
		'player': function(){
			return PlayersList.find()
		},
		'otherHelper': function(){
			return 'text from otherHelper'
		}
	});
}
else if(Meteor.isServer){
	console.log("Hello from js file to server");
}

