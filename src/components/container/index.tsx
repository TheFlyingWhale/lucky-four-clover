interface ContainerProps {
	children: React.ReactNode;
	style?: object;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
	return (
		<div
			style={{
				maxWidth: "1300px",
				width: "100%",
				...style,
			}}
		>
			{children}
		</div>
	);
};

export default Container;
