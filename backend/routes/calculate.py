from flask import Blueprint, request, jsonify
from utils.helpers import calculate_emissions

calculate_bp = Blueprint('calculate', __name__)

@calculate_bp.route("/", methods=["POST"])
def calculate_carbon_footprint():
    data = request.json
    emissions = calculate_emissions(data)
    return jsonify({"total_emissions": emissions})
