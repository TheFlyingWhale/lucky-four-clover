import "../../styles/effects.css";
import jacket from "../../assets/merch/jacket.png";
import Container from "../../components/container";

const Product = () => {
	return (
		<main
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 6 * 40,
				paddingTop: 6 * 20,
			}}
		>
			<Container>
				<div
					style={{
						display: "flex",
						gap: 60,
						justifyContent: "center",
					}}
				>
					<img
						className="drop-shadow"
						src={jacket}
						alt=""
						style={{
							borderRadius: 24,
							maxWidth: "500px",
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 24,
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 0,
							}}
						>
							<p
								style={{
									fontSize: `${(1 / 16) * 18}em`,
								}}
							>
								Woolie goolie
							</p>
							<p
								style={{
									fontSize: `${(1 / 16) * 48}em`,
									fontWeight: 700,
								}}
							>
								Jacket
							</p>
							<p
								style={{
									fontSize: `${(1 / 16) * 24}em`,
								}}
							>
								Stay warm as you find clovers
							</p>
						</div>
						<p
							style={{
								fontSize: `${(1 / 16) * 24}em`,
							}}
						>
							$199
							<span
								style={{
									fontSize: `${(1 / 16) * 16}rem`,
								}}
							>
								99
							</span>
						</p>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 6,
							}}
						>
							<label
								htmlFor="size-select"
								style={{
									fontSize: `${(1 / 16) * 16}em`,
									fontWeight: 600,
								}}
							>
								Size
							</label>
							<select
								name="sizes"
								id="size-select"
								defaultValue="Choose size"
								style={{
									padding: "6px 12px",
									fontSize: `${(1 / 16) * 16}em`,
									borderRadius: 6,
									borderColor: "#CED4DA",
								}}
							>
								<option value="small">Small</option>
								<option value="medium">Medium</option>
								<option value="large">Large</option>
							</select>
						</div>
						<button
							style={{
								width: "fit-content",
							}}
						>
							<p
								style={{
									fontSize: `${(1 / 16) * 16}rem`,
								}}
							>
								Add to cart
							</p>
						</button>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default Product;
