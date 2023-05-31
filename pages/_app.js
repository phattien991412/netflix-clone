import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "@/styles/globals.css";
import SEO from "@/components/SEO";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <SessionProvider session={session} refetchInterval={5 * 60} refetchOnWindowFocus={true}>
        {/* <Provider store={store}> */}
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <SEO />
            {getLayout(<Component {...pageProps} />)}
          {/* </PersistGate> */}
        {/* </Provider> */}
      </SessionProvider>
    </>
  );
}
