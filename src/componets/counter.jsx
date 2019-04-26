import React, { Component } from "react";
import { Link } from "react-router-dom";

class Counter extends Component {
	render() {
		const { counter, onIncrement } = this.props;
		const x = document.getElementById("SearchInput");
		if (x != null) {
			if (!counter.title.toLowerCase().includes(x.value.toLowerCase())) {
				return true;
			}
		}
		const string = counter.stars * 20 + "%";
		const Width = { width: string };
		let prices = <span className="price"> ${counter.price} </span>;
		if (counter.sale !== 0) {
			prices = (
				<div>
					<span className="price">
						${counter.price - counter.price * (counter.sale / 100)}
					</span>
					<del className="price-old"> ${counter.price} </del>
				</div>
			);
		}

		return (
			<article id={"card" + counter.id} className="card card-product">
				<div className="card-body">
					<div className="row">
						<aside className="col-sm-3">
							<div className="img-wrap">
								<img src={require("../images/items/" + counter.id + ".jpg")} />
							</div>
						</aside>
						<article className="col-sm-6">
							<h4 className="title">{counter.title}</h4>
							<div className="rating-wrap  mb-2">
								<ul className="rating-stars">
									<li style={Width} className="stars-active">
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
									</li>
									<li className="mr-2">
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
									</li>
								</ul>
								<div className="label-rating">132 reviews</div>
								<div className="label-rating">154 orders </div>
							</div>
							<p> {counter.description} </p>
							<dl className="dlist-align">
								<dt>Color</dt>
								<dd>{counter.color}</dd>
							</dl>
							<dl className="dlist-align">
								<dt>Material</dt>
								<dd>{counter.material}</dd>
							</dl>
							<dl className="dlist-align">
								<dt>Delivery</dt>
								<dd>Russia, USA, and Europe</dd>
							</dl>
						</article>
						<aside className="col-sm-3 border-left">
							<div className="action-wrap">
								<div className="price-wrap h4">{prices}</div>
								<p className="text-success">Free shipping</p>
								<br />
								<p>
									<Link onClick={() => onIncrement(counter)} to="/cart">
										<a href="#" className="btn btn-success mr-2">
											{" "}
											Buy now{" "}
										</a>
									</Link>
									<a
										onClick={() => onIncrement(counter)}
										href="#"
										className="btn btn-info"
									>
										{" "}
										<i className="fa fa-shopping-cart" />{" "}
									</a>
								</p>
							</div>
						</aside>
					</div>
				</div>
			</article>
		);
	}
}

export default Counter;
