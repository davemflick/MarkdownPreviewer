
var React = require('react');
var ReactDOM = require('react-dom')
var Editor = require('./components/Editor');
var style = require("!style-loader!css-loader!sass-loader!./styles/main.css");




var App = React.createClass ({

	render: function () {
		return (
			<div className='mainContainer'>
			<div className='titleBox'>
			 <h1 id='title'>Markdown Preview</h1>
			</div>
			 <Editor />
			</div>
			)
		}
	});



ReactDOM.render(<App />, document.getElementById('start'));
