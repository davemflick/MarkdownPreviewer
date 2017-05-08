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
    var innerText = 'Some **QUICK TIPS** for this __Markdown Preview__.\r\
\r\
Two spaces needed to\r\
create space\r\
between paragraphs\r\
\r\
For headers use # and a space. the number of # correspond to the header size you want.\r\
# h1\r\
## h2\r\
### h3\r\
\r\
Look, big text!\r\
------------\r\
\r\
__Did you say Bold? Use two underscores__.\r\
This is also **Bold**\r\
\r\
_One underscore to make text Italicized_.\r\
This is also *Italic*\r\
\r\
\r\
Three underscores for horizontal rule\r\
___\r\
\r\
For more go to [MarkdownLivePreview](http://markdownlivepreview.com/)\r\
\r\
Or go to [Wikipedia](http://en.wikipedia.org/wiki/Markdown)'

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
      <div className='someContainer'>
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