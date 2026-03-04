import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Shubham Sharma - Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0f172a, #1d4ed8)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                }}
            >
                <div style={{ fontSize: 90, fontWeight: 'bold', marginBottom: 20, letterSpacing: '-0.02em' }}>
                    Shubham Sharma
                </div>
                <div style={{ fontSize: 42, opacity: 0.85, textAlign: 'center', maxWidth: '85%' }}>
                    Software Engineer | Mobile & Backend Developer
                </div>
            </div>
        ),
        { ...size }
    )
}
