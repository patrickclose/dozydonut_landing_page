import { smoothImage, enhanceColors, enhanceLines } from './imageProcessing.js';

self.onmessage = function (event) {
    const { imageData, smoothing, vibrance, lineStrength } = event.data;

    let processedData = imageData;

    if (smoothing > 0) {
        processedData = smoothImage(processedData, smoothing);
    }
    if (vibrance !== 50) {
        processedData = enhanceColors(processedData, vibrance);
    }
    if (lineStrength !== 50) {
        processedData = enhanceLines(processedData, lineStrength);
    }

    self.postMessage(processedData);
};
