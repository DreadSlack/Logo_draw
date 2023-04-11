function pickShape(shape) {
    if (shape === 'circle') {
        return `circle`
    } else if (shape === 'triangle') {
        return `triangle`
    } else {
        return 'square'
    }
}

export default pickShape;
