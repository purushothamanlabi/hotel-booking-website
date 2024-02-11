import React from "react";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../src/utils/config.js";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./../styles/payment.css";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/\D/g, "");

    const formattedNumber = sanitizedInput.replace(/(\d{4})/g, "$1 ").trim();

    setCardNumber(formattedNumber);
  };

  const handleExpiryChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/\D/g, "");

    const formattedExpiry = sanitizedInput
      .replace(/(\d{2})(\d{2})/, "$1/$2")
      .trim();

    setExpiry(formattedExpiry);
  };

  const handleCvvChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/\D/g, "");

    const limitedCvv = sanitizedInput.slice(0, 3);

    setCvv(limitedCvv);
  };

  const navigate = useNavigate();
  const { data } = useParams();
  let parsedData = JSON.parse(decodeURIComponent(data));


  
  console.log("pay data",parsedData);

  function backfunction() {
    navigate("/tour");
  }

  const handleClick = async (e) => {
    e.preventDefault();

    toast.info("wait , it take some time ");

    try {
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(parsedData),
      });
      const result = await res.json();
      if (!res.ok) {
        return toast.error(result.message);
      }

      navigate(`/thank-you`);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <div className="border py-4 rounded">
            <div className="container payment__forms">
              <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-6 col-xs-12">
                  <h4 className="text-center">Payment Options</h4>
                  <div className="shadow-sm bg-white p-4 my-4">
                    <h5 className="mb-4 aline-center text-dark">
                    Pay with debit or credit card
                    </h5>
                    <div className="d-flex card_center">
                      <div className="shadow bg-error cardStyle p-3 debit_card">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-light card_tx_col">VISA</div>
                          <div className="selectBox selected">✓</div>
                        </div>
                        <div className="my-3">
                          <div>
                            <small className="text-secondary card_tx_col">
                              CARD NYUMBER
                            </small>
                          </div>
                          <div className="fs-4 text-info card_tx_col">
                            **** **** **** 2288
                          </div>
                        </div>
                        <div className="my-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <div>
                                <small className="text-dark card_tx_col">CARD HOLDER</small>
                              </div>
                              <div className="text-white">purushothaman</div>
                            </div>
                            <div>
                              <div>
                                <small className="text-secondary card_tx_col">EXPIRY</small>
                              </div>
                              <div className="text-light">02/28</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ms-4 shadow cardStyle p-3 bg-warning credit_card hide_card_se">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-secondary   card_tx_col">Rupay</div>
                          <div className="selectBox" />
                        </div>
                        <div className="my-3">
                          <div>
                            <small className="text-dark  card_tx_col">CARD NYUMBER</small>
                          </div>
                          <div className="fs-4 text-dark  card_tx_col">
                            **** **** **** 8822
                          </div>
                        </div>
                        <div className="my-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <div>
                                <small className="text-secondary  card_tx_col">
                                  CARD HOLDER
                                </small>
                              </div>
                              <div className="text-dark  card_tx_col">Vijay</div>
                            </div>
                            <div>
                              <div>
                                <small className="text-secondary  card_tx_col">EXPIRY</small>
                              </div>
                              <div className="text-dark  card_tx_col">08/22</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <form action="">
                      <div>
                        <div className="col-sm-8 mt-4">
                          <label htmlFor="cardNumber" className="text-dark">
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            className="form-control my-1"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                          />
                        </div>
                        <div className="row">
                          <div className="col-sm-3 col-xs-6 mt-4">
                            <label htmlFor="expiry">Card Expiry (mm/yy)</label>
                            <input
                              type="text"
                              id="expiry"
                              className="form-control my-1"
                              value={expiry}
                              onChange={handleExpiryChange}
                            />
                          </div>
                          <div className="col-sm-3 col-xs-6 mt-4">
                            <label htmlFor="cvv">CVV</label>
                            <input
                              type="password"
                              id="cvv"
                              className="form-control my-1"
                              value={cvv}
                              onChange={handleCvvChange}
                              maxLength={3}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 mt-2">
                        <h5 className="">Pay with UPI Lite</h5>
                      </div>

                      <div className="col-sm-6 mt-3">
                        <label htmlFor="cardName">Enter your upi here</label>
                        <input
                          type="text"
                          id="cardName"
                          className="form-control my-1"
                          placeholder="yourname@bankname"
                        />
                      </div>

                      <div className="my-3">
                        <small className="text-secondary">
                        By proceeding, I agree to the payment terms.
                         I authorize the charge to my debit/credit card for the total amount of xxx.xx.
                        </small>
                      </div>
                      <div className="mt-5 mb-3">
                        <div className="row">
                          <div className="col">
                            <a
                              // href="javascript:goBack()"
                              onClick={backfunction}
                              className="btn btn-outline-secondary w-100"
                            >
                              Go Back
                            </a>
                          </div>
                          <div className="col">
                            <button
                              onClick={handleClick}
                              role="button"
                              type="submit"
                            className="paybtn"
                            >
                             PAY NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <h4>Booking Summary</h4>
                  <div className="shadow-sm bg-white p-4 mt-4 mb-3">
                    <h5 className="h6">
                      <strong>Policy Info</strong>
                    </h5>
                    <table className="w-100 mt-3">
                      <tbody>
                        <tr>
                          <td>Policy </td>
                          <td>:</td>
                          <td>
                            <strong className="ms-2">No Cancellation</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Members</td>
                          <td>:</td>
                          <td>
                            <strong className="ms-2">{parsedData.guestSize}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="shadow-sm bg-white p-4 mb-3">
                    <h5 className="h6">
                      <strong>Coverage</strong>
                    </h5>
                    <table className="w-100 mt-3">
                      <tbody>
                        <tr>
                          <td>Your Coverage</td>
                          <td>:</td>
                          <td>
                            <strong className="ms-2">Full</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>Validity</td>
                          <td>:</td>
                          <td>
                            <strong className="ms-2">{parsedData.bookAt}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="shadow-sm bg-white mb-3">
                    <div className="px-4 py-2 validity_tab text-white root_colour">
                      Discount Valid until : <strong>12:22 mins</strong>
                    </div>
                    <div className="p-4">
                      <h5 className="h6">
                        <strong>Price Breakup</strong>
                      </h5>
                      <table className="w-100 mt-3">
                        <tbody>
                          <tr>
                            <td>Reg Price</td>
                            <td>:</td>
                            <td>
                              <strong className="ms-2">&#8377;{parsedData.guestSize *99}</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>Tax</td>
                            <td>:</td>
                            <td>
                              <strong className="ms-2">&#8377;100</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>Discount</td>
                            <td>:</td>
                            <td>
                              <strong className="ms-2">&#8377;50</strong>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={3}>
                              <hr />
                            </td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td>:</td>
                            <td>
                              <strong className="ms-2 text-success">&#8377;
                              {parsedData.guestSize *99 + 150}
                              </strong>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={3}>
                              <hr />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <div className="text-secondary">
                          <span className="badge validity_tab me-2">dsascBca3</span>{" "}
                          Offer applied
                        </div>
                        <div className="text-secondary my-2">
                          Secure payment
                        </div>
                        <div className="text-secondary">
                          3 day money back gaurantee
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-top">
                      <h6>
                        <strong>
                          Do you have a code? <a href="#">Click here</a>
                        </strong>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Payment;
