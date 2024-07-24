document.getElementById('tsp-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const numCoord = document.getElementById('num-coord').value;

    // Adjust canvas size based on window size
    resizeCanvas();

    const canvas = document.getElementById('tsp-canvas');
    const width = canvas.width;
    const height = canvas.height;

    // Generate random coordinates within the canvas dimensions
    const coordinates = [];
    for (let i = 0; i < numCoord; i++) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        coordinates.push([x, y]);
    }

    // Send coordinates to the server and get the solution
    const response = await fetch('/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ coordinates })
    });

    if (response.ok) {
        const result = await response.json();
        const { new_coordinates, time } = result;
        
        drawSolution(new_coordinates);
        document.getElementById('solution-time').value = `Time Taken: ${time.toFixed(2)} seconds`;
    } else {
        alert('Error in solving');
    }
});

function drawSolution(coordinates) {
    const canvas = document.getElementById('tsp-canvas');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear the canvas
    ctx.clearRect(0, 0, width, height);

    // Draw tour
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(coordinates[0][0], coordinates[0][1]);
    for (let i = 1; i < coordinates.length; i++) {
        ctx.lineTo(coordinates[i][0], coordinates[i][1]);
    }
    ctx.closePath();
    ctx.stroke();

    // Draw points
    ctx.fillStyle = 'red';
    coordinates.forEach(coord => {
        ctx.beginPath();
        ctx.arc(coord[0], coord[1], 5, 0, 2 * Math.PI);
        ctx.fill();
    });
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function resizeCanvas() {
    const canvas = document.getElementById('tsp-canvas');
    const container = document.getElementById('display');
    canvas.width = container.clientWidth;
    canvas.height = canvas.width;  // Ensure a square canvas
}