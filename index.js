var pickShape = require('./library/shapes')

function generateSVG(data) {
    const color = data.color;

    const shape = pickShape(data.shape);

    const text = data.text;

    return `
        <svg
            width='200' height='300'
        >
            <${shape}
                cx='200' cy='300'
                r='150' fill=${color}
            >
                <text>${text}</text>    
            </${shape}>
        </svg>
    `
}
