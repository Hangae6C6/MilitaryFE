import React, { Children } from "react";
import styled from "styled-components";

const PersonType = ({children}) => {
  return (
    <div>
      <PersonP>{children}</PersonP>
    </div>
  );
};

const PersonP = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export default PersonType;
