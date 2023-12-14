import React from "react";
import Form from "../../Components/Form/Form";

const LawnTennisWRegistration = ({ sport }) => {
  return (
    <div>
      <div>
        <h2>{sport} Registration</h2>
        <Form sport={sport} />
      </div>
    </div>
  );
};

export default LawnTennisWRegistration;
