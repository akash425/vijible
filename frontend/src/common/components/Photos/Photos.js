import React from 'react';
import './Photos.css'; // Import styles (optional)

const PhotosSection = ({ photoUrls }) => {
  return (
    <div className="photos-section">
      <div className="photos-header">
        <h2>Photos</h2>
      </div>
      <div className="photo-grid">
        {photoUrls.length > 0 ? (
          photoUrls.map((url, index) => (
            <div key={index} className="photo-item">
              <img src={url} alt={`Photo ${index + 1}`} />
            </div>
          ))
        ) : (
          <p className="placeholder">Photo gallery coming soon!</p>
        )}
      </div>    
    </div>
  );
};

export default PhotosSection;
