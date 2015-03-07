if (Meteor.isClient) {
	Template.updateForm.helpers({
		bookOne: function () {
			return Books.findOne({});
		}
	});
}