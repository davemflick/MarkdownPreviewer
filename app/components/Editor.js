var React = require('react');
var Marked = require('marked');
var TextBoxWrapper = require('./TextBoxWrapper');


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
    var innerText = `Some **QUICK TIPS** for this __Markdown Preview__.

Two spaces needed to
create space
between paragraphs

For headers use # and a space. the number of # correspond to the header size you want.
# h1
## h2
### h3

Look, big text!
------------

__Did you say Bold? Use two underscores__.
This is also **Bold**

_One underscore to make text Italicized_.
This is also *Italic*


Three underscores for horizontal rule
___

For more go to [MarkdownLivePreview](http://markdownlivepreview.com/)

Or go to [Wikipedia](http://en.wikipedia.org/wiki/Markdown)
`
    return {
      text: innerText,
       MarkedText: this.translateMarkdown(innerText)
    }
  },

  componentDidMount: function () {

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
			<TextBoxWrapper header='Input' id='editorContainer'>
			  <textarea id='editorInput' type='text' value={this.state.text} onChange={this.handleTextChange}>
			 </textarea>
			</TextBoxWrapper>
      <TextBoxWrapper header='Output'>
       <div className='previewContainer' dangerouslySetInnerHTML={this.state.MarkedText}>
      </div>
      </TextBoxWrapper>
      </div>
		)
	}
});

module.exports = Editor;