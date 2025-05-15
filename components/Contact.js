// components/Contact.js
'use client';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner container">
        <h2 className="contact__title">Contact Us</h2>

        <address className="contact__address">
          <strong>CONAIL SP z.o.o</strong><br />
          Ul. Glogowska 82-22<br />
          WIELKOPOLSKIE 60-741<br />
          POZNAN, Poland<br />
          <a href="mailto:office@conailmedia.com" className="contact__email">
            office@conailmedia.com
          </a>
        </address>

        <a href="mailto:office@conailmedia.com" className="btn-primary">
          Send Email
        </a>
      </div>

      <style jsx>{`
        .contact {
          /* more subdued, calm gradient */
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          color: #1a202c;
          padding: 100px 0 80px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .contact__inner {
          max-width: 700px;
          margin: 0 auto;
        }
        .contact__title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: #1a202c;
        }
        .contact__address {
          font-style: normal;
          line-height: 1.6;
          margin-bottom: 32px;
          color: #334155;
        }
        .contact__address strong {
          display: block;
          font-size: 1.125rem;
          margin-bottom: 8px;
          color: #0f172a;
        }
        .contact__email {
          color: #0f172a;
          text-decoration: underline;
          display: inline-block;
          margin-top: 8px;
        }
        .btn-primary {
          background: #2563eb;          /* calm blue button */
          color: #fff !important;       /* ensure text is visible */
          padding: 0.75rem 2rem;
          border-radius: 24px;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
          text-decoration: none;
          transition:
            background 0.3s ease,
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }
        .btn-primary:hover {
          background: #1e40af;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
        }
        .btn-primary:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.3);
        }
      `}</style>
    </section>
  );
}
