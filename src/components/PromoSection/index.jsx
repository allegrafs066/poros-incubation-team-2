import React, { useState } from 'react';
import style from './PromoSection.module.css'; // Import CSS module for PromoSection styling

function PromoSection() {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromoCode, setAppliedPromoCode] = useState('');
  const [promoCodeError, setPromoCodeError] = useState('');

  const handleApplyPromoCode = () => {
    if (promoCode.toLowerCase() === 'poros') {
      setAppliedPromoCode(promoCode);
      setPromoCodeError('');
    } else {
      setPromoCodeError('Kode promo tidak valid');
      // Apply promo code logic here (e.g., call an API to validate the promo code)
      // For demonstration, we'll just set the applied promo code state
       // Clear any previous error message
    }
  };

  return (
    <div className={style.promoSection}>
      <div className={style.container}>
        <h1>Punya kode promo? Masukkan disini!</h1>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter promo code"
          className={style.input}
        />
        <button onClick={handleApplyPromoCode} className={style.button}>
          Apply
        </button>
        {promoCodeError && <p className={style.error}>{promoCodeError}</p>}
        {appliedPromoCode && (
          <p className={style.appliedCode}>Promo code "{appliedPromoCode}" applied!</p>
        )}
      </div>
    </div>
  );
}

export default PromoSection;
