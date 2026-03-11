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
    background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
    padding: 100px 0 80px;
    text-align: center;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
    margin-bottom: 60px;
  }

  .industries-hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: radial-gradient(circle at 20% 30%, rgba(22, 93, 255, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(22, 93, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .industries-hero h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
    color: #FFFFFF !important;
  }

  .industries-hero p {
    font-size: 1.25rem;
    color: #94A3B8 !important;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .service-section {
    padding: 60px 0;
  }

  .service-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .service-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    margin-bottom: 100px;
  }

  .service-item:nth-child(even) {
    direction: rtl;
  }

  .service-item:nth-child(even) .service-content {
    direction: ltr;
  }

  .service-visual {
    background: #F8FAFC;
    border-radius: 24px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
    transition: transform 0.3s ease;
  }

  .service-visual:hover {
    transform: translateY(-8px);
  }

  .service-visual svg {
    width: 120px;
    height: 120px;
    color: #165DFF;
  }

  .service-content h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 24px;
    position: relative;
  }

  .service-content h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #165DFF;
    border-radius: 2px;
  }

  .service-content p {
    font-size: 1.1rem;
    color: #475569 !important;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .feature-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
    color: #334155 !important;
    margin-bottom: 12px !important;
    font-weight: 500;
  }

  .feature-list li::before {
    content: '✓';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #EEF4FF;
    color: #165DFF;
    border-radius: 50%;
    font-size: 0.8rem;
    font-weight: 800;
  }

  @media (max-width: 900px) {
    .service-item {
      grid-template-columns: 1fr;
      gap: 40px;
      margin-bottom: 60px;
    }
    .service-item:nth-child(even) {
      direction: ltr;
    }
    .service-visual {
      height: 300px;
    }
    .industries-hero h1 {
      font-size: 2.25rem;
    }
  }

  .cta-section {
    background: #F1F5F9;
    padding: 80px 24px;
    border-radius: 32px;
    text-align: center;
    margin: 60px 24px;
  }

  .cta-section h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .btn-primary {
    display: inline-block;
    background: #165DFF;
    color: #FFFFFF !important;
    padding: 16px 40px;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-primary:hover {
    background: #1250D6;
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
    <div class="service-item">
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
    <div class="service-item">
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
    <div class="service-item">
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
    <div class="service-item">
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
