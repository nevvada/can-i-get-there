import Head from 'next/head';

const Meta = props => (
  <>
    <Head>
      <title>Can I Get There</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Quattrocento+Sans&display=swap"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      body {
        background: #f1f1f1;
        font-family: 'Quattrocento Sans', sans-serif;
        color: rgb(23, 148, 209);
      }
    `}</style>
  </>
);

export default Meta;
