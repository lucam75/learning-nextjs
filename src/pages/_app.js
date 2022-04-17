import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';

import '@styles/globals.css';
import '@styles/Header.scss';
import '@styles/Menu.scss';
import '@styles/MyOrder.scss';
import '@styles/OrderItem.scss';
import '@styles/ProductItem.scss';
import '@styles/ProductList.scss';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
