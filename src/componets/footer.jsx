import React, { Component } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="section-footer bg2">
			<div className="container">
				<section className="footer-bottom row">
					<div className="col-sm-6">
						<p>
							Made with &lt;3 <br /> by B.Moedekjaer.
						</p>
					</div>
					<div className="col-sm-6">
						<p className="text-sm-right">
							Copyright © 2019 <br />
							<a href="https://venadux.com">Venadux</a>
						</p>
					</div>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
