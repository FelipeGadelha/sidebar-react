import styled from "styled-components";
import { v } from "../../styles/variables";

export const CustonTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  /*contain: layout inline-size;*/

  > thead {
    background: #ee2828;

    > tr th {
      font-size: 14px;
      font-weight: medium;
      letter-spacing: 0.35px;
      color: #FFFFFF;
      opacity: 1;
      padding: 12px;
      vertical-align: top;
      border: 1px solid #dee2e685;
    }
  }
  > tbody tr td {
    font-size: 14px;
    letter-spacing: 0.35px;
    font-weight: normal;
    color: #f1f1f1;
    background: #3c3f44;
    padding: 8px;
    text-align: center;
    border: 1px solid #dee2e685;
  }

  @media (max-width: 768px) {
    > tr {
      margin-bottom: 10px;
    }

    > thead {
      display: none;
    }
    > tbody, tr, td {
      display: block;
      width: 100%;
    }
    > tbody tr {
      margin-bottom: 10px;
      > td {
        text-align: right;
        padding-left: 50%;
        position: relative;
        &::before {
          content: attr(data-label);
          position: absolute;
          left: 0;
          width: 50%;
          padding-left: 15px;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
        }
      }
    }
  }
`;
