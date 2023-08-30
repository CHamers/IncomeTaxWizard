import React from "react";
import { Link } from "react-router-dom";

const TaxSystemInfo = () => {
  return (
    <ul>
      <h1>UK's Tax System</h1>
      <li>
        <Link to="/tax-info/taxable-income">Taxable Income</Link>
      </li>
    </ul>
  );
};

export default TaxSystemInfo;
