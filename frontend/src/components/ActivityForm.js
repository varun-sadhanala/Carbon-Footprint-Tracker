import React, { useState } from 'react';

const ActivityForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    travel: '',
    electricity: '',
    meals: 'veg',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
      <div className="mb-4">
        <label className="block text-gray-700">Travel (km):</label>
        <input
          type="number"
          value={formData.travel}
          onChange={(e) => setFormData({ ...formData, travel: e.target.value })}
          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Electricity (kWh):</label>
        <input
          type="number"
          value={formData.electricity}
          onChange={(e) => setFormData({ ...formData, electricity: e.target.value })}
          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Meals:</label>
        <select
          value={formData.meals}
          onChange={(e) => setFormData({ ...formData, meals: e.target.value })}
          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Calculate</button>
    </form>
  );
};

export default ActivityForm;
