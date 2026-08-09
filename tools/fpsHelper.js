import { FPSInterval } from "../configs.js";

export function FPScap(then) {
    let now = Date.now();
    let elapsed = now - then;
    if (elapsed > FPSInterval) {
        return [false, now - (elapsed % FPSInterval)]
    } else {
        return [true, null];
    }
}