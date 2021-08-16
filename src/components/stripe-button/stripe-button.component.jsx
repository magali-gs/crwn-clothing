import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
		"pk_test_51JP0loJ86HbawZuMbYLknoo5AmhfqG0HR8azNdlg0vqXnGBNZaaEMacnOdSllmac3tL16K89kDY2WGXY52VhPl3D00gf2yV9IS";
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }

    return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
		/>
	);
}

export default StripeCheckoutButton;