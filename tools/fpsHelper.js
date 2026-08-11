import { FPSInterval } from "../configs.js";

export const currentFPSHandler = {
    countOfFrames: [],
    averageOf: 60,
    addFrame(fps) {
        if (this.countOfFrames.length < this.averageOf) {
            this.countOfFrames.push(fps)
        } else if (this.countOfFrames.length == this.averageOf) {
            const avg = this.countOfFrames.reduce((sum, digit) => sum + digit, 0) / 60;
            this.countOfFrames = [fps]
            console.log(avg)
        }
    }
}