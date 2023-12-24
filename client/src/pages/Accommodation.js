import React from "react";
import "./Accommodation.css";
import Footer from "../Components/Footer/Footer";

const Accomodation = () => {
  return (
    <div>
      <div id="acc-intro">
        <h2 id="acc-heading">Accommodation</h2>
      </div>
      <div className="acc-body">
        <div className="acc-heading2">
          <div className="section-container">
            <div>
              <h2>At the time of registration:</h2>
            </div>
            <div className="acc-text">
              ▪ Accommodation charges are to be paid on your arrival at MIT-WPU
              Campus. <br></br>▪ Also, you need to pay a fee of Rs. 1,000/- in
              cash as a deposit, which will be returned after the event. This
              deposit has to be paid at the time of arrival. Accommodation will
              not be entertained later on. <br></br>▪ Extra accommodation and
              boarding facilities will be charged as applicable.
            </div>
          </div>
          <div className="section-container">
            <div>
              <h2> On your arrival in pune:</h2>
            </div>
            <div className="acc-text">
              ▪ Report to the MIT-WPU, Kothrud Campus help desk where you will
              be informed about your accommodation details. <br></br>▪ MIT-WPU
              will provide you with mattresses and quilts.<br></br> ▪ If you
              have not registered beforehand then MIT-WPU will not be
              responsible for your accommodation. <br></br>▪ Registration for
              accommodation on the website only shows your interest and does not
              confirm your accommodation from our side.<br></br> ▪ Per head
              expenditure for Accommodation, Food (breakfast, lunch, and dinner)
              & Transport will be Rs. 1,000/- per day.<br></br> ▪ Apart from
              this, you can make arrangements of your own at your convenience.
              <br></br> ▪ The institution will not be responsible for any loss.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accomodation;
