import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import VenturePhilanthropy from '../../components/venture-philanthropy/VenturePhilanthropy';

export const metadata = {
  title: 'MSI Venture Philanthropy',
  description: 'My School ITALY venture philanthropy — every child\'s potential becomes our purpose.',
  alternates: { canonical: 'https://myschoolitaly.com/msi-venture-philanthropy' },
};

export default function VenturePhilanthropyPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <VenturePhilanthropy />
      </main>
      <Footer />
    </>
  );
}
