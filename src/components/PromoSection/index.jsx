import React, { useState } from 'react';
import style from './PromoSection.module.css'; // Import CSS module for PromoSection styling

function PromoSection() {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromoCode, setAppliedPromoCode] = useState('');

  const handleApplyPromoCode = () => {
    // Apply promo code logic here (e.g., call an API to validate the promo code)
    // For demonstration, we'll just set the applied promo code state
    setAppliedPromoCode(promoCode);
  };

  return (
    <div className={style.promoSection}>
      <div className={style.container}>
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
        {appliedPromoCode && (
          <p className={style.appliedCode}>Promo code "{appliedPromoCode}" applied!</p>
        )}
      </div>
    </div>
  );
}

export default PromoSection;
