import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="landing-container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1>Welcome to Vijible</h1>
                <p className="hero-subtitle">Your Gateway to Digital Excellence</p>
                <button className="cta-button">Get Started</button>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose Vijible</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3>Fast & Efficient</h3>
                        <p>Lightning-quick performance for your needs</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h3>Secure</h3>
                        <p>Your data is our top priority</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h3>Innovative</h3>
                        <p>Cutting-edge solutions for modern problems</p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stat-item">
                    <h2>1000+</h2>
                    <p>Happy Users</p>
                </div>
                <div className="stat-item">
                    <h2>50+</h2>
                    <p>Features</p>
                </div>
                <div className="stat-item">
                    <h2>24/7</h2>
                    <p>Support</p>
                </div>
            </section>
        </div>
    );
};

export default Home;


// import { useState, useEffect } from 'react'
// import { Navigation } from './components/navigation'
// import { Header } from './components/header'
// import { Features } from './components/features'
// import { About } from './components/about'
// import { Services } from './components/services'
// import { Gallery } from './components/gallery'
// import { Testimonials } from './components/testimonials'
// import { Footer } from './components/footer'
// import JsonData from './data/data.json'
// import SmoothScroll from 'smooth-scroll'

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// })

// const Home = () => {
//   const [landingPageData, setLandingPageData] = useState({})
//   useEffect(() => {
//     setLandingPageData(JsonData)
//   }, [])

//   return (
//     <div>
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />
//       <Gallery />
//       <Testimonials data={landingPageData.Testimonials} />
//       <Footer />
//     </div>
//   )
// }

// export default Home
