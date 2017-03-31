import React, { Component } from 'react'

import Header from './Header'
import Screen from './Screen'
import Buttons from './Buttons'

import { extractTimeParts } from '../helpers/timers'

import './index.css'

class App extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			isRunning: false,
			start: 0,
			current: 0
		}

		this.handleStart = this.handleStart.bind(this)
		this.handleStop = this.handleStop.bind(this)
	}

	handleStart() {
		if ( this.state.isRunning ) {
			// no hagas nada
			return
		} else {
			// empezar el cronometro
			this.setState({
				isRunning: true,
				start: Date.now(),
				current: Date.now()
			})

			this._interval = setInterval(() =>{
				this.setState({
					current: Date.now()
				})
			}, 100)
		}
	}

	handleStop() {
		if ( this.state.isRunning ) {
			// detener el cronometroyarn
			clearInterval(this._interval)
			this.setState({
				isRunning: false
			})
		} else {
			// poner a cero el cronometro
			this.setState({
				start: 0,
				current: 0
			})
		}
	}

	render() {
		const { start, current } = this.state,
			{
				hours,
				minutes,
				seconds,
				milliseconds
			} = extractTimeParts( current - start )

		return(
			<div className="crono">
				<Header />
				<Screen
					hours = { hours }
					minutes = { minutes }
					seconds = { seconds }
					milliseconds = { milliseconds }
				/>
				<Buttons
					onStart = { this.handleStart }
					onStop = { this.handleStop }
				/>
			</div>
		)
	}
}

App.propTypes = {}
App.defaultProps = {}

export default App