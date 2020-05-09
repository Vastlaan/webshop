import React, { useContext, useEffect } from "react";
import { Context } from "../store";
import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch,
} from "react-router-dom";

const Payments = (props) => {
    const checkLang = (e, n) => {
        return props.lang === "NL" ? n : e;
    };

    const { store, dispatch } = useContext(Context);

    const location = useLocation();
    const history = useHistory();

    const sessionId = location.search.substr(1).split("=")[1];

    useEffect(() => {
        return () => {
            if (
                sessionId ===
                JSON.parse(localStorage.getItem("claireSessionId")).sessionId
            ) {
                localStorage.removeItem("claireShoppingCart");
            }
            localStorage.removeItem("claireSessionId");
        };
    }, []);

    if (
        sessionId ===
        JSON.parse(localStorage.getItem("claireSessionId")).sessionId
    ) {
        return (
            <div className="payments">
                <h1>
                    {checkLang(
                        "Thank you! We received your payment.",
                        "Bedankt! We hebben uw betaling in goede orde ontvangt"
                    )}
                </h1>
                <p>
                    {checkLang(
                        "You shall recieve an email with confirmation of your order within couple of hours . If that's not the case, please contact our customer service.  ",
                        "U zal een email ontvangen met bevestiging van uw besteling. Als u geen email ontvangt binnen 24 uren neem a.u.b. contact met onze klantenservice."
                    )}
                </p>
                <button onClick={() => history.push("/")}>
                    {checkLang("Home", "Home")}
                </button>
            </div>
        );
    } else {
        return <div>{history.push("/")}</div>;
    }
};

export default Payments;
