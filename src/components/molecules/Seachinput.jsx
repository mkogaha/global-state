import React, { memo } from "react";
import styed from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  console.log("SearchInput");
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styed.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styed.div`
  padding-left: 8px;
`;
