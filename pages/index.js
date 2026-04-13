import { useMemo, useState } from 'react';
import BeforeCard from '../components/BeforeCard';
import AfterCard from '../components/AfterCard';
import ExplanationBox from '../components/ExplanationBox';

export default function HomePage() {
  const [balance, setBalance] = useState(1500);
  const [amount, setAmount] = useState(250);
  const [gasFee, setGasFee] = useState(12.5);

  const afterBalance = useMemo(() => {
    return Number(balance) - Number(amount) - Number(gasFee);
  }, [balance, amount, gasFee]);

  const explanation = useMemo(() => {
    return `
You are sending $${Number(amount).toFixed(2)}.
A processing fee of $${Number(gasFee).toFixed(2)} is required.
After this transaction, your balance will be $${Number(afterBalance).toFixed(2)}.
`;
  }, [amount, gasFee, afterBalance]);

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Web3 Before / After Simulator</h1>
        <p style={styles.subheading}>Simulate wallet outcomes before you confirm a transaction.</p>

        <section style={styles.formGrid}>
          <label style={styles.label}>
            Balance ($)
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value || 0))}
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Amount to send ($)
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value || 0))}
              style={styles.input}
            />
          </label>

          <label style={styles.label}>
            Gas fee ($)
            <input
              type="number"
              value={gasFee}
              onChange={(e) => setGasFee(Number(e.target.value || 0))}
              style={styles.input}
            />
          </label>
        </section>

        <section style={styles.cards}>
          <BeforeCard balance={balance} amount={amount} gasFee={gasFee} />
          <AfterCard afterBalance={afterBalance} />
        </section>

        <ExplanationBox explanation={explanation} />
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    margin: 0,
    padding: 24,
    background: 'radial-gradient(circle at top, #111827, #030712)',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, sans-serif'
  },
  container: {
    maxWidth: 900,
    margin: '0 auto',
    background: '#111827',
    border: '1px solid #334155',
    borderRadius: 16,
    padding: 24,
    color: '#e5e7eb',
    boxShadow: '0 18px 40px rgba(0, 0, 0, 0.35)'
  },
  heading: {
    marginTop: 0,
    marginBottom: 8,
    color: '#dbeafe'
  },
  subheading: {
    marginTop: 0,
    marginBottom: 18,
    color: '#93c5fd'
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 12,
    marginBottom: 18
  },
  label: {
    display: 'grid',
    gap: 6,
    fontSize: 14
  },
  input: {
    borderRadius: 10,
    border: '1px solid #475569',
    background: '#0f172a',
    color: '#e5e7eb',
    padding: '10px 12px'
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 12
  }
};
