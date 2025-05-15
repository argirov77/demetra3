// components/TrafficSources.js
'use client';
import Image from 'next/image';
import affiliateIcon from '../public/images/affiliate.svg';
import googleIcon    from '../public/images/google.png';
import facebookIcon  from '../public/images/facebook.png';
import tiktokIcon    from '../public/images/tik-tok.png';

export default function TrafficSources() {
  const sources = [
    {
      icon: affiliateIcon,
      title: 'Affiliate Network',
      text: `Our core traffic driver — we build and expand partnerships to promote your products and services, boosting brand recognition. When users click sponsored links in our reviews, we earn a commission, aligning our success with yours.`,
    },
    {
      icon: googleIcon,
      title: 'Google Ads',
      text: `Paid search and display remain highly effective. At CONAIL Media, we craft targeted campaigns across Google’s network, delivering high-intent users straight to your offers for maximum ROI.`,
    },
    {
      icon: facebookIcon,
      title: 'Facebook',
      text: `Social advertising on Facebook helps raise awareness and engage new audiences. We design native-style placements and campaigns that resonate with your ideal customers in their feeds.`,
    },
    {
      icon: tiktokIcon,
      title: 'TikTok',
      text: `Leveraging TikTok’s viral power, we sponsor creator posts to reach trendy, engaged audiences. This modern channel drives fresh traffic and elevates your brand’s presence.`,
    },
  ];

  return (
    <section id="traffic" className="traffic">
      <div className="container">
        <h2 className="traffic__heading">Our Traffic Sources</h2>

        <div className="traffic__list">
          {sources.map(({ icon, title, text }) => (
            <div key={title} className="traffic__item">
              <div className="traffic__item-header">
                <Image src={icon} alt={title} width={40} height={40} />
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="traffic__cta">
          <a href="#contact" className="btn-primary">Learn More</a>
        </div>
      </div>

      <style jsx>{`
        .traffic {
          padding: 80px 0;
          position: relative;
          z-index: 1;
        }
        .traffic__heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #ff6f61; /* brand accent */
          margin-bottom: 40px;
        }
        .traffic__list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .traffic__item {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }
        .traffic__item-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .traffic__item-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
        }
        .traffic__item p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }
        .traffic__cta {
          text-align: center;
          margin-top: 40px;
        }
        .btn-primary {
          background: #ff6f61;
        }
        .btn-primary:hover {
          background: #e65b50;
        }

        @media (min-width: 768px) {
          .traffic__list {
            max-width: 800px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
