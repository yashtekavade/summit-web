import React from "react";
import Form from "../../Components/Form/Form";

const SwimmingWRegistration = ({ sport }) => {
  return (
    <div>
      <div>
        <h2>{sport} Registration</h2>
        <Form sport={sport} />
      </div>
    </div>
  );
};

export default SwimmingWRegistration;
