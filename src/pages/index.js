import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TopBar from '../components/TopBar';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="Landing page" />
    <TopBar />
    <Header />
  </Layout>
);

export default IndexPage;
