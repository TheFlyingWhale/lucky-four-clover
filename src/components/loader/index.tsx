import "./loader.css";

const Loader = () => {
	return (
		<div
			style={{
				width: "200px",
				height: "200px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div className="lds-spinner">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Loader;
