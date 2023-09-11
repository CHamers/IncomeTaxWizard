import React from "react";
import Wrapper from "../assets/wrappers/Content";
import AddTableARIA from "../utils/tables";
import {
  CURR_TAX_YEAR_2DIG,
  PREV_TAX_YEAR,
  PA,
  IL,
  ILPA,
} from "../utils/constants";

const PersonalAllowances = () => {
  AddTableARIA();

  return (
    <Wrapper>
      <div className="wrapper">
        <h2>Personal Allowances</h2>
        <p>
          Most individuals are entitled to a personal allowance (PA) to ensure
          that soem of thier income is tax-free. For {PREV_TAX_YEAR}/
          {CURR_TAX_YEAR_2DIG} the basic PA is £{PA}. The PA is never
          time-apportioned. If net income is less than the PA, the excess
          allowance is lost.
        </p>
        <h3>Withdrawal of the personal allowance</h3>
        <p>
          If an individual's adjusted net income exceeds £{IL} their PA is
          reduced by £1 fpr every £2 of excess income. Therefore, an individual
          with adjusted net income of £{ILPA} or more will receive no PA &#40;
          <code>
            £{IL} + &#40;£{PA} x 2&#41;
          </code>
          &#41;.
        </p>
        <p>
          Adjusted net income is net income as shown in the income tax
          computation less the gross amount of personal pension contributions.
        </p>
        <p>
          An individual whose adjusted net income falls between £{IL} and £
          {ILPA} suffers an effective marginal rate of income tax of 60%
          &#40;the higher rate of 40% on income plus an additional 20% as a
          result of the withdrawal of teh personal allowance&#41;. It may
          therefore be beneficial for such individuals to make additional
          personal pension contributions.{" "}
        </p>
        <h3>The set-off of the personal allowance and deductible interest</h3>
        <p>
          The PA is deducted from the individual's net income &#40;i.e. income
          after qualifying interest payments have been deducted&#41;.
        </p>
        <p>
          Deductible interest payments and teh PA must be set off against income
          in the following order
        </p>
        <ol>
          Deductible interest payments and the PA must normally be set off
          against income in the following order:
          <li>
            non-savings income &#40;i.e. income other than savings income and
            dividends&#41;, then{" "}
          </li>
          <li>savings income &#40;i.e. interest income&#41;, then</li>
          <li>dividend income</li>
        </ol>
        <p>
          If there is insufficient income to utilise in full, relief for the
          excess PA and deductible interest is lost &#40;i.e. they cannot be
          carried forward or back&#41;.
        </p>
        <p>
          There are occasions in which it may be preferable to make the
          deductions in a different order and the legislation permits this.
        </p>
        <table>
          <caption>Proforma: taxable income</caption>
          <thead>
            <tr>
              <th class="table__header" scope="col"></th>
              <th class="table__header" scope="col">
                Total income
              </th>
              <th class="table__header" scope="col">
                Non-savings income
              </th>
              <th class="table__header" scope="col">
                Savings income
              </th>
              <th class="table__header" scope="col">
                Dividend income
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="display-none">
              <th class="table__rt" scope="row"></th>
              <th class="table__rt" scope="row">
                £
              </th>
              <th class="table__rt" scope="row">
                £
              </th>
              <th class="table__rt" scope="row">
                £
              </th>
              <th class="table__rt" scope="row">
                £
              </th>
            </tr>
            <tr>
              <th class="table__rt" scope="row" colspan="5">
                Earned income
              </th>
            </tr>
            <tr>
              <td className="first-child">Trading income</td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income">X</td>
              <td data-cell="savings-income"> </td>
              <td data-cell="dividend-income"> </td>
            </tr>
            <tr>
              <td className="first-child">Employment income &#40;gross&#41;</td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income">X</td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <td className="first-child">Pension income</td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income">X</td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <td className="first-child">Property business income &#40;FHLs&#41;</td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income">X</td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <th class="table__rt" scope="row" colspan="5">
                Savings income
              </th>
            </tr>
            <tr>
              <td className="first-child">Bank&#47;Building society interest</td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income"></td>
              <td data-cell="savings-income">X</td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <td className="first-child">Loan note&#47;Gilt&#47;NS&#38;I interest</td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income"></td>
              <td data-cell="savings-income">X</td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <td className="first-child">Foreign interest &#40;gross&#41;</td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income"></td>
              <td data-cell="savings-income">X</td>
              <td data-cell="dividend-income"></td>
            </tr>

            <tr>
              <th class="table__rt" scope="row" colspan="5">
                Dividend income
              </th>
            </tr>
            <tr>
              <td className="first-child">UK dividends received </td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income"></td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income">X</td>
            </tr>
            <tr>
              <td className="first-child">Foreign dividends </td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income"></td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income">X</td>
            </tr>
            <tr>
              <th class="table__rt" scope="row" colspan="5">
                Other investment income
              </th>
            </tr>
            <tr>
              <td className="first-child">Patent royalties received &#40;100&#47;80&#41; </td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income">X</td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <td className="first-child">UK Property income &#40;excluding FHLs&#41; </td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income">X</td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <td className="first-child">REIT income &#40;100&#47;80&#41; </td>
              <td data-cell="total-income" className="text-underline">X</td>
              <td data-cell="non-savings-income">X</td>
              <td data-cell="savings-income"></td>
              <td data-cell="dividend-income"></td>
            </tr>
            <tr>
              <td className="first-child">Other foreign income </td>
              <td data-cell="total-income" className="text-underline cell-border">X</td>
              <td data-cell="non-savings-income" className="cell-border">X</td>
              <td data-cell="savings-income" className="cell-border"></td>
              <td data-cell="dividend-income" className="cell-border"></td>
            </tr>
            <tr className="content-after">
              <th class="table__rt" scope="row" >
                Total income
              </th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
            </tr>
            <tr className="content-after content-after-neg">
              <th class="table__rt" scope="row" className="background-light" >
                LESS Deductible interest
              </th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
            </tr>
            <tr className="content-after">
              <th class="table__rt" scope="row" >
                Net income
              </th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
            </tr>
            <tr className="content-after content-after-neg">
              <th class="table__rt" scope="row" className="background-light" >
                LESS Personal allowance &#40;PA&#41;
              </th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
              <th className="display-none cell-border background-light">&#40;X&#41;</th>
            </tr>
            <tr className="content-after">
              <th class="table__rt" scope="row" >
                Taxable income
              </th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
              <th className="display-none">X</th>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default PersonalAllowances;
