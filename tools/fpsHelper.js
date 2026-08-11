import { FPSInterval } from "../configs.js";

export const FPSHandler = {
    countOfFrames: [],
    averageOf: 60,
    pastFrame: null,
    addFrame() {
        let fps;
        const currentFrame = Date.now()

        if (!this.pastFrame) {
            this.pastFrame = currentFrame;
            return;
        }

        // Time between frames in milliseconds.
        const delta = currentFrame - this.pastFrame;

        if (delta == 0) {
            return;
        }

        fps = 1000 / delta;
        this.pastFrame = currentFrame;

        this.countOfFrames.push(fps)
        
        if (this.countOfFrames.length >= this.averageOf) {
            const avg = this.countOfFrames.reduce((sum, digit) => sum + digit, 0) / 60;
            this.countOfFrames = [fps]
            console.log(avg)
        }
    }
}