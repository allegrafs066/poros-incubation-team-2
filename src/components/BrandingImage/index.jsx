import React from 'react';
import style from './BrandingImage.module.css'; // Import CSS module for branding image styling

function BrandingImage() {
  return (
    <div className={style.brandingImage}>
      <img src="image1.jpg" alt="Branding Image" className={style.image} />
    </div>
  );
}

export default BrandingImage;
