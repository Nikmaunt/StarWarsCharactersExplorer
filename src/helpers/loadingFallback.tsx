const LoadingFallback = () => (
    <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        }}
    >
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '10px' }}>Loading...</div>
            <div
                style={{
                    border: '4px solid rgba(0, 0, 0, 0.1)',
                    borderLeft: '4px solid #000',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    animation: 'spin 1s linear infinite',
                }}
            ></div>
        </div>
    </div>
);

export default LoadingFallback;