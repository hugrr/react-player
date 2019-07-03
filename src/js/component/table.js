import React from "react";

export class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			song: []
		};
	}
	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				console.log(data);

				this.setState({ song: data });
			});
		console.log("didmount");
	}

	render() {
		console.log("render");
		let peo = this.state.song.map((item, index) => {
			console.log(item.url);
			return (
				<tr key={index}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.category}</td>
				</tr>
			);
		});

		return (
			<div>
				<div className="container">
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
		);
	}
}
