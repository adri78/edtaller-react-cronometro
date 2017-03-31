import React from 'react'

const Buttons = props => (
	<div className="actions">
		<button onClick={ props.onStart }>INICIAR</button>
		<button onClick={ props.onStop }>DETENER</button>
	</div>
)

export default Buttons