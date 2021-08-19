import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        src="../images/clifford.webp"
        alt="Clifford, a redish-brown pitbull, posing on a sofa"
      />
    </Layout>
  );
}

export default IndexPage;
