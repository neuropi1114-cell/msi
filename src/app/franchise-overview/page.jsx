import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import FranchiseHero from '../../components/franchise/FranchiseHero';
import FranchiseForm from '../../components/franchise/FranchiseForm';
import LowInvestment from '../../components/franchise/LowInvestment';
import ImageCarousel from '../../components/franchise/ImageCarousel';
import ReasonsToChoose from '../../components/franchise/ReasonsToChoose';
import FunFacts from '../../components/franchise/FunFacts';
import SupportSystem from '../../components/franchise/SupportSystem';

export const metadata = {
  title: 'Franchise Overview – My School ITALY',
  description: 'Own your own preschool with My School ITALY. Low investment, high returns franchise opportunity in neuroscience-based early childhood education.',
  alternates: { canonical: 'https://myschoolitaly.com/franchise-overview' },
};

export default function FranchiseOverviewPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <FranchiseHero />
        <FranchiseForm />
        <LowInvestment />
        <ImageCarousel />
        <ReasonsToChoose />
        <FunFacts />
        <SupportSystem />
        <FranchiseForm variant="bottom" />
      </main>
      <Footer />
    </>
  );
}
