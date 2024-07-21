# Tour Finder

## Overview

This web application solves the 2D Euclidean Traveling Salesman Problem for a set of randomly generated coordinates. The app is built using Flask and Python for the backend and JavaScript, HTML and CSS for the frontend.

## Features

- Generate random coordinates within a canvas
- Solve it using the Double Tree and 2-Opt algorithm
- Visualize the TSP solution on the canvas
- Display the time taken to compute the solution

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Himanshu-0502/Tour-Finder.git
   cd Tour-Finder
   ```

2. Install the required packages:
   ```sh
   pip install -r requirements.txt
   ```

3. Run the Flask app:
   ```sh
   python app.py
   ```

## Usage

1. Open the Web Application.
2. Enter the Number of Coordinates.
3. Click "Solve TSP" to generate random coordinates and solve the TSP.

## Acknowledgements

This project was inspired by various online resources and tutorials on solving the Traveling Salesman Problem. Special thanks to the open-source community for providing valuable tools and libraries.