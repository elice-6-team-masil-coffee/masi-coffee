import styled from "styled-components";
import Table from "../../../components/ui/table/Table";

export const StyledTable = styled(Table)`
  height: auto;
  
  background-color: red;

  table-layout:fixed;

  text-align: center;

  & > td {
    text-align: center;
  }
`