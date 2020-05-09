import React from "react";
import { useHistory } from "react-router-dom";

const Cancel = (props) => {
    const checkLang = (e, n) => {
        return props.lang === "NL" ? n : e;
    };
    const history = useHistory();

    return (
        <div className="payments">
            <h1>
                {checkLang(
                    "Your payment has been cancelled!",
                    "Uw betaling is geannuleered"
                )}
            </h1>
            <p>
                {checkLang(
                    "You just cancelled your payment. Please review your Shopping Cart",
                    "U hebt uw betalling geannuleerd."
                )}
            </p>
            <button onClick={() => history.push("/shoppingBag")}>
                {checkLang("Shopping Cart", "Winkelmaand")}
            </button>
        </div>
    );
};

export default Cancel;
