import Container from "../container";

interface PageHeaderProps {
	children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
	return (
		<header
			style={{
				width: "100%",
				height: "fit-content",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{children && (
				<>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							backgroundColor: "white",
							width: "100%",
						}}
					>
						<Container>{children}</Container>
					</div>
					<svg
						fill="white"
						width="100%"
						height="fit-content"
						viewBox="0 0 500 13"
						preserveAspectRatio="none"
					>
						<path
							d="	M 0,0
						Q 250,24 500,0
						Z
					"
						/>
					</svg>
				</>
			)}
		</header>
	);
};

export default PageHeader;
