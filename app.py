from flask import Flask, render_template, request, jsonify
from finder import solver
import numpy as np
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/solve', methods=['POST'])
def solve():
    data = request.json
    coordinates = np.array(data['coordinates'])
    
    start_time = time.time()
    optimized_tour = solver(coordinates)
    stop_time = time.time()
    
    solution_time = stop_time - start_time
    
    result = {
        'tour': optimized_tour,
        'time': solution_time
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)