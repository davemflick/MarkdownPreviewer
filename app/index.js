
var React = require('react');
var ReactDOM = require('react-dom')
var Editor = require('./components/Editor');
var style = require("!style-loader!css-loader!sass-loader!./styles/main.css");




var App = React.createClass ({

	render: function () {
		return (
			<div className='container-fluid'>
			 <h1>Markdown Previewer</h1>
			 <Editor />
			</div>
			)
		}
	});



ReactDOM.render(<App />, document.getElementById('start'));
