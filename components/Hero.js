'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner container">
        <div className="hero-img">
          <Image
            src="/images/hero-bg.jpg"
            alt="CONAIL Media Team"
            width={800}
            height={500}
            priority
            style={{
              borderRadius: '40px 5px 40px 5px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          />
        </div>
        <div className="hero-copy">
          <p className="pretitle">
            READY TO ATTRACT MORE CUSTOMERS TO YOUR BUSINESS?
          </p>
          <h1 className="title">
            CONAIL MEDIA<br />
            IS YOUR AFFILIATE SOLUTION
          </h1>
          <p className="desc">
            Have you tried countless ad strategies but seen no real impact?  
            CONAIL Media delivers top-tier affiliate marketing and traffic solutions  
            to boost your brand recognition and engagement.
          </p>
          <a href="#about-us" className="btn-primary">
            Learn About CONAIL
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          padding: 80px 0;
        }
        .hero-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }
        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
        }
        .hero-copy .pretitle {
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 15px;
        }
        .hero-copy .title {
          font-size: 48px;
          line-height: 1.2;
          margin-bottom: 25px;
          color: #ff6f61; /* brand accent */
        }
        .hero-copy .desc {
          font-size: 16px;
          margin-bottom: 30px;
        }
      `}</style>
    </section>
  );
}
