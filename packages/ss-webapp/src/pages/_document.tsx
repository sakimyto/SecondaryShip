import NextDocument, {
  DocumentProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends NextDocument<DocumentProps> {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context);

    return { ...initialProps };
  }
}

export default MyDocument;
