import React from 'react';
import Marked from 'marked';
import { Preview } from './Preview';

console.log((<Preview />));


export class Editor extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      value: '## what is Markdown?'
    };

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

	render() {
		return (
			<div className='editorContainer'>
			<textarea id='editorInput' type='text' value={this.state.value} onChange={this.handleChange}>
			</textarea>
			
			</div>
		);
	};
}