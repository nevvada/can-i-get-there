import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Form from '../components/Form';

const Index = props => (
  <Layout>
    <>
      <h1>Welcome to Can I Get There</h1>
      <Form />
      {/* {props} */}
    </>
  </Layout>
);

// Index.getInitialProps = async function() {
//   const res = await fetch(
//     'http://web.mta.info/developers/data/nyct/nyct_ene.xml'
//   );
//   const data = await res.text();
//   console.log(data);
//   return { data };
// };

export default Index;
