from flask import Flask, render_template, request, jsonify
import time
import numpy as np
from finder import solver

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/solve_tsp', methods=['POST'])
def solve_tsp():
    data = request.json
    coordinates = np.array(data['coordinates'])
    
    start_time = time.time()
    optimized_tour = solver(coordinates)
    end_time = time.time()
    
    solution_time = end_time - start_time
    
    result = {
        'tour': optimized_tour,
        'time': solution_time
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)