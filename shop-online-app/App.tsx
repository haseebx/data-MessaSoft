import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from '@/hooks/useCachedResources';
import Navigation from '@/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'new NativeEventEmitter',
  'Overwriting fontFamily style attribute preprocessor',
]);
LogBox.ignoreAllLogs();

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myOwnColor: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation colorScheme="light" />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
