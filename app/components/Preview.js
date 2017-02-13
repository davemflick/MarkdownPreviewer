var React = require('react');
var Marked = require('marked');
var Editor = require('./Editor');

var Preview = React.createClass ({
	render: function() {
		return (
			<div className='previewContainer' value="This Text Here">
			
			</div>

		);
	}
})

module.exports = Preview;