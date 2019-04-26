import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Search from "./search";
import Cart from "./cart";

class Main extends Component {
	render() {
		const { counters, onDelete, onIncrement, onDecrement } = this.props;
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/search"
						render={props => (
							<Search
								{...props}
								counters={counters}
								onIncrement={onIncrement}
							/>
						)}
					/>
					<Route
						exact
						path="/cart"
						render={props => (
							<Cart
								{...props}
								counters={counters}
								onIncrement={onIncrement}
								onDecrement={onDecrement}
								onDelete={onDelete}
							/>
						)}
					/>
				</Switch>
			</main>
		);
	}
}

export default Main;
