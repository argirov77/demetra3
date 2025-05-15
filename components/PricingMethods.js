'use client';
export default function PricingMethods() {
  const methods = [
    {
      title: 'CPS (Cost-Per-Sale)',
      text: `With Cost-Per-Sale, you only pay when a sale is completed. At CONAIL Media, we use this model to maximize ROI and expand your reach to the most relevant audiences.`,
    },
    {
      title: 'RevShare',
      text: `RevShare gives you a percentage of revenue earned. This partnership-driven approach aligns our goals with yours, ensuring mutual growth and success.`,
    },
    {
      title: 'CPL (Cost-Per-Lead)',
      text: `With Cost-Per-Lead, you pay only for qualified leads delivered. CONAIL Media focuses on high-quality prospects to keep your pipeline full and conversion rates high.`,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="pricing__heading">Pricing Methods</h2>
        <div className="pricing__grid">
          {methods.map(({ title, text }) => (
            <div key={title} className="pricing__card">
              <h3 className="pricing__title">{title}</h3>
              <p className="pricing__text">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pricing {
          padding: 80px 0;
          background: #ffffff;
          position: relative;
          z-index: 1;
        }
        .pricing__heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 800;
          color: #ff6f61; /* brand accent */
          margin-bottom: 40px;
        }
        .pricing__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }
        .pricing__card {
          background: #f9f9f9;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }
        .pricing__title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 12px;
        }
        .pricing__text {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 640px) {
          .pricing__heading {
            font-size: 1.75rem;
          }
          .pricing__grid {
            gap: 16px;
          }
          .pricing__card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
