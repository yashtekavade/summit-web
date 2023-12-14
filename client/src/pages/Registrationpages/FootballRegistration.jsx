import React from "react";
import Form from "../../Components/Form/Form";

const FootballRegistration = ({ sport }) => {
  return (
    <div>
      <div>
        <h2>{sport} Registration</h2>
        <Form sport={sport} />
      </div>
    </div>
  );
};

export default FootballRegistration;
