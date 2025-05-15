// components/AboutUs.js
'use client';
import Image from 'next/image';
import pic1 from '../public/images/about-us1.jpg';
import pic2 from '../public/images/about-us2.jpg';

export default function AboutUs() {
  const blocks = [
    {
      img: pic1,
      title: 'ABOUT CONAIL MEDIA',
      text:
        'CONAIL Media is a full-service advertising agency specializing in CPA/CPS affiliate marketing across diverse niches. Our close collaboration creates indirect marketing channels for your products and services, boosting brand awareness among your target audience.',
    },
    {
      img: pic2,
      title: 'OUR SUCCESS STORY',
      text:
        'As a key member of the affiliate network, CONAIL Media operates high-quality review sites delivering unique, engaged traffic. We partner with a network of affiliates who drive conversions and amplify brand promotion in a seamless cycle of growth.',
    },
  ];

  return (
    <section id="about-us" className="about">
      <div className="about__container">
        {blocks.map(({ img, title, text }, i) => (
          <div key={title} className={`about__row ${i % 2 ? 'rev' : ''}`}>
            <div className="about__img">
              <Image
                src={img}
                alt={title}
                priority
                sizes="(max-width: 768px) 100vw, 480px"
                style={{ width: '100%', height: 'auto', borderRadius: 20 }}
              />
            </div>

            <div className="about__content">
              <h2>{title}</h2>
              <p>{text}</p>
              <a href="#contact" className="btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .about {
          padding: 100px 0;
          background: #ffffff;
        }
        .about__container {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
        }
        .about__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 60px;
          margin-bottom: 140px;
        }
        .about__row.rev {
          direction: rtl;
        }
        .about__row.rev > * {
          direction: ltr;
        }
        .about__content h2 {
          font-size: 1.9rem;
          font-weight: 800;
          color: #ff6f61; /* brand accent */
          margin-bottom: 20px;
        }
        .about__content p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 28px;
        }
        .btn-primary {
          display: inline-block;
          padding: 12px 32px;
          background: #ff6f61;
          color: #fff;
          font-weight: 600;
          border-radius: 26px;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s;
        }
        .btn-primary:hover {
          background: #e65b50;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .about__row,
          .about__row.rev {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 100px;
            direction: ltr;
          }
          .about__content {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
