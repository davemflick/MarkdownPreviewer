import React from 'react';
import { render } from 'react-dom';
import Marked from 'marked';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';

console.log(Marked('I am using __markdown__.'))

class App extends React.Component {
	render() {
		return (
			<div className='container col-xs-10 col-xs-offset-1'>
			 <h1>Markdown Previewer</h1>
			 <Editor />
			 <Preview />
			</div>
			)
	};
}

render(<App />, window.document.getElementById('start'));
