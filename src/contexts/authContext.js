import { createContext } from 'react';

const AuthContext = createContext({
  user: null,
  logIn: (user, callback) => {},
  logOut: (callback) => {},
})

export { AuthContext }
