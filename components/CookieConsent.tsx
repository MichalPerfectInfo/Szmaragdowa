import { useState, useEffect } from "react";

const COOKIE_KEY = "cookie_consent";

interface ConsentData {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

function loadGTM(gtmId: string): void {
  if (!gtmId || (window as any)._gtmLoaded) return;
  (window as any)._gtmLoaded = true;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);

  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.cssText = "display:none;visibility:hidden";
  noscript.appendChild(iframe);
  document.body.prepend(noscript);
}

interface ToggleProps {
  checked: boolean;
  onChange: (val: boolean) => void;
}

function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        position: "relative",
        width: 40,
        height: 22,
        background: checked ? "#4ade80" : "#333",
        border: "none",
        borderRadius: 20,
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 0.2s",
        padding: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: checked ? 21 : 3,
          width: 16,
          height: 16,
          background: checked ? "#fff" : "#666",
          borderRadius: "50%",
          transition: "all 0.2s",
        }}
      />
    </button>
  );
}

interface CategoryRowProps {
  label: string;
  description: string;
  locked?: boolean;
  checked?: boolean;
  onChange?: (val: boolean) => void;
}

function CategoryRow({ label, description, locked, checked, onChange }: CategoryRowProps) {
  return (
    <div style={styles.categoryRow}>
      <div>
        <p style={styles.categoryLabel}>{label}</p>
        <p style={styles.categoryDesc}>{description}</p>
      </div>
      {locked ? (
        <div style={styles.lockedBadge}>Zawsze aktywne</div>
      ) : (
        <Toggle checked={checked!} onChange={onChange!} />
      )}
    </div>
  );
}

interface CookieConsentProps {
  gtmId: string;
}

export default function CookieConsent({ gtmId }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    } else {
      const consent: ConsentData = JSON.parse(saved);
      if (consent.analytics || consent.marketing) {
        loadGTM(gtmId);
      }
    }
  }, [gtmId]);

  function saveConsent(consentAnalytics: boolean, consentMarketing: boolean): void {
    const data: ConsentData = {
      necessary: true,
      analytics: consentAnalytics,
      marketing: consentMarketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
    if (consentAnalytics || consentMarketing) {
      loadGTM(gtmId);
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal} role="dialog" aria-modal={true} aria-labelledby="cookie-title">
        <div style={styles.header}>
          <p style={styles.label}>Prywatność</p>
          <h2 id="cookie-title" style={styles.title}>
            Ta strona używa plików cookies
          </h2>
          <p style={styles.description}>
            Używamy cookies, aby poprawić Twoje doświadczenia, analizować ruch i
            prowadzić działania marketingowe. Możesz wybrać, które kategorie akceptujesz.
          </p>
        </div>

        {detailsOpen && (
          <div style={styles.detailsPanel}>
            <CategoryRow
              label="Niezbędne"
              description="Wymagane do działania strony"
              locked
            />
            <CategoryRow
              label="Analityczne"
              description="Pomagają nam rozumieć ruch na stronie"
              checked={analytics}
              onChange={setAnalytics}
            />
            <CategoryRow
              label="Marketingowe"
              description="Używane do personalizacji reklam"
              checked={marketing}
              onChange={setMarketing}
            />
          </div>
        )}

        <div style={styles.footer}>
          <div style={styles.buttonRow}>
            <button style={styles.btnSecondary} onClick={() => saveConsent(false, false)}>
              Odrzuć wszystko
            </button>
            <button
              style={{ ...styles.btnSecondary, ...(detailsOpen ? styles.btnSecondaryActive : {}) }}
              onClick={() => setDetailsOpen((v) => !v)}
            >
              Ustawienia
            </button>
            <button style={styles.btnPrimary} onClick={() => saveConsent(true, true)}>
              Akceptuj wszystko
            </button>
          </div>

          {detailsOpen && (
            <button style={styles.btnSave} onClick={() => saveConsent(analytics, marketing)}>
              Zapisz moje ustawienia
            </button>
          )}

          <p style={styles.links}>
            <a href="/polityka-prywatnosci" style={styles.link}>Polityka prywatności</a>
            {" · "}
            <a href="/polityka-cookies" style={styles.link}>Polityka cookies</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "1rem",
  },
  modal: {
    background: "#1a1a1a",
    border: "0.5px solid #333",
    borderRadius: 12,
    maxWidth: 520,
    width: "100%",
    fontFamily: "system-ui, sans-serif",
    overflow: "hidden",
  },
  header: {
    padding: "1.5rem 1.5rem 1rem",
  },
  label: {
    fontSize: 11,
    color: "#888",
    margin: "0 0 6px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: "#f0f0f0",
    margin: "0 0 12px",
  },
  description: {
    fontSize: 14,
    color: "#aaa",
    lineHeight: 1.6,
    margin: 0,
  },
  detailsPanel: {
    borderTop: "0.5px solid #2a2a2a",
    padding: "0 1.5rem",
  },
  categoryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
    borderBottom: "0.5px solid #2a2a2a",
    gap: 12,
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: "#f0f0f0",
    margin: "0 0 3px",
  },
  categoryDesc: {
    fontSize: 12,
    color: "#777",
    margin: 0,
  },
  lockedBadge: {
    background: "#2a2a2a",
    border: "0.5px solid #3a3a3a",
    borderRadius: 20,
    padding: "3px 10px",
    fontSize: 12,
    color: "#777",
    flexShrink: 0,
  },
  footer: {
    padding: "1rem 1.5rem 1.5rem",
    borderTop: "0.5px solid #2a2a2a",
  },
  buttonRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 8,
  },
  btnSecondary: {
    padding: "10px 8px",
    background: "transparent",
    border: "0.5px solid #444",
    borderRadius: 8,
    color: "#aaa",
    fontSize: 13,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  btnSecondaryActive: {
    borderColor: "#888",
    color: "#f0f0f0",
  },
  btnPrimary: {
    padding: "10px 8px",
    background: "#f0f0f0",
    border: "0.5px solid #f0f0f0",
    borderRadius: 8,
    color: "#111",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  btnSave: {
    width: "100%",
    marginTop: 8,
    padding: "10px",
    background: "#2a2a2a",
    border: "0.5px solid #444",
    borderRadius: 8,
    color: "#f0f0f0",
    fontSize: 13,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  links: {
    fontSize: 11,
    color: "#555",
    textAlign: "center",
    margin: "10px 0 0",
  },
  link: {
    color: "#666",
    textDecoration: "underline",
  },
};