import {
  PayPalScriptProvider,
  PayPalButtons
} from "@paypal/react-paypal-js";

import './Payment.css'

export default function Payment() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <img className="payment-img" src="65.png" alt="" />
      <PayPalButtons
          createOrder={(data, actions) => {
              return actions.order.create({
                  purchase_units: [
                      {
                          amount: {
                              value: "65.00",
                          },
                      },
                  ],
              });
          }}
          onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                  const name = details.payer.name.given_name;
                  alert(`Transaction completed by ${name}`);
              });
          }}
      />
    </PayPalScriptProvider>
  );
}