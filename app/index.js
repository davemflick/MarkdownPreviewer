
import React from 'react';
import { render } from 'react-dom';
import Marked from 'marked';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import style from "!style-loader!css-loader!sass-loader!./styles/main.css";




class App extends React.Component {
	constructor(props){
		super(props);
		this.state ={

		}
	}


	render() {
		return (
			<div className='container col-xs-10 col-xs-offset-1' >
			 <h1>Markdown Previewer</h1>
			 <div className='container col-xs-5 col-xs-offset-1'>
			 <Editor />
			 </div>
			 <div className='container col-xs-5 col-xs-offset-1'>
			 <Preview />
			 </div>
			</div>
			)
		}
	};



render(<App />, document.getElementById('start'));
