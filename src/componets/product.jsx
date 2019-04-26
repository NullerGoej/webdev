import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
	render() {
		const { counter, onIncrement, onDecrement, onDelete } = this.props;
		if (counter.value === 0) {
			return true;
		}

		return (
			<tr>
				<td>
					<figure className="media">
						<div className="img-wrap">
							<img
								src={require("../images/items/" + counter.id + ".jpg")}
								className="img-thumbnail img-sm"
							/>
						</div>
						<figcaption className="media-body">
							<h6 className="title text-truncate">{counter.title}</h6>
							<dl className="dlist-inline small">
								<dt>Material:&nbsp;</dt>
								<dd>{counter.material}</dd>
							</dl>
							<dl className="dlist-inline small">
								<dt>Color:&nbsp;</dt>
								<dd>{counter.color}</dd>
							</dl>
						</figcaption>
					</figure>
				</td>
				<td>
					<div className="input-group">
						<div className="input-group-prepend" id="button-addon4">
							<button
								onClick={() => onIncrement(counter)}
								className="btn btn-outline-success"
								type="button"
							>
								<i class="fas fa-plus" />
							</button>
						</div>
						<label className="input-group-text" for="inputGroupSelect01">
							{counter.value}
						</label>
						<div className="input-group-append" id="button-addon5">
							<button
								className="btn btn-outline-danger"
								onClick={() => onDecrement(counter)}
								type="button"
							>
								<i class="fas fa-minus" />
							</button>
						</div>
					</div>
				</td>
				<td>
					<div className="price-wrap">
						<var className="price text-success">
							USD{" "}
							{(counter.price - counter.price * (counter.sale / 100)) *
								counter.value}
						</var>
						<small className="text-muted">
							(USD {counter.price - counter.price * (counter.sale / 100)} each)
						</small>
					</div>
				</td>
				<td className="text-right">
					<a
						onClick={() => onDelete(counter)}
						href="#"
						className="btn btn-outline-danger"
					>
						{" "}
						× Remove
					</a>
				</td>
			</tr>
		);
	}
}

export default Product;
