import Layouts from "@/components/Layouts";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </SessionProvider>
    </>
  );
}
