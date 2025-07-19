def calculate_emissions(data):
    travel_factor = 0.21  # kg CO2 per km
    electricity_factor = 0.5  # kg CO2 per kWh
    meal_factors = {"veg": 2.0, "non-veg": 7.0}

    travel_emissions = data.get('travel', 0) * travel_factor
    electricity_emissions = data.get('electricity', 0) * electricity_factor
    meal_emissions = meal_factors.get(data.get('meals', ''), 0)

    return travel_emissions + electricity_emissions + meal_emissions
