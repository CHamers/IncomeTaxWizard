import React from "react";
import Wrapper from "../assets/wrappers/TaxableIncomePage";

const TaxableIncome = () => {
  function AddTableARIA() {
    try {
      var allTables = document.querySelectorAll("table");
      for (var i = 0; i < allTables.length; i++) {
        allTables[i].setAttribute("role", "table");
      }
      var allCaptions = document.querySelectorAll("caption");
      for (var i = 0; i < allCaptions.length; i++) {
        allCaptions[i].setAttribute("role", "caption");
      }
      var allRowGroups = document.querySelectorAll("thead, tbody, tfoot");
      for (var i = 0; i < allRowGroups.length; i++) {
        allRowGroups[i].setAttribute("role", "rowgroup");
      }
      var allRows = document.querySelectorAll("tr");
      for (var i = 0; i < allRows.length; i++) {
        allRows[i].setAttribute("role", "row");
      }
      var allCells = document.querySelectorAll("td");
      for (var i = 0; i < allCells.length; i++) {
        allCells[i].setAttribute("role", "cell");
      }
      var allHeaders = document.querySelectorAll("th");
      for (var i = 0; i < allHeaders.length; i++) {
        allHeaders[i].setAttribute("role", "columnheader");
      }
      // this accounts for scoped row headers
      var allRowHeaders = document.querySelectorAll("th[scope=row]");
      for (var i = 0; i < allRowHeaders.length; i++) {
        allRowHeaders[i].setAttribute("role", "rowheader");
      }
    } catch (e) {
      console.log("AddTableARIA(): " + e);
    }
  }

  AddTableARIA();
  return (
    <Wrapper>
      <div className="wrapper">
        <h2>TaxableIncome Info</h2>
        <p>
          The UK’s system of income tax is an example of a progressive tax
          system. As income rises, the tax rate also rises, e.g. a tax rate of
          10% on the first £100,000 of income, rising to a rate of 40% on the
          next £400,000 of income.
        </p>
        <p>
          Individuals are liable to pay income tax on their taxable income for a
          tax year. Taxable income is income generated from all sources which is
          not specifically exempt less deductible interest and personal
          allowances.{" "}
        </p>
        <p>
          A tax year (also referred to as a ‘fiscal year’ or ‘year of
          assessment’) runs from 6 April on one year to the following 5 April.
          <ul>
            The scope of income tax for individuals is as follows:
            <li>- UK resident: worldwide taxable income</li>
            <li>- Non-UK resident: UK income only</li>
          </ul>
        </p>
        <h3>The classification of income</h3>
        <p>Taxable income is income which is not specifically exempt.</p>
        <h4>Exempt income</h4>
        <ul>
          The main types of income which are exempt from income tax are:
          <li>- some termination payments</li>
          <li>
            - competition prizes, National Lottery and Premium bond prizes,
            betting winnings
          </li>
          <li>- income from ISAs (Individual Savings Accounts)</li>
          <li>
            - interest on overpaid income tax which has been repaid by HMRC
          </li>
          <li>- interest on National Savings Certificates</li>
          <li>
            - some social security benefits (e.g. personal independence payment)
          </li>
        </ul>
        <h4>Taxable income</h4>
        <p>
          All taxable income must be brought into the income tax computation
          'gross' regardless of whether any tax has already been deducted at
          source before payment to the individual
        </p>
        <p>
          Taxable income is classified according to its nature and source. Each
          source of income must be shown separately as the rules to determine
          the amount of income that is taxable differ for each source.
        </p>
        <table>
          <caption>Summary of the key sources of income</caption>
          <thead>
            <tr>
              <th class="table__header" scope="col">
                Type of income
              </th>
              <th class="table__header" scope="col">
                Basis of assessment
              </th>
              <th class="table__header" scope="col">
                Received
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="table__rt" scope="row" colspan="3">
                Savings income
              </th>
            </tr>
            <tr>
              <td data-cell="income-type">UK interest (see below)</td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">
                Some sources = gross {"\n"} Some sources = net of 20% tax
              </td>
            </tr>
            <tr>
              <td data-cell="income-type">Foreign interest</td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">Net of foreign tax</td>
            </tr>
            <tr>
              <th class="table__rt" scope="row" colspan="3">
                Dividend income
              </th>
            </tr>
            <tr>
              <td data-cell="income-type">UK dividends</td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">Gross</td>
            </tr>
            <tr>
              <td data-cell="income-type">Foreign dividends</td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">Net of foreign tax</td>
            </tr>
            <tr>
              <th class="table__rt" scope="row" colspan="3">
                Other income
              </th>
            </tr>
            <tr>
              <td data-cell="income-type">Employment income</td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">Net of PAYE (Pay As You Earn)</td>
            </tr>
            <tr>
              <td data-cell="income-type">Trading income</td>
              <td data-cell="assessment-basis">Current year basis</td>
              <td data-cell="received">Gross</td>
            </tr>
            <tr>
              <td data-cell="income-type">Pension income (see below)</td>
              <td data-cell="assessment-basis">Accruals basis</td>
              <td data-cell="received">Gross or Net</td>
            </tr>
            <tr>
              <td data-cell="income-type">UK property income</td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">Gross</td>
            </tr>
            <tr>
              <td data-cell="income-type">Other foreign income</td>
              <td data-cell="assessment-basis">Accruals basis</td>
              <td data-cell="received">Net of foreign tax</td>
            </tr>
            <tr>
              <td data-cell="income-type">
                Miscellaneous income (e.g. patent royalties)
              </td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">Net of 20% tax</td>
            </tr>
            <tr>
              <td data-cell="income-type">
                Interest in possession trust income
              </td>
              <td data-cell="assessment-basis">Distributable share</td>
              <td data-cell="received">Net of various rates of tax</td>
            </tr>
            <tr>
              <td data-cell="income-type">Discretionary trust income</td>
              <td data-cell="assessment-basis">Receipts basis</td>
              <td data-cell="received">Net of 45% tax</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">
                <em><strong>Note: </strong> Receipts bass means the amount received in the tax year (i.e. from 6 April to 5 April) and accruals basis means the amounts accrued in the tax year.</em>
              </td>
            </tr>
          </tfoot>
        </table>
        <h4>UK interest income</h4>
        <ul>All UK interest is received gross, apart from:
            <li>- interest from unquoted UK companies (e.g. loan note interest)</li>
            <li>- Savings income from non-discretionary trusts</li>
            These sources are received net of 20% income tax.
        </ul>
        <p>As all taxable income must be included gross in an income tax computation, any interest income received net of 20% tax must be grossed up 100/80 before inclusion in the income tax computation.</p>
        <h4>Pension income</h4>
      <p>Pension income is taxed on an accruals basis (not a cash receipts basis)</p>
      <p>All pension income accrued in the tax year is taxable as earned income, liable to tax in the normal way. A credit is given in the individual's income tax computation for any income tax deducted at source by the payer of the pension.</p>
      <p>State pension income is received gross. Occupational pensions are usually paid by the employer net of PAYE. Personal pensions are paid net of 20% tax.</p>
      <h4>Dividend income</h4>
      <p>Dividends from UK companies, unit trusts and open-ended investment trusts (OEIT) are received gross. They are treated as dividend income in the income tax computation. </p>
      <p>Dividends from overseas companies may be received net overseas tax, in which case thy must be grossed up at the appropriate rate.</p>
      <p>Dividends from Real Estate Investment Trusts (REIT) are received net of 20% tax. The amount received must be grossed up by 100/80. such dividends are treated in the same way as property income.</p>
      <h3>Deductible interest</h3>
      <p>If a loan is taken out to finance expenditure which is wholly and exclusively for the purpose of a trade, the interest is treated as a trading expense and is an allowable deduction in the trading income computation. Similarly, if a loan is taken out to finance expenditure which is wholly and exclusively for the purpose of a property business, the interest is dealt with according to the property business income rules.</p>
      <p>Interest on loans taken out for other qualifying purposes is deductible from total income.</p>
      <ul>Qualifying purposes are to:
        <li>- buy an interest in a partnership, employee-controlled company or co-operative</li>
        <li>- buy plant or machinery for use in the individual's employment or partnership. Interest is allowed for three years and is apportioned if there is private use of the asset</li>
        <li>buy ordinary shares in, or make a loan to, a 'close company'. However, the interest is not deductible if relief for the shares is claimed under the Enterprise Investment Scheme.</li>
        All qualifying loan interest is paid gross.
      </ul>
            <h4>Cap on income tax reliefs</h4>
            <p>There is a cap on the amount of reliefs that an individual can deduct from their total income. Qualifying interest payments are one of the types of relief that is subject to this cap.</p>
            <p>The cap is the greater of £50,000 or 25% of the individual's adjusted total income. Adjusted total income is total income less the gross amount of any personal pension contributions.</p>
            <p>An individual who has more than one type of relief that is subject to the cap should carefully consider which of their reliefs to deduct first. Certain reliefs, such as loss relief, can be carried forward to future years if unrelieved in the current year. Other reliefs, such as qualifying interest payments, are lost if unrelieved in the year of payment. Qualifying interest relief should therefore be claimed in the year of payment if possible.</p>
      </div>
    </Wrapper>
  );
};

export default TaxableIncome;
