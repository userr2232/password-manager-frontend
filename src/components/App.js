import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/provider';
import ThinbusRegistration from './ThinbusRegistration';
import ThinbusLogin from './ThinbusLogin';
import { Route, Navigate, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from '../auth/UseAuth';
import Home from './Home';
import { PasswordContext } from '../contexts/password';

const AuthenticatedRoute = ({ children }) => {
  let { user } = useAuth()
  let location = useLocation()
  if(!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

const App = () => {
  const [password, setPassword] = useState("");

  const updatePassword = (new_password) => {
    setPassword(new_password);
  }

  return (
    <PasswordContext.Provider value={{password, updatePassword}}>
      <BrowserRouter>
        <ChakraProvider>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={
                <ThinbusLogin />
              }/>
              <Route path="/register" element={
                <ThinbusRegistration />
              }/>
              <Route path="/" element={
                <AuthenticatedRoute>
                  <Home />
                </AuthenticatedRoute>
              }/>
            </Routes>
          </AuthProvider>
        </ChakraProvider>
      </BrowserRouter>
    </PasswordContext.Provider>
  );
}

export default App;
