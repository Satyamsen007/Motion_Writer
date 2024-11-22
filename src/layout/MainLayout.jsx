import React from 'react'
import Header from '../components/header/Header.jsx';
import Footer from '../components/footer/Footer.jsx';
function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout