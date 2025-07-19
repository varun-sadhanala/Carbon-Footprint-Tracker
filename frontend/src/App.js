import React, { useState } from 'react';
import ActivityForm from './components/ActivityForm';
import EmissionsResults from './components/EmissionsResults';
import Recommendations from './components/Recommendations';
import { calculateEmissions, getRecommendations } from './api';

function App() {
  const [emissions, setEmissions] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const handleCalculate = async (data) => {
    const result = await calculateEmissions(data);
    setEmissions(result.total_emissions);

    const recs = await getRecommendations();
    setRecommendations(recs);
  };

  return (
    <div className="App">
      <h1 className="text-4xl text-center font-bold mt-8">Carbon Footprint Tracker</h1>
      <div className="container mx-auto mt-6">
        <ActivityForm onCalculate={handleCalculate} />
        {emissions && <EmissionsResults emissions={emissions} />}
        {recommendations.length > 0 && <Recommendations recommendations={recommendations} />}
      </div>
    </div>
  );
}

export default App;
