import React, {createContext, useReducer} from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export default UserProvider;
