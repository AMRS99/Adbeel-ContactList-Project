import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ContactList from "./ContactList.jsx";


export const Home = () => {

	return(
		<>
			<div className="row mt-5">
				<div className="col-3"></div>
				<div className="col-6">
					<ContactList />
				</div>
				<div className="col-3"></div>
			</div>	
		</>
	);
};
