import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JP0loJ86HbawZuMbYLknoo5AmhfqG0HR8azNdlg0vqXnGBNZaaEMacnOdSllmac3tL16K89kDY2WGXY52VhPl3D00gf2yV9IS";

	const onToken = (token) => {
		axios
			.post("/payment", {
				amount: priceForStripe,
				token: token,
			})
			.then((response) => {
        alert("Payment Successfull");
      })
			.catch((error) => {
				console.log(error);
        alert("There was an issue with your payment. Please make sure that you use the provide credit card");
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
