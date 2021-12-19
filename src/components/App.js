import { ChakraProvider } from '@chakra-ui/provider';
import ThinbusRegistration from './ThinbusRegistration';
import ThinbusLogin from './ThinbusLogin';
import { Route, Navigate, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import { AuthProvider, useAuth } from '../auth/UseAuth';
import Home from './Home';

const AuthenticatedRoute = ({ children }) => {
  let { u } = useAuth()
  let location = useLocation()
  const [user, _] = u
  if(!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={
              <ThinbusLogin/>
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
  );
}

export default App;
