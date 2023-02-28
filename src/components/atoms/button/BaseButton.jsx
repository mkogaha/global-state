import styled from "styled-components";

// 共通styleの定義
export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 9999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
