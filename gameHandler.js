import { controlsHandler } from "./controlsHandler.js"

export const gameHandler = {
    update(dt) {
        controlsHandler.runChecks(dt)
    }
}