import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import ProductionSection from '../components/ProductionSection';
import FeatureSection from '../components/FeatureSection';

const IndexPage = () => (
  <Layout>
    <SEO title="Landing page" />
    <TopBar />
    <Header />
    <ProductionSection />
    <FeatureSection />
  </Layout>
);

export default IndexPage;
