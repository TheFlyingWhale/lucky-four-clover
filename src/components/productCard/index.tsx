import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../loader";
import "./productCard.css";

interface ProductCardProps {
	image: string;
	title: string;
	text?: string;
	name?: string;
	price?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	image,
	title,
	text,
	name,
	price,
}) => {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	return (
		<NavLink
			to="/product"
			style={{
				display: "flex",
				flexGrow: 1,
				flexBasis: 0,
			}}
		>
			<div
				className="card-container"
				style={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: "white",
					borderRadius: "12px",
					padding: 24,
					width: "fit-content",
					gap: 24,
					alignItems: "center",
					flexGrow: 1,
				}}
			>
				<img
					onLoad={() => {
						setIsImageLoaded(true);
					}}
					id="productImage"
					src={image}
					alt={title}
					style={{
						width: 200,
						display: isImageLoaded ? "inline" : "none",
					}}
				/>
				{!isImageLoaded && <Loader />}
				<div
					style={{
						width: "100%",
						display: "flex",
						flexDirection: "column",
						gap: 6,
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 0,
						}}
					>
						{name && (
							<p
								style={{
									fontSize: `${(1 / 16) * 12}em`,
								}}
							>
								{name}
							</p>
						)}
						<p
							style={{
								fontSize: `${(1 / 16) * 30}em`,
								fontWeight: 600,
							}}
						>
							{title}
						</p>
					</div>
					{text && (
						<p
							style={{
								fontSize: `${(1 / 16) * 18}em`,
							}}
						>
							{text}
						</p>
					)}
					{price && (
						<p
							style={{
								fontSize: `${(1 / 16) * 18}em`,
							}}
						>
							${price.split(",")[0]}
							<span
								style={{
									fontSize: `${(1 / 16) * 9}em`,
								}}
							>
								{price.split(",")[1]}
							</span>
						</p>
					)}
				</div>
			</div>
		</NavLink>
	);
};

export default ProductCard;
