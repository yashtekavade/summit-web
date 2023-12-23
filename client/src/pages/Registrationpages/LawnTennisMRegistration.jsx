import React from "react";
import Form from "../../Components/Form/Form";

const LawnTennisMRegistration = ({ sport }) => {
  return (
    <div>
      <div>
        <h2>{sport} Registration</h2>
        <Form sport={sport} />
      </div>
    </div>
  );
};

export default LawnTennisMRegistration;
