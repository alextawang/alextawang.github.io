---
layout: page
title: CORE Business
subtitle: Professional IT Solution Provider
---

<style>
  /* ===== CUSTOM PAGE STYLES ===== */
  #main {
    padding-top: 0 !important;
  }
  
  .industries-hero {
    background: linear-gradient(135deg, var(--color-slate-900) 0%, var(--color-slate-800) 100%);
    padding: var(--space-24) 0 var(--space-16);
    text-align: center;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
    margin-bottom: var(--space-16);
  }

  .industries-hero::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(22, 93, 255, 0.1) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    z-index: 1;
    animation: float 15s ease-in-out infinite alternate;
  }

  .industries-hero h1 {
    font-family: 'Outfit', sans-serif !important;
    font-size: var(--text-5xl);
    font-weight: 800;
    margin-bottom: var(--space-4);
    color: #FFFFFF !important;
    position: relative;
    z-index: 2;
  }

  .industries-hero p {
    font-size: var(--text-xl);
    color: var(--color-slate-400) !important;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  .service-section {
    padding: var(--space-16) 0;
  }

  .service-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 var(--space-6);
  }

  .service-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-24);
    align-items: center;
    margin-bottom: var(--space-24);
  }

  .service-item:nth-child(even) {
    direction: rtl;
  }

  .service-item:nth-child(even) .service-content {
    direction: ltr;
  }

  .service-visual {
    background: #FFFFFF;
    border: 1px solid var(--color-slate-100);
    border-radius: var(--radius-xl);
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-normal);
  }

  .service-visual:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-primary-200);
  }

  .service-visual svg {
    width: 120px;
    height: 120px;
    color: var(--color-primary-500);
    transition: transform var(--transition-normal);
  }

  .service-visual:hover svg {
    transform: scale(1.1) rotate(5deg);
  }

  .service-content h2 {
    font-family: 'Outfit', sans-serif !important;
    font-size: var(--text-4xl);
    font-weight: 700;
    color: var(--color-slate-900);
    margin-bottom: var(--space-6);
    position: relative;
  }

  .service-content h2::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--color-primary-500);
    border-radius: var(--radius-full);
  }

  .service-content p {
    font-size: var(--text-lg);
    color: var(--color-slate-600) !important;
    line-height: 1.8;
    margin-bottom: var(--space-8);
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    font-size: var(--text-base);
    color: var(--color-slate-800) !important;
    margin-bottom: var(--space-3) !important;
    font-weight: 500;
  }

  .feature-list li::before {
    content: '✓';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: var(--color-primary-50);
    color: var(--color-primary-500);
    border-radius: var(--radius-full);
    font-size: 0.8rem;
    font-weight: 800;
  }

  @media (max-width: 900px) {
    .service-item {
      grid-template-columns: 1fr;
      gap: var(--space-12);
      margin-bottom: var(--space-16);
    }
    .service-item:nth-child(even) {
      direction: ltr;
    }
    .service-visual {
      height: 300px;
    }
    .industries-hero h1 {
      font-size: var(--text-4xl);
    }
  }

  .cta-section {
    background: var(--color-primary-50);
    padding: var(--space-24) var(--space-6);
    border-radius: var(--radius-xl);
    text-align: center;
    margin: var(--space-16) var(--space-6);
    border: 1px solid var(--color-primary-100);
  }

  .cta-section h3 {
    font-family: 'Outfit', sans-serif !important;
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-bottom: var(--space-4);
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--color-primary-500);
    color: #FFFFFF !important;
    padding: var(--space-4) var(--space-12);
    border-radius: var(--radius-md);
    font-weight: 600;
    text-decoration: none;
    transition: all var(--transition-normal);
  }

  .btn-primary:hover {
    background: var(--color-primary-600);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(22, 93, 255, 0.2);
    text-decoration: none;
  }
</style>

<div class="industries-hero">
  <div class="service-container">
    <h1>CORE Business</h1>
    <p>We provide one-stop IT services for enterprises, covering everything from infrastructure to digital transformation.</p>
  </div>
</div>

<div class="service-section">
  <div class="service-container">
    
    <!-- Service 1: System Integration -->
    <div class="service-item reveal">
      <div class="service-visual">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3M6.75 18h10.5" />
        </svg>
      </div>
      <div class="service-content">
        <h2>System Integration</h2>
        <p>Expertly integrating disparate subsystems into a cohesive, high-performance IT environment. We handle the complexity so you can focus on your business.</p>
        <ul class="feature-list">
          <li>Network engineering & optimization</li>
          <li>Hardware & Software integration</li>
          <li>Enterprise server deployment</li>
          <li>Converged infrastructure solutions</li>
        </ul>
      </div>
    </div>

    <!-- Service 2: Network Security -->
    <div class="service-item reveal">
      <div class="service-visual">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      </div>
      <div class="service-content">
        <h2>Network Security</h2>
        <p>Comprehensive protection for your digital assets. We implement multi-layered security strategies to safeguard your data and ensure business continuity.</p>
        <ul class="feature-list">
          <li>Compliance & regulatory alignment</li>
          <li>Threat detection & response</li>
          <li>Endpoint & perimeter security</li>
          <li>Data encryption & privacy</li>
        </ul>
      </div>
    </div>

    <!-- Service 3: Cloud & Virtualization -->
    <div class="service-item reveal">
      <div class="service-visual">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      </div>
      <div class="service-content">
        <h2>Cloud & Virtualization</h2>
        <p>Flexible, scalable, and cost-effective cloud solutions tailored to your needs. Accelerate your digital transformation with our cloud expertise.</p>
        <ul class="feature-list">
          <li>Hybrid cloud architecture</li>
          <li>Resource virtualization</li>
          <li>Cloud migration services</li>
          <li>Disaster recovery in the cloud</li>
        </ul>
      </div>
    </div>

    <!-- Service 4: IT Services -->
    <div class="service-item reveal">
      <div class="service-visual">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div class="service-content">
        <h2>IT Technical Services</h2>
        <p>End-to-end IT support and outsourcing. We provide the expertise and resources to keep your systems running smoothly, 24/7.</p>
        <ul class="feature-list">
          <li>Managed IT services & outsourcing</li>
          <li>System upgrades & maintenance</li>
          <li>Custom software development</li>
          <li>Operational support & monitoring</li>
        </ul>
      </div>
    </div>

  </div>
</div>

<div class="cta-section service-container">
  <h3>Ready to transform your business?</h3>
  <p style="margin-bottom: 32px; color: #64748B !important;">Get in touch with our experts for a customized solution.</p>
  <a href="/about" class="btn-primary">Contact Us</a>
</div>
