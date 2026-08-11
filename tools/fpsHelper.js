import { FPSInterval } from "../configs.js";

export const FPSGetter = {
    countOfFrames: [],
    averageOf: 60,
    pastFrame: null,
    addFrame() {
        let fps;
        const currentFrame = Date.now()

        if (!this.pastFrame) {
            this.pastFrame = currentFrame;
            return 0;
        }
        const delta = currentFrame - this.pastFrame;

        // Time between frames in milliseconds.

        if (delta == 0) {
            return 0;
        }

        fps = 1000 / delta;
        this.pastFrame = currentFrame;

        this.countOfFrames.push(fps)
        
        if (this.countOfFrames.length >= this.averageOf) {
            const avg = this.countOfFrames.reduce((sum, digit) => sum + digit, 0) / 60;
            this.countOfFrames = [fps]
            console.log(avg)
        }
        return delta / 1000;
    }
}