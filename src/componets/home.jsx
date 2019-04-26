import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
	<section id="intro" className="section-intro bg-secondary pt-5 pb-5">
		<div className="container">
			<div className="row d-flex">
				<div className="col-sm-6 d-flex align-items-center">
					<header className="intro-wrap text-white">
						<h2 className="display-3"> Need a phone we got you!</h2>
						<p className="lead">
							We got the newest of the newest withing the mobile market, if
							you've seen it then we got it. Want to browse our products press
							the button below.
						</p>
						<Link onClick={() => resetSearch()} to="/search">
							<a href="#" className="btn btn-success">
								Products
							</a>
						</Link>
					</header>
				</div>
				<div className="col-sm-6 text-right">
					<img
						src={require("../images/items/comp.png")}
						className="img-fluid my-5"
						width="400"
					/>
				</div>
			</div>
		</div>
	</section>
);

function resetSearch() {
	const x = document.getElementById("SearchInput");
	if (x != null) {
		x.value = "";
	}
}

export default Home;
