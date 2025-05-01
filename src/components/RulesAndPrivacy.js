import React from "react";
import PrivacyPolicy from "./PrivacyPolicy.js";
import TermsAndConditions from "./TermsAndConditions.js";
import CancellationAndRefund from "./CancellationAndRefund.js";
import ShippingAndDelivery from "./ShippingAndDelivery.js";
import ContactUs from "./ContactUs.js";

const RulesAndPrivacy = () => {
  return (
    <div>
      <PrivacyPolicy />
      <TermsAndConditions />
      <CancellationAndRefund />
      <ShippingAndDelivery />
      <ContactUs />
    </div>
  );
};

export default RulesAndPrivacy;
