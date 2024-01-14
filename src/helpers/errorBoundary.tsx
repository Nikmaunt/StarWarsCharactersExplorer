import  { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                        background: '#f8d7da',
                        color: '#721c24',
                    }}
                >
                    <div
                        style={{
                            maxWidth: '400px',
                            textAlign: 'center',
                            padding: '20px',
                            borderRadius: '5px',
                            backgroundColor: '#f3d9da',
                        }}
                    >
                        <strong>Something went wrong.</strong> Please try refreshing the page or come back later.
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
