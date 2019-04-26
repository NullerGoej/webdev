import React, { Component } from "react";
import Counter from "./counter";

class Search extends Component {
	render() {
		const { counters, onDelete, onIncrement, onDecrement } = this.props;

		function checkEmpty() {
			const x = document.getElementById("SearchInput");
			let exists;
			if (x != null) {
				exists = counters.some(c =>
					c.title.toLowerCase().includes(x.value.toLowerCase())
				);
				if (exists === false) {
					return (
						<article className="card card-product">
							<div className="card-body text-center">
								<h3 className="pb-2 pt-2">None found, try another search</h3>
							</div>
						</article>
					);
				}
			}
			return "";
		}

		return (
			<section className="section-content bg padding-y">
				<div className="container">
					<div className="row">
						<main className="col-sm-12">
							{counters.map(counter => (
								<Counter
									key={counter.id}
									counter={counter}
									onIncrement={onIncrement}
								/>
							))}
							{checkEmpty()}
						</main>
					</div>
				</div>
			</section>
		);
	}
}

export default Search;
