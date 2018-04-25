import React from 'react';

export default (props) => {
	return (
		<div>
			<button 
				className="waves-effect waves-light btn-small"
				onClick={ props.handler}>
				{ props.text }
			</button>
		</div>
	)
} 