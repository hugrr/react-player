import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Board } from "./table.js";
import { Boton } from "./boton.js";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			song: [],
			itemselected: 0,
			reproducioendo: false
		};
		this.mySong = React.createRef();

		this.play = this.play.bind(this);
		this.next = this.next.bind(this);
		this.back = this.back.bind(this);
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
	play() {
		this.state.reproducioendo === false
			? this.mySong.current.play()
			: this.mySong.current.pause();

		this.setState({ reproducioendo: !this.state.reproducioendo });
	}
	next() {
		this.state.itemselected < 21
			? this.setState({
					itemselected: this.state.itemselected + 1
			  })
			: null;
		this.mySong.current.load();
		this.mySong.current.play();
	}
	back() {
		this.state.itemselected > 1
			? this.setState({
					itemselected: this.state.itemselected - 1
			  })
			: null;
		this.mySong.current.load();
		this.mySong.current.play();
	}
	render() {
		return (
			<div className="text-center mt-5">
				<Board
					songs={this.state.song}
					selected={this.state.itemselected}
				/>
				<Boton playa={this.play} nexta={this.next} backa={this.back} />

				{this.state.song.length > 0 ? (
					<audio ref={this.mySong}>
						<source
							src={
								"https://assets.breatheco.de/apis/sound/" +
								this.state.song[this.state.itemselected].url
							}
							type="audio/mpeg"
						/>
					</audio>
				) : null}
			</div>
		);
	}
}
