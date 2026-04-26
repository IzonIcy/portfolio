'use client'

export default function Photos() {
  const photos = [
    { src: '/IMG_1466.jpg', alt: 'Photo 1' },
    { src: '/IMG_1474.jpg', alt: 'Photo 2' },
    { src: '/IMG_1478.jpg', alt: 'Photo 3' },
    { src: '/IMG_1594.jpg', alt: 'Photo 4' },
  ]

  return (
    <div style={{
      minHeight: '100dvh',
      paddingLeft: 'clamp(40px, 6vw, 80px)',
      paddingRight: 'clamp(40px, 6vw, 80px)',
      paddingTop: 'clamp(60px, 10vh, 120px)',
      paddingBottom: 'clamp(40px, 5vh, 80px)',
    }}>
      <a href="/" style={{ textDecoration: 'underline', color: 'inherit', marginBottom: '2rem', display: 'block', cursor: 'pointer' }}>
        ← Back
      </a>
      
      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 48px)',
        fontFamily: 'var(--font-garamond), serif',
        marginBottom: '2rem',
        fontWeight: 400,
      }}>
        Photos
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '100%' }}>
        {photos.map((photo, i) => (
          <div key={i} style={{ overflow: 'hidden', borderRadius: '4px' }}>
            <img 
              src={photo.src} 
              alt={photo.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
