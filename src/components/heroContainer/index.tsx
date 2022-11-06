interface HeroContainerProps {
	children: React.ReactNode;
	height?: string;
}

const HeroContainer: React.FC<HeroContainerProps> = ({
	children,
	height = "900",
}) => {
	return (
		<div
			style={{
				backgroundColor: "white",
				maxWidth: "880px",
				height: `${height}px`,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: 48,
			}}
		>
			{children}
		</div>
	);
};

export default HeroContainer;
