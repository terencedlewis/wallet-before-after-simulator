export default function ExplanationBox({ explanation }) {
  return (
    <div style={styles.box}>
      <h4 style={styles.title}>Explanation</h4>
      <pre style={styles.text}>{explanation}</pre>
    </div>
  );
}

const styles = {
  box: {
    marginTop: 16,
    border: '1px solid #334155',
    borderRadius: 12,
    padding: 16,
    background: '#020617',
    color: '#cbd5e1'
  },
  title: {
    marginTop: 0,
    marginBottom: 10,
    color: '#bfdbfe'
  },
  text: {
    margin: 0,
    whiteSpace: 'pre-wrap',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
  }
};
