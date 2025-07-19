import React from 'react';

const EmissionsResults = ({ emissions }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Total Emissions: {emissions} kg CO2</h3>
    </div>
  );
};

export default EmissionsResults;
