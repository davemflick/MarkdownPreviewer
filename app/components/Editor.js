var React = require('react');
var Marked = require('marked');
var PropTypes = React.PropTypes;

Marked.setOptions({
  renderer: new Marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});


var Editor = React.createClass({
    translateMarkdown: function (innerText) {
    return {
      __html: Marked(innerText)
    };
  },
  

  getInitialState: function (){
    var innerText = 'This is the __inner__ #text'
    return {
      text: innerText,
       MarkedText: this.translateMarkdown(innerText)
    }
  },

  handleTextChange: function(e){
    var change = e.target.value
    this.setState({
      text: change,
      MarkedText: this.translateMarkdown(change)
    })
  },
  
	render: function() {
		return (
      <div className='col-xs-10 col-xs-offset-1'>
			 <div className='editorContainer col-xs-6'>
			  <textarea id='editorInput' type='text' value={this.state.text} onChange={this.handleTextChange}>
			 </textarea>
			</div>
      <div className='col-xs-6'>
       <div className='previewContainer' dangerouslySetInnerHTML={this.state.MarkedText}>
      
      </div>
      </div>
      </div>
		)
	}
});

module.exports = Editor;