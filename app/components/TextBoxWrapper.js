var React = require('react');


function TextBoxWrapper (props) {
  return (
    <div className='col-xs-6 textContainers' id={props.id} >
    	<h3 id='textTitle'>{props.header}</h3>
      {props.children}
    </div>
  )
}


module.exports = TextBoxWrapper;