import { Camera } from "./camera.js";
import { Player } from "./player.js";

export const controlsHandler = {
    keys: new Set(),
    keyPressed: false,
    init() {
        window.addEventListener("keydown", (e) => {
            this.keys.add(e.key)
            this.keyPressed = true;
        })
        window.addEventListener("keyup", (e) => {
            this.keys.delete(e.key)
            if (this.keys.size == 0) {
                this.keyPressed = false;
            }
        })
    },

    runChecks(dt) {
        if (this.keyPressed) {
            this.handleKeyPress(dt)
        }
    },

    handleKeyPress(dt) {
        let x = 0, y = 0;

        if (this.keys.has("a")) {
            x -= Player.speed * dt;
            if (this.keys.has("d")) {
                x = 0;
            }
        } else if (this.keys.has("d")) {
            x += Player.speed * dt;
        }

        if (this.keys.has("s")) {
            y += Player.speed * dt;
            if (this.keys.has("w")) {
                y = 0;
            }
        } else if (this.keys.has("w")) {
            y -= Player.speed * dt;
        }
        
        Player.movePosition(x, y)
        Camera.updatePosition()
    }
}