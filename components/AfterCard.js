export default function AfterCard({ afterBalance }) {
  const isNegative = afterBalance < 0;

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>After</h3>
      <p style={styles.row}>
        <strong>Projected balance:</strong>{' '}
        <span style={{ color: isNegative ? '#fca5a5' : '#86efac' }}>
          ${Number(afterBalance).toFixed(2)}
        </span>
      </p>
      {isNegative && (
        <p style={styles.warning}>
          Warning: This transaction would overdraw your balance.
        </p>
      )}
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
  },
  warning: {
    marginTop: 10,
    color: '#fca5a5'
  }
};
