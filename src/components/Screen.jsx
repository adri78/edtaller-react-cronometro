import React from 'react'

const Screen = props => (
	<div className="timer">
		<span className="timer-h">{ props.hours }</span>
		<span className="timer-m">:{ props.minutes }</span>
		<span className="timer-s">: { props.seconds }</span>
		<span className="timer-ms">: { props.milliseconds }</span>
	</div>
)

export default Screen