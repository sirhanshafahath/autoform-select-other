Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  },
	selectother: {
		label: "Tester",
		type: String,
//		allowedValues: ["1","2","3","4","Other"],
		optional: true,
		autoform: {
			afFieldInput: {
				type: "select-other",
				options: {
					red: "Red",
					green: "Green",
					blue: "Blue"
				}
			}
		}
	},
	select2: {
		label: "Test2",
		type: String,
		optional: true,
		autoform: {
				options: [{
					optgroup: "Fun Years",
					options: [
						{label: "2014", value: 2014},
						{label: "2013", value: 2013},
						{label: "2012", value: 2012}
					]
				},
				{
					optgroup: "Boring Years",
					options: [
						{label: "2011", value: 2011},
						{label: "2010", value: 2010},
						{label: "2009", value: 2009}
					]
				}],
			afFieldInput: {
				type: "select-other"
			}
		}
	}
}));