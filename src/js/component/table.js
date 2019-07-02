import React from "react";

export class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			song: [
				{
					id: 1,
					category: "pop",
					name: "michael jackson",
					url: "data/mario/fx_gameover.wav"
				},
				{
					id: 2,
					category: "trap",
					name: "Paloma mami",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 3,
					category: "rock",
					name: "Nirvana",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 4,
					category: "rap",
					name: "Tupac",
					url: "data/mario/fx_jump_super.wav"
				},
				{
					id: 5,
					category: "rap",
					name: "snoopdog",
					url: "data/mario/fx_jump_super.wav"
				}
			]
		};
	}

	render() {
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
						<tbody>
							<tr>
								<td>{this.state.song[0].id}</td>
								<td>{this.state.song[0].name}</td>
								<td>{this.state.song[0].category}</td>
							</tr>
							<tr>
								<td>{this.state.song[1].id}</td>
								<td>{this.state.song[1].name}</td>
								<td>{this.state.song[1].category}</td>
							</tr>
							<tr>
								<td>{this.state.song[2].id}</td>
								<td>{this.state.song[2].name}</td>
								<td>{this.state.song[2].category}</td>
							</tr>
							<tr>
								<td>{this.state.song[3].id}</td>
								<td>{this.state.song[3].name}</td>
								<td>{this.state.song[3].category}</td>
							</tr>
							<tr>
								<td>{this.state.song[4].id}</td>
								<td>{this.state.song[4].name}</td>
								<td>{this.state.song[4].category}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
