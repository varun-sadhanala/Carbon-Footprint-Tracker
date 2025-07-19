export const calculateEmissions = async (data) => {
  const response = await fetch('http://localhost:5000/api/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const getRecommendations = async () => {
  const response = await fetch('http://localhost:5000/api/recommendations');
  const recommendations = await response.json();
  return recommendations;
};
