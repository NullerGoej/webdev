import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ totalCounters }) => {
	return (
		<header className="header-main shadow-sm">
			<section className="header-main">
				<div className="container">
					<div className="row-sm align-items-center">
						<div className="col-lg-4-24 col-sm-3">
							<a className="navbar-brand">
								<Link to="/">
									<img
										className="logo"
										src={require("../images/icons/logo.png")}
										alt="Shopify"
										title="Shopify"
									/>
								</Link>
							</a>
						</div>
						<div className="col-lg-11-24 col-sm-8">
							<form action="#" className="py-1">
								<div className="input-group w-100">
									<input
										type="text"
										className="form-control"
										placeholder="Search"
										id="SearchInput"
									/>
									<div className="input-group-append">
										<Link to="/search">
											<button className="btn btn-success" type="submit">
												<i className="fa fa-search" /> Search
											</button>
										</Link>
									</div>
								</div>
							</form>
						</div>
						<div className="col-lg-9-24 col-sm-12">
							<div className="widgets-wrap float-right row no-gutters py-1">
								<div className="col-auto">
									<a href="#" className="widget-header">
										<Link to="/">
											<div className="icontext">
												<div className="icon-wrap">
													<i className="text-success icon-sm fas fa-home" />
												</div>
												<div className="text-wrap text-dark">
													Front
													<br />
													Page
												</div>
											</div>
										</Link>
									</a>
								</div>
								<div className="col-auto">
									<a href="#" className="widget-header">
										<Link onClick={() => resetSearch()} to="/search">
											<div className="icontext">
												<div className="icon-wrap">
													<i className="text-success icon-sm fas fa-store" />
												</div>
												<div className="text-wrap text-dark">
													Browse
													<br />
													Products
												</div>
											</div>
										</Link>
									</a>
								</div>
								<div className="col-auto">
									<a href="#" className="widget-header">
										<Link to="/cart">
											<div className="icontext">
												<div className="icon-wrap">
													<i className="text-success icon-sm fa fa-shopping-cart" />
												</div>
												<div className="text-wrap text-dark">
													<span className="small round badge badge-secondary">
														{totalCounters}
													</span>
													<div>Cart</div>
												</div>
											</div>
										</Link>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</header>
	);
};

function resetSearch() {
	const x = document.getElementById("SearchInput");
	if (x != null) {
		x.value = "";
	}
}

export default NavBar;
