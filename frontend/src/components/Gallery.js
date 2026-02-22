import React, { useState } from 'react';

const RYAN_EXPRESSIONS = [
  './images/ryan_avatar/ryan_final_draft_neutral.png',
  './images/ryan_avatar/ryan_final_draft_happy.png',
  './images/ryan_avatar/ryan_final_draft_surprised_dot_eyes.png',
  './images/ryan_avatar/ryan_final_draft_sad.png',
  './images/ryan_avatar/ryan_final_draft_agitated_without_vein.png',
  './images/ryan_avatar/ryan_final_draft_agitated_with_vein.png',
  './images/ryan_avatar/ryan_final_draft_anger_without_vein.png',
  './images/ryan_avatar/ryan_final_draft_anger_with_vein.png'
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [expressionIndex, setExpressionIndex] = useState(0);

  const handleImageClick = () => {
    if (selectedImg.id === 4 && !isFlipping) {
        setIsFlipping(true);
        
        // Total animation time is 0.15s * 3 = 450ms
        // We change the face right before the final flip finishes
        setTimeout(() => {
        setExpressionIndex((prevIndex) => (prevIndex + 1) % RYAN_EXPRESSIONS.length);
        }, 350); 

        // Stop the flipping state after 450ms
        setTimeout(() => {
        setIsFlipping(false);
        }, 450);
    }
  };

    // This ensures the X button and clicking the overlay reset him
    const handleClose = () => {
    setSelectedImg(null);
    setExpressionIndex(0); // Back to neutral
    };
  
  const photos = [
    { id: 1, src: './images/gallery/imageGalleryImage1.jpg', alt: 'Con going hobby', desc: 'copslay matsuri in 2025' },
    { id: 2, src: './images/gallery/imageGalleryImage2.jpg', alt: 'Safety by design seminar', desc: 'A learning experience in safety design principles.' },
    { 
        id: 3, 
        src: 'pXuzY7HKASc', 
        thumbnail: './images/gallery/thumbnailVideoGallery3.png', // Static image for the grid
        type: 'youtube', 
        alt: 'thingspeak demo video', 
        desc: 'DH11 temperature and humidity sensor demo with thingspeak.' 
    },
    { 
      id: 4, 
      // FIXED PATH HERE
      src: './images/ryan_avatar/ryan_final_draft_neutral.png', 
      alt: 'A draft character design for a subject', 
      desc: 'A drawn draft of a character design from scratch.',
      isDrawing: true 
    },
  ];

  return (
    <section id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
        {photos.map(photo => (
            <div key={photo.id} className="card gallery-item" onClick={() => setSelectedImg(photo)}>
                <div className="image-container">
                {/* If it's a video, use the thumbnail. If not, use the photo src */}
                <img 
                    src={photo.thumbnail || photo.src} 
                    alt={photo.alt} 
                />
                
                {/* Optional: Add a Play Icon overlay so users know it's a video */}
                {photo.type === 'video' && (
                    <div className="video-badge">▶</div>
                )}
                </div>
                <div className="card-footer">
                <p className="view-details-text">VIEW_DETAILS</p>
                </div>
            </div>
            ))}
      </div>

      {selectedImg && (
        /* 1. Clicking the dark background now calls handleClose */
        <div className="modal-overlay" onClick={handleClose}>
            
            <div className="window-box" onClick={(e) => e.stopPropagation()}>
            <div className="window-header">
                <span className="window-title">DRAWING_INSPECTOR.EXE</span>
                
                {/* 2. The X button now calls handleClose */}
                <button className="window-close" onClick={handleClose}>X</button>
            </div>
            
           <div className="window-body">
                {selectedImg.type === 'youtube' ? (
                    <div className="video-responsive" style={{ width: '100%', aspectRatio: '16/9' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${selectedImg.src}?autoplay=1&rel=0&modestbranding=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: '4px solid #000' }}
                    ></iframe>
                    </div>
                ) : (
                    <img 
                    src={selectedImg.id === 4 ? RYAN_EXPRESSIONS[expressionIndex] : selectedImg.src} 
                    alt={selectedImg.alt} 
                    className={`modal-img ${isFlipping ? 'pixel-flip' : ''}`}
                    onClick={handleImageClick}
                    />
                )}

                <div className="modal-text">
                    <h3>{selectedImg.alt}</h3>
                    <p>{selectedImg.desc}</p>
                </div>
                </div>
            </div>
        </div>
        )}
    </section>
  );
};

export default Gallery;