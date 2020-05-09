import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store";
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_ELRnct8g4sptiDFtYSv7KTys");

const Checkout = (props) => {
    const { store, dispatch } = useContext(Context);
    const { shoppingCart, user } = store;
    const history = useHistory();

    const [step, setStep] = useState(1);
    const [warning, setWarning] = useState("");
    //user state details
    const [gender, setGender] = useState("male"); //male , female
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [toe, setToe] = useState("");
    const [postcode, setPostcode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("Nederland");

    if (shoppingCart.length < 1) {
        history.push("/");
    }
    const checkLang = (e, n) => {
        return props.lang === "NL" ? n : e;
    };
    const claculatePrice = (price, tax) => {
        return (Number(price) + Number(price) * Number(tax)).toFixed(2);
    };
    const total = shoppingCart.reduce((acc, item) => {
        return (
            Number(acc) +
            Number(claculatePrice(item.item.price, item.item.tax)) * item.amount
        );
    }, 0);

    useEffect(() => {
        if (user) {
            if (user.gender) {
                setGender(user.gender);
            }
            if (user.email) {
                setEmail(user.email);
            }
            if (user.name) {
                setName(user.name);
            }
            if (user.surname) {
                setSurname(user.surname);
            }
            if (user.phone) {
                setPhone(user.phone);
            }
            if (user.address) {
                setStreet(user.address.street);
                setNumber(user.address.number);
                setToe(user.address.toe);
                setPostcode(user.address.postcode);
                setCity(user.address.city);
            }
        }
    }, []);

    const validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const validateName = (name) => {
        const re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        return re.test(String(name).toLowerCase());
    };
    const validateNumber = (number) => {
        const re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        if (re.test(String(number))) {
            return false;
        }
        const testString = Number(number);
        return number === 0 ? false : true;
    };

    const renderStep2 = () => {
        if (!validateEmail(email)) {
            return setWarning("email adress not valid!");
        } else {
            setWarning("");
            return setStep(2);
        }
    };
    const renderStep3 = () => {
        if (!validateEmail(email)) {
            return setWarning("email adress not valid!");
        } else if (!validateName(name) || name === "") {
            return setWarning(
                "name is not valid! No numbers or special characters like: '$%&@'. No empty field."
            );
        } else if (!validateName(surname) || surname === "") {
            return setWarning(
                "last name is not valid! No numbers or special characters like: '$%&@'. No empty field."
            );
        } else if (!validateName(street) || street === "") {
            return setWarning(
                "street is not valid! No numbers or special characters like: '$%&@'. No empty field."
            );
        } else if (!validateNumber(number) || number === "") {
            return setWarning(
                "street is not valid! No numbers or special characters like: '$%&@'. No empty field."
            );
        } else {
            setWarning("");
            return setStep(3);
        }
    };
    const pay = async () => {
        const payment = {
            shoppingCart,
            client: {
                gender,
                email,
                phone,
                name,
                surname,
                street,
                number,
                toe,
                postcode,
                city,
                country,
            },
            total: total.toFixed(2),
            paymentOption: "Ideal",
        };
        const response = await fetch("/api/checkoutSession", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payment),
        });
        const data = await response.json();
        const { sessionId } = data;
        //safe sessionId to localStorage to verify it at payments page
        localStorage.setItem(
            "claireSessionId",
            JSON.stringify({ sessionId: sessionId })
        );
        console.log("succes", localStorage.getItem("claireSessionId"));
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            sessionId,
        });
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    };

    return (
        <div className="checkout">
            {warning ? (
                <div className="checkout__warning">{warning}</div>
            ) : null}
            <form className="checkout__form">
                <div className="checkout__form--fieldArea">
                    <div className="checkout__form--fieldArea-header">
                        <p>
                            {checkLang(
                                "Step 1: Your email address",
                                "Stap 1: Uw email adress"
                            )}{" "}
                            {step !== 1 ? `: ${email}` : null}
                        </p>
                    </div>

                    {step === 1 ? (
                        <div className="checkout__form--fieldArea-inputArea">
                            <label>
                                {checkLang(
                                    "Fill here your email address:",
                                    "Vul hieronder uw email adress:"
                                )}
                            </label>
                            <input
                                required
                                type="email"
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="checkout__form--fieldArea-btn">
                                <button type="button" onClick={renderStep2}>
                                    {checkLang("Next", "Volgende")}
                                </button>
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className="checkout__form--fieldArea">
                    <div className="checkout__form--fieldArea-header">
                        <p>
                            {checkLang(
                                "Step 2: Your address details",
                                "Stap 2: Uw adress gegevens"
                            )}
                        </p>
                    </div>

                    {step === 2 ? (
                        <div className="checkout__form--fieldArea-inputArea">
                            <div className="checkout__form--fieldArea-inputArea-alwaysRow">
                                <div>
                                    <input
                                        className="shortInputField"
                                        readOnly
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="Dhr."
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setGender("male")
                                                : null
                                        }
                                    />
                                    <label htmlFor="male">Dhr.</label>
                                </div>
                                <div>
                                    <input
                                        className="shortInputField"
                                        readOnly
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="Mevr."
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setGender("female")
                                                : null
                                        }
                                    />
                                    <label htmlFor="female">Mevr.</label>
                                </div>
                            </div>
                            <div className="checkout__form--fieldArea-inputArea-row">
                                <label htmlFor="name">
                                    {checkLang("Name:", "Naam:")}
                                </label>
                                <input
                                    required
                                    autoComplete="on"
                                    type="text"
                                    value={name}
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <label htmlFor="surname">
                                    {checkLang("Last name:", "Achternaam:")}
                                </label>
                                <input
                                    required
                                    autoComplete="on"
                                    type="text"
                                    value={surname}
                                    name="surname"
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>

                            <div className="checkout__form--fieldArea-inputArea-row">
                                <label htmlFor="street">
                                    {checkLang("Street name:", "Straat:")}
                                </label>
                                <input
                                    required
                                    autoComplete="on"
                                    type="text"
                                    value={street}
                                    name="street"
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                                <label htmlFor="number">
                                    {checkLang("Number:", "Nummer:")}
                                </label>
                                <input
                                    required
                                    autoComplete="on"
                                    type="text"
                                    className="shortInputField"
                                    value={number}
                                    name="number"
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                                <label htmlFor="toe">
                                    {checkLang("Extra:", "Toe:")}
                                </label>
                                <input
                                    type="text"
                                    className="shortInputField"
                                    value={toe}
                                    name="toe"
                                    maxLength={3}
                                    onChange={(e) => setToe(e.target.value)}
                                />
                            </div>

                            <div className="checkout__form--fieldArea-inputArea-row">
                                <label htmlFor="postcode">
                                    {checkLang("Postcode:", "Postcode:")}
                                </label>
                                <input
                                    required
                                    autoComplete="on"
                                    type="text"
                                    value={postcode}
                                    name="postcode"
                                    onChange={(e) =>
                                        setPostcode(e.target.value)
                                    }
                                />
                                <label htmlFor="city">
                                    {checkLang("City:", "Stad:")}
                                </label>
                                <input
                                    required
                                    autoComplete="on"
                                    type="text"
                                    value={city}
                                    name="city"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>

                            <div
                                className="checkout__form--fieldArea-inputArea-alwaysRow"
                                style={{ flexDirection: "column" }}
                            >
                                <label htmlFor="phone">
                                    {checkLang("Phone number:", "Telefoon:")}
                                </label>
                                <input
                                    required
                                    autoComplete="on"
                                    type="tel"
                                    value={phone}
                                    name="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className="checkout__form--fieldArea-btn">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                >
                                    {checkLang("Back", "Terug")}
                                </button>
                                <button type="button" onClick={renderStep3}>
                                    {checkLang("Next", "Volgende")}
                                </button>
                            </div>
                        </div>
                    ) : null}

                    <div className="checkout__form--fieldArea">
                        <div className="checkout__form--fieldArea-header">
                            <p>
                                {checkLang(
                                    "Step 3: Payment",
                                    "Stap 3: Afrekenen"
                                )}
                            </p>
                        </div>

                        {step === 3 ? (
                            <div className="checkout__form--fieldArea-inputArea">
                                <div className="checkout__form--fieldArea-inputArea-column">
                                    <p>
                                        <strong>
                                            {checkLang(
                                                "Your details:",
                                                "Uw gegevens:"
                                            )}
                                        </strong>
                                    </p>
                                    <p>
                                        {name} {surname}
                                    </p>
                                    <p>
                                        {street} {number} {toe}
                                    </p>
                                    <p>
                                        {postcode} {city} {country}
                                    </p>
                                    <p>
                                        <strong>
                                            Te betalen: {total.toFixed(2)}
                                        </strong>
                                    </p>
                                </div>

                                <div className="checkout__form--fieldArea-btn">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                    >
                                        {checkLang("Back", "Terug")}
                                    </button>
                                    <button type="button" onClick={pay}>
                                        {checkLang("Pay", "Betaal")}
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </form>
            <div className="checkout__summary">
                <h3 className="checkout__summary--header">
                    {checkLang("Your basket:", "Uw maandje:")}
                </h3>
                {shoppingCart.map((item, i) => {
                    return (
                        <div
                            className="checkout__summary--item"
                            key={`item -${i * 197.31417}-checkout`}
                        >
                            <div className="checkout__summary--item-name">
                                <p>{item.item.name}</p>
                            </div>
                            <div className="checkout__summary--item-photo">
                                <img
                                    src={item.item.imageurl}
                                    alt={item.item.name}
                                />
                                <div>
                                    <p>
                                        {checkLang("Size:", "Maat:")}{" "}
                                        {item.selectedSize}
                                    </p>
                                    <p>
                                        {checkLang("Color:", "Kleur:")}{" "}
                                        {item.selectedColor}
                                    </p>
                                    <p>
                                        {checkLang("Amount:", "Stuks:")}{" "}
                                        {item.amount}
                                    </p>
                                </div>
                            </div>
                            <div className="checkout__summary--item-price">
                                <p>
                                    {checkLang("Price: ", "Prijs: ")}
                                    {claculatePrice(
                                        item.item.price,
                                        item.item.tax
                                    )}
                                </p>
                            </div>
                        </div>
                    );
                })}
                <div className="checkout__summary--total">
                    <p>
                        {checkLang("Total:", "Totaal:")} {total}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
