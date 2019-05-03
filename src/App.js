import React, { Component } from "react";
import NavBar from "./componets/navbar";
import Main from "./componets/main";
import Footer from "./componets/footer";
import Counters from "./componets/counters";

class App extends Component {
	state = {
		counters: [
			{
				id: 1,
				value: 0,
				price: 430,
				sale: 25,
				stars: 1.5,
				color: "Black",
				material: "Aluminium",
				title: "OnePlus 6T", 
				description:
					"With the 6T, you get an impressive 6.41 inch AMOLED screen, a unique 16 + 24 megapixel dual camera packed with high-end features and fingerprint sensor built into the touch screen."
			},
			{
				id: 2,
				value: 0,
				price: 610,
				sale: 0,
				stars: 3.5,
				color: "Crystalblue",
				material: "Aluminium",
				title: "Huawei P30 Pro",
				description:
					"The screen fills almost the entire front of the phone. The only thing that interrupts the screen is the small teardrop notch for the front camera, which is located at the top of the screen as a teardrop-shaped little cutout. And with Acoustic Display Technology, the speaker on the front of the phone is very small, as the sound is projected on the touch screen itself to your ear."
			},
			{
				id: 3,
				value: 0,
				price: 830,
				sale: 0,
				stars: 4.5,
				color: "White",
				material: "Aluminium",
				title: "Samsung Galaxy S10",
				description:
					"Galaxy S10 comes with true high-end specs. You get a 6.1 inch AMOLED infinity screen with built-in fingerprint sensor, three rear cameras, wireless power sharing, plenty of memory, long battery life and the powerful Exynos 9820 processor that gives your phone plenty of power."
			},
			{
				id: 4,
				value: 0,
				price: 860,
				sale: 10,
				stars: 2.5,
				color: "Black",
				material: "Aluminium",
				title: "Apple iPhone XR",
				description:
					"iPhone XR is particularly praised for its edge-to-edge LCD, A12 Bionic Chip, outstanding TrueDepth camera and FaceID - all at a low price."
			}
		]
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	handleDelete = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value = 0;
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.reduce(
						(totalCounters, counter) => totalCounters + counter.value,
						0
					)}
				/>
				<Main
					counters={this.state.counters}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
				/>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
