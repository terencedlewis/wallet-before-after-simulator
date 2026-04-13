export default function BeforeCard({ balance, amount, gasFee }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>Before</h3>
      <p style={styles.row}><strong>Current balance:</strong> ${Number(balance).toFixed(2)}</p>
      <p style={styles.row}><strong>Send amount:</strong> ${Number(amount).toFixed(2)}</p>
      <p style={styles.row}><strong>Estimated gas fee:</strong> ${Number(gasFee).toFixed(2)}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #2e3d63',
    borderRadius: 12,
    padding: 16,
    background: '#0f172a',
    color: '#e2e8f0'
  },
  title: {
    marginTop: 0,
    marginBottom: 12,
    color: '#93c5fd'
  },
  row: {
    margin: '6px 0'
  }
};
