import styled from "styled-components";

const Wrapper = styled.div`
  .wrapper {
    width: min(900px, 100% - 3rem);
    margin-inline: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    color: whitesmoke;
    background-color: #353535;
  }
  caption,
  th,
  td {
    padding: 0.5rem;
  }
  caption {
    text-align: left;
    background-color: hsl(0 0% 0%);
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  th {
    background-color: hsl(0 0% 0% / 0.5);
  }
  tr:nth-of-type(2n) {
    background-color: hsl(0 0% 0% / 0.1);
  }
  @media (max-width: 650px) {
    .table__header {
      display: none;
    }
    .table__rt{
        text-align:left;
    }
    td {
      display: grid;
   
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem
    }
    td:first-child{
        padding-top: 2rem;
    }
    td:last-child{
        padding-bottom: 2rem;
    }
    td::before{
        content: attr(data-cell) ": ";
        font-weight: 700;
        text-transform: capitalize;
    }
  }
  
`;
export default Wrapper;
