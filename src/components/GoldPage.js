import React from 'react';
import GoldPageTopSection from './goldpagesection/GoldPageTopSection';
import GoldPageTrustedBySection from './goldpagesection/GoldPageTrustedBySection';
import GoldPageFeaturesSection from './goldpagesection/GoldPageFeaturesSection';
import GoldPageFAQsSection from './goldpagesection/GoldPageFAQsSection';

const GoldPage = () => {
  return (
    <div>
      <GoldPageTopSection/>
      <GoldPageTrustedBySection/>
      <GoldPageFeaturesSection/>
      <GoldPageFAQsSection/>
    </div>
  );
}

export default GoldPage;
