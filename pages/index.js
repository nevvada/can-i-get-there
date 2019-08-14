import React, { Component } from 'react';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Form from '../components/Form';

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <>
          <h1>Welcome to Can I Get There</h1>
          <Form />
          {/* {props} */}
        </>
      </Layout>
    );
  }
}

// const Index = props => (
//   <Layout>
//     <>
//       <h1>Welcome to Can I Get There</h1>
//       <Form />
//       {/* {props} */}
//     </>
//   </Layout>
// );

Index.getInitialProps = async function() {
  const res = await fetch(
    'http://web.mta.info/developers/data/nyct/nyct_ene.xml'
  );
  console.log(res);
  return { res };
};
