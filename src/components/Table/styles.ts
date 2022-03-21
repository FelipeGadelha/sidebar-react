import styled from "styled-components";
import { v } from "../../styles/variables";

export const CustonTable = styled.table`
  width: 90%;
  margin: 1rem auto;
  border-collapse: collapse;
  /*contain: layout inline-size;*/

  > thead {
    background: ${p => p.theme.colors.panel};

    > tr th {
      font-size: 14px;
      font-weight: medium;
      letter-spacing: 0.035rem;
      color: ${p => p.theme.colors.text};
      //color: #FFFFFF;
      opacity: 1;
      padding: 1.2rem;
      vertical-align: top;
      border: 0.1rem solid ${p => p.theme.colors.primary};//#dee2e685;
      border-width: 0.2rem 0rem 0.2rem 0rem;
    }
  }
  > tbody tr td {
    font-size: 1.4rem;
    text-overflow: "…";
    white-space:nowrap;
    letter-spacing: 0.035rem;
    //font-weight: normal;
    color: ${p => p.theme.colors.text};
    background: ${p => p.theme.colors.panel};
    padding: 0.8rem;
    text-align: center;
    border: 0.1rem solid ${p => p.theme.colors.primary};
    border-width: 0rem 0rem 0.1rem 0rem;
  }

  @media (max-width: 768px) {
    > tr {
      margin-bottom: 1rem;
    }

    > thead {
      display: none;
    }
    > tbody, tr, td {
      display: block;
      width: 100%;
    }
    > tbody tr {
      margin-bottom: 1rem;
      > td {
        text-align: right;
        padding-left: 50%;
        position: relative;
        &::before {
          content: attr(data-label);
          position: absolute;
          left: 0;
          width: 50%;
          padding-left: 1.5rem;
          font-weight: 600;
          font-size: 1.4rem;
          text-align: left;
        }
      }
    }
  }
`;
