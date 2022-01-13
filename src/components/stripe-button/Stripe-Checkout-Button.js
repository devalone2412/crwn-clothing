import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KHJAeBCohltnyt8POE9lI6MxqA1UQXeMTkupdPWZmGzBSDmEF0dueH7iUKXA825SuPxvYOKYDzUoCEM1FcEhUSD00ZfCVTLIg";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    );
}

export default StripeCheckoutButton;