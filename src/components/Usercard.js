import React, { useState } from "react";
import Modal from "./Modal";
import "./usercardstyle.css";

function Usercard({ user }) {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="card_container">
			{showModal && <Modal handleModal={setShowModal} user={user} />}
			<div className="card_header">
				<div>
					<span className="card_title ">Name: </span> {user.name}
				</div>
				<div>
					<span className="card_title ">Email: </span>
					{user.email}
				</div>
				<div>
					<span className="card_title ">Occupation: </span> {user.occupation}
				</div>
			</div>
			<span className="card_bio_title">Bio</span>
			<div className="card_bio"> {user.bio}</div>
			<div className="modal_button_container">
				{" "}
				<button className="btn" onClick={() => setShowModal(!showModal)}>
					Update
				</button>
			</div>
		</div>
	);
}

export default Usercard;
