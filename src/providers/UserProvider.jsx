import React, { createContext, useState } from "react";

// 中身は空のオブジェクトを設定
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  // Providerを返却するように設定する
  // どんな値でも囲めるようにchildrenとするのが一般的
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
