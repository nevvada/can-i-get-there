import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
  <>
    <Head>
      <title>Can I Get There</title>
      <script src="../data/retrieveElevatorData" />
    </Head>
    <Navbar />
    {props.children}
  </>
);

export default Layout;
