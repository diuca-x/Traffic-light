import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Lights from "./lights";
import Change_button from "./change_button";

//create your first component
const Home = () => {

	const light_stick = {
		width: "1vw"
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-4 justify-content-center align-items-center mt-5">
					<div className="bg-black m-auto text-black" style={light_stick}>
						-
					</div>
					<div className="w-100"></div>
					<div className="bg-black m-auto text-black" style={light_stick}>
						-
					</div>
					<div className="w-100"></div>
					<div className="bg-black m-auto text-black" style={light_stick}>
						-
					</div>
					<div className="w-100"></div>
					<div className="bg-black m-auto text-black" style={light_stick}>
						-
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-4 justify-content-center d-flex align-items-center  ">
					<Lights/>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-4 justify-content-center d-flex align-items-center mt-5 ">
					<Change_button/>
				</div>
			</div>
		</div>
	);
};

export default Home;
