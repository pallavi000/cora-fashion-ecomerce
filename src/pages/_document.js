import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
          crossorigin="anonymous"
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
