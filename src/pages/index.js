import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import ProductionSection from '../components/ProductionSection';
import FeatureSection from '../components/FeatureSection';
import CodeSection from '../components/CodeSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClientSection from '../components/ClientSection';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <SEO title="Landing page" />
    <TopBar />
    <Header />
    <ProductionSection />
    <FeatureSection />
    <CodeSection />
    <TestimonialsSection />
    <ClientSection />
    <Footer />
  </Layout>
);

export default IndexPage;
