import React from 'react';
import LookingForPage from './LookingForPage';
import SampleDealList from './SampleDealList';

export default function FoodSample() {
  return (
    <div className="mainContainer">
      <div className="showcase">
        <div className="row">
          <LookingForPage />
          <SampleDealList />
        </div>
      </div>
    </div>
  );
}
