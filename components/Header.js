'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="hdr">
        <div className="wrap">
          <h1 className="logo">CONAIL Media</h1>

          <nav className={`nav ${open ? 'is-open' : ''}`}>
            {[
              ['About Us',       '#about-us'],
              ['Our Success',    '#recipe'],
              ['Traffic Sources','#traffic'],
              ['Pricing Methods','#pricing'],
              ['Contacts',       '#contact'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="link">
                {label}
              </Link>
            ))}
          </nav>

          <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <style jsx>{`
        /* --- base header wrapper --- */
        .hdr {
          position: sticky;
          top: 0;
          width: 100%;
          background: #ffffff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
          z-index: 100;
        }
        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        /* --- logo --- */
        .logo {
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ff6f61; /* new brand accent */
          user-select: none;
        }
        /* --- nav links --- */
        .nav {
          display: flex;
          gap: 36px;
        }
        .link {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: #333;             /* darker neutral */
          text-decoration: none;
          padding: 6px 0;
          transition: color 0.25s;
        }
        .link::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0%;
          height: 2px;
          background: #ff6f61;     /* new accent */
          transition: width 0.25s;
        }
        .link:hover {
          color: #ff6f61;
        }
        .link:hover::after {
          width: 100%;
        }

        /* --- burger menu --- */
        .burger {
          display: none;
          background: none;
          border: none;
          font-size: 1.6rem;
          cursor: pointer;
          line-height: 1;
        }

        /* --- mobile --- */
        @media (max-width: 768px) {
          .nav {
            position: absolute;
            top: 68px; left: 0; right: 0;
            background: #fff;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            box-shadow: 0 8px 16px rgba(0,0,0,0.06);
          }
          .nav.is-open { max-height: 260px; }
          .burger { display: block; }
        }
      `}</style>
    </>
  );
}
