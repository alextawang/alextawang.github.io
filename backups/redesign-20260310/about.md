---
layout: page
title: About SHANGHAI TACOM
subtitle: Professional IT Solutions & System Integration Experts
---

<style>
  .about-hero {
    background: linear-gradient(135deg, var(--color-primary-600) 0%, var(--color-primary-900) 100%);
    padding: var(--space-24) 0;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: var(--space-16);
    border-radius: var(--radius-xl);
  }

  .about-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--space-6);
  }

  .about-section {
    margin-bottom: var(--space-16);
  }

  .about-section h3 {
    font-family: 'Outfit', sans-serif !important;
    font-size: var(--text-3xl);
    color: var(--color-slate-900);
    margin-bottom: var(--space-6);
    position: relative;
  }

  .about-section h3::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 4px;
    background: var(--color-primary-500);
    border-radius: var(--radius-full);
  }

  .about-section p {
    font-size: var(--text-lg);
    line-height: 1.8;
    color: var(--color-slate-600) !important;
  }

  .value-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
    margin-top: var(--space-12);
  }

  .value-card {
    background: #FFFFFF;
    border: 1px solid var(--color-slate-100);
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
  }

  .value-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary-200);
  }

  .value-card h4 {
    color: var(--color-primary-500);
    margin-bottom: var(--space-2);
    font-size: var(--text-xl);
  }

  @media (max-width: 600px) {
    .value-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="about-content">
  <div class="about-section reveal">
    <h3>Our Story</h3>
    <p>
      <strong>SHANGHAI TACOM</strong>, with over 20 years of IT service experience and industry insights, is one of the world’s top RDS service providers. We have maintained long-term cooperation with numerous high-tech Fortune 500 companies, delivering excellence through technical innovation and reliable engineering.
    </p>
    <p>
      We accelerate digital transformation for our clients through leading-edge ideas and nimble execution. Our deep roots in telecommunications and system integration allow us to handle the most complex technical challenges.
    </p>
  </div>

  <div class="about-section reveal">
    <h3>What We Do</h3>
    <div class="value-grid">
      <div class="value-card">
        <h4>Technology Implementation</h4>
        <p>From core network infrastructure to endpoint security deployments.</p>
      </div>
      <div class="value-card">
        <h4>System Integration</h4>
        <p>Expertly merging diverse subsystems into a unified, high-performance environment.</p>
      </div>
      <div class="value-card">
        <h4>Consulting Services</h4>
        <p>Strategic IT roadmaps and architectural design for digital growth.</p>
      </div>
      <div class="value-card">
        <h4>Operational Services</h4>
        <p>7×24 managed services and technical support to ensure continuity.</p>
      </div>
    </div>
  </div>

  <div class="about-section reveal">
    <h3>Industry Leadership</h3>
    <p>
      As a long-term partner of China's three major telecom operators and world-renowned equipment manufacturers, TACOM serves as a strategic bridge in the global telecommunications ecosystem. We provide one-stop digital services including consulting, implementation, operations, and testing for global powerhouses in the tech space.
    </p>
  </div>
</div>
