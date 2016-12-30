console.log("Hello from js to server");

Meteor.publish('thePlayers', function(){
	var currentUserId = this.userId;
	return PlayersList.find({createdBy: currentUserId})
});