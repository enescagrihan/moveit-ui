import 'react-native-gesture-handler';

import { theme } from './src/infrastructure/theme';
import { ThemeProvider } from 'styled-components/native';
import { CarrierTopTabNavigator, CustomerTopTabNavigator, WelcomeStackNavigator } from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { LoginContext } from './src/LoginContext';
import { NavigationContainer } from '@react-navigation/native';
import { JobContext } from './src/JobContext';
import OfferDetail from './src/screens/carrier/OfferDetail';

function App(): JSX.Element {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCarrier, setIsCarrier] = useState(false);
  const [encodedInfo, setEncodedInfo] = useState("");
  const [user, setUser] = useState({});
  const [selectedJob, setSelectedJob] = useState();

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <OfferDetail /> */}
          <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, isCarrier, setIsCarrier, encodedInfo, setEncodedInfo, user, setUser }}>
            {
              isLoggedIn ?
                isCarrier ?
                  <JobContext.Provider value={{selectedJob, setSelectedJob}}>
                    <CarrierTopTabNavigator />
                  </JobContext.Provider>
                  : <CustomerTopTabNavigator />
                : <WelcomeStackNavigator />
            }
          </LoginContext.Provider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;