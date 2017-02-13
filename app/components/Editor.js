var React = require('react');
var Preview = require('./Preview');
var Marked = require('marked');


var Editor = React.createClass({
  
	render: function() {
		return (
      <div className='col-xs-10 col-xs-offset-1'>
			 <div className='editorContainer col-xs-6'>
			  <textarea id='editorInput' type='text'>
			 </textarea>
			</div>
      <div className='col-xs-6'>
       <Preview />
      </div>
      </div>
		)
	}
});

module.exports = Editor;