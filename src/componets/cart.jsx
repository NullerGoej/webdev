import React, { Component } from "react";
import Product from "./product";

class Cart extends Component {
	render() {
		const { counters, onDelete, onIncrement, onDecrement } = this.props;
		return (
			<section className="section-content bg padding-y border-top">
				<div className="container">
					<div className="row">
						<main className="col-sm-9">
							<div className="card">
								<table className="table table-hover shopping-cart-wrap">
									<thead className="text-muted">
										<tr>
											<th scope="col">Product</th>
											<th scope="col" width="200">
												Quantity
											</th>
											<th scope="col" width="200">
												Price
											</th>
											<th scope="col" className="text-right" width="200">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										{counters.map(counter => (
											<Product
												key={counter.id}
												counter={counter}
												onIncrement={onIncrement}
												onDecrement={onDecrement}
												onDelete={onDelete}
											/>
										))}
									</tbody>
								</table>
							</div>
						</main>
						<aside className="col-sm-3">
							<p className="alert alert-success">
								Shipping is free no matter the order size.
							</p>
							<dl className="dlist-align">
								<dt>Total price:</dt>
								<dd className="text-right">USD {this.totalPrice()}</dd>
							</dl>
							<dl className="dlist-align">
								<dt>Discount:</dt>
								<dd className="text-right text-success">
									USD {this.totalDiscount()}
								</dd>
							</dl>
							<dl className="dlist-align h4">
								<dt>Total:</dt>
								<dd className="text-right">
									<strong>
										USD {this.totalPrice() - this.totalDiscount()}
									</strong>
								</dd>
							</dl>
							<hr />
							<figure className="itemside mb-3">
								<aside className="aside">
									<img src={require("../images/icons/pay-visa.png")} />
								</aside>
								<div className="text-wrap small text-muted">
									Save up to $20 By using ADCB Cards on orders over $100
								</div>
							</figure>
							<figure className="itemside mb-3">
								<aside className="aside">
									<img src={require("../images/icons/pay-mastercard.png")} />
								</aside>
								<div className="text-wrap small text-muted">
									Pay by MasterCard and Save 3%. <br />
									Get More, Get Master
								</div>
							</figure>
						</aside>
					</div>
				</div>
			</section>
		);
	}

	totalPrice() {
		let totalPrice = 0;
		this.props.counters.map(
			counter => (totalPrice += counter.price * counter.value)
		);
		return totalPrice;
	}

	totalDiscount() {
		let totalDiscount = 0;
		this.props.counters.map(
			counter =>
				(totalDiscount += counter.price * (counter.sale / 100) * counter.value)
		);
		return totalDiscount;
	}
}

export default Cart;
