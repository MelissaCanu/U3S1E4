import { Component } from "react";
import { Alert } from "react-bootstrap";

class Welcome extends Component {
	render() {
		const { name } = this.props;
		return (
			<div>
				<div className="alert alert-info" role="alert">
					<h2 className={this.props.fontSize}>Welcome, {name}! You read(y)?</h2>
				</div>
			</div>
		);
	}
}

export default Welcome;
