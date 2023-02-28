import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

// styled(共通style)で定義された共通styleを使うことができる
// 中に記述すると共通styleに上書きになる
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
