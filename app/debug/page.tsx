export default function Debug() {
  const apiKey = process.env.NEXT_PUBLIC_BREVO_API_KEY
  const allNextPublicKeys = Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC'))

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#B8935C' }}>Environment Variable Debug</h1>
      
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#D4AF77' }}>Brevo API Key Status:</h2>
        <p>
          <strong>Value:</strong> {apiKey ? `${apiKey.substring(0, 20)}...` : 'NOT FOUND'}
        </p>
        <p>
          <strong>Status:</strong> {apiKey ? '✅ FOUND' : '❌ NOT FOUND'}
        </p>
        <p>
          <strong>Length:</strong> {apiKey ? apiKey.length : 0} characters
        </p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#D4AF77' }}>All NEXT_PUBLIC Environment Variables:</h2>
        <pre style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
          {JSON.stringify(allNextPublicKeys, null, 2)}
        </pre>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#D4AF77' }}>All Environment Variable Values:</h2>
        <pre style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
          {JSON.stringify(
            Object.fromEntries(
              allNextPublicKeys.map(key => [key, process.env[key]])
            ),
            null,
            2
          )}
        </pre>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#1a5555', borderRadius: '5px' }}>
        <h3 style={{ margin: 0 }}>📝 Instructions:</h3>
        <ol style={{ marginTop: '10px' }}>
          <li>If API key shows "NOT FOUND", restart your dev server</li>
          <li>Make sure .env.local exists in your project root</li>
          <li>Check that the variable name is exactly: NEXT_PUBLIC_BREVO_API_KEY</li>
          <li>Environment variables are only loaded on server start</li>
        </ol>
      </div>

      <div style={{ marginTop: '20px' }}>
        <a href="/" style={{ color: '#B8935C', textDecoration: 'underline' }}>← Back to Home</a>
      </div>
    </div>
  )
}

