import React from "react";
import PropTypes from "prop-types";

export class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		console.log("render");
		let peo = this.props.songs.map((item, index) => {
			console.log(item.url);
			return (
				<tr
					key={index}
					className={this.props.selected == index ? "selected" : ""}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.category}</td>
				</tr>
			);
		});

		return (
			<div>
				<div className="container">
					<div className="containertabla">
						<table className="table table-dark">
							<thead>
								<tr>
									<th scope="col-2">cod</th>
									<th scope="col-4">name</th>
									<th scope="col-6">category</th>
								</tr>
							</thead>
							<tbody>{peo}</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
Board.propTypes = {
	songs: PropTypes.array,
	selected: PropTypes.number
};
