import "../../styles/colors.css";

interface PageBodyProps {
	children: React.ReactNode;
}

const PageBody: React.FC<PageBodyProps> = ({ children }) => {
	return (
		<div
			style={{
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 120,
			}}
			className="bg-white-green"
		>
			{children}
		</div>
	);
};

export default PageBody;
