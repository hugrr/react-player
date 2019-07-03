import React from "react";
import PropTypes from "prop-types";

export class Boton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="containerbuttom">
				<button
					onClick={() => {
						this.props.backa();
					}}
					className="btn btn-outline-secondary"
					type="button">
					<i className="fas fa-backward" />
				</button>
				<button
					onClick={() => {
						this.props.playa();
					}}
					className="btn btn-outline-secondary"
					type="button">
					<i className="fas fa-play" />
				</button>
				<button
					onClick={() => {
						this.props.nexta();
					}}
					className="btn btn-outline-secondary"
					type="button">
					<i className="fas fa-forward" />
				</button>
			</div>
		);
	}
}

Boton.propTypes = {
	playa: PropTypes.func,
	nexta: PropTypes.func,
	backa: PropTypes.func
};
