import React from 'react';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Recommendations:</h3>
      <ul className="list-disc ml-4">
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
