// --- Image Processing Functions ---

// Smoothing: average each pixel with its 3x3 neighbors.
export function smoothImage(imageData, level) {
    const data = new Uint8ClampedArray(imageData.data);
    const width = imageData.width;
    const height = imageData.height;

    // For now, the "level" parameter is not used to change the kernel size,
    // but you could adjust the algorithm to consider it.
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
        for (let c = 0; c < 3; c++) {
            const idx = (y * width + x) * 4 + c;
            let sum = 0;
            let count = 0;
            for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                const currentIdx = ((y + dy) * width + (x + dx)) * 4 + c;
                sum += imageData.data[currentIdx];
                count++;
            }
            }
            data[idx] = sum / count;
        }
        }
    }
    return new ImageData(data, width, height);
}

/**
 * Enhance Colors using an HSL-based approach.
 * - `vibrance` (default 50) adjusts brightness (values above 50 brighten, below 50 darken).
 * - `saturationAdj` adjusts saturation (in percentage, positive to increase, negative to decrease).
 */
export function enhanceColors(imageData, vibrance = 50, saturationAdj = 0) {
    const data = new Uint8ClampedArray(imageData.data);
    // Compute factors: vibrance 50 means no change.
    const brightnessFactor = 1 + (vibrance - 50) / 100;
    const satFactor = 1 + saturationAdj / 100;

    // Process each pixel.
    for (let i = 0; i < data.length; i += 4) {
        // Normalize RGB values.
        let r = data[i] / 255;
        let g = data[i + 1] / 255;
        let b = data[i + 2] / 255;

        // Convert from RGB to HSL.
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic case
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
                case g:
                h = (b - r) / d + 2;
                break;
                case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
        }

        // Adjust luminance and saturation.
        l = Math.min(1, l * brightnessFactor);
        s = Math.min(1, s * satFactor);

        // Helper function for HSL to RGB conversion.
        function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
        }

        let r2, g2, b2;
        if (s === 0) {
        r2 = g2 = b2 = l; // achromatic
        } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r2 = hue2rgb(p, q, h + 1 / 3);
        g2 = hue2rgb(p, q, h);
        b2 = hue2rgb(p, q, h - 1 / 3);
        }

        data[i] = r2 * 255;
        data[i + 1] = g2 * 255;
        data[i + 2] = b2 * 255;
    }

    return new ImageData(data, imageData.width, imageData.height);
}

export function enhanceLines(imageData, strength) {
    const data = new Uint8ClampedArray(imageData.data);
    const width = imageData.width;
    const height = imageData.height;
    // Double the effect by using a divisor of 25 instead of 50.
    const factor = strength / 25;

    var diff;

    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
        for (let c = 0; c < 3; c++) {
            const idx = (y * width + x) * 4 + c;
            const current = imageData.data[idx];
            const left = imageData.data[((y) * width + (x - 1)) * 4 + c];
            const right = imageData.data[((y) * width + (x + 1)) * 4 + c];
            const up = imageData.data[((y - 1) * width + x) * 4 + c];
            const down = imageData.data[((y + 1) * width + x) * 4 + c];

            diff = Math.max(
            Math.abs(current - left),
            Math.abs(current - right),
            Math.abs(current - up),
            Math.abs(current - down)
            );

            if (diff > 20) {
            data[idx] = Math.max(0, Math.min(255, current - diff * factor));
            }
        }
        }
    }

    return new ImageData(data, width, height);
}

// Helper functions
function generateTexturePattern(w, h, scale) {
    const texture = [];
    for (let y = 0; y < h; y++) {
        texture[y] = [];
        for (let x = 0; x < w; x++) {
            texture[y][x] = Math.random() * 0.3 + 
                          Math.sin(x * scale) * 0.2 + 
                          Math.cos(y * scale) * 0.2;
        }
    }
    return texture;
}

function calculateSurfaceNormal(x, y, w, h, data, bevelSize) {
    // Simplified normal calculation based on alpha channel
    const offsets = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    let dx = 0, dy = 0;
    
    for (const [ox, oy] of offsets) {
        const nx = Math.min(w-1, Math.max(0, x + ox));
        const ny = Math.min(h-1, Math.max(0, y + oy));
        const alpha = data[(ny * w + nx) * 4 + 3];
        dx += ox * alpha;
        dy += oy * alpha;
    }
    
    const dz = Math.sqrt(1 - dx*dx - dy*dy);
    return [dx, dy, dz];
}