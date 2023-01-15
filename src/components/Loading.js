import React from "react";
import "./loading.css";

const LoadingComponent = () => {
	return <div style={{ height: "200px", width: "500px" }} className="LoadingContainer LoadingContainer--rect"></div>;
};

function Loading() {
	return (
		<div className="loading_container">
			<LoadingComponent />
			<LoadingComponent />
			<LoadingComponent />
			<LoadingComponent />
			<LoadingComponent />
			<LoadingComponent />
			<LoadingComponent />
		</div>
	);
}

export default Loading;
