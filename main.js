import { Display } from "./display.js";
import { spriteHandler } from "./spriteHandler.js";
import { controlsHandler } from "./controlsHandler.js";
import { Player } from "./player.js";
import { Camera } from "./camera.js";
import { FPSInterval } from "./configs.js";

let then;
async function initGame() {

    // sprites should load first before anything display related starts
    await spriteHandler.getSprites()
    controlsHandler.init()
    Player.init()
    Camera.init()
    Display.init()

    runGame()
}

function runGame() {
    setTimeout(() => {
        requestAnimationFrame(runGame);

        controlsHandler.runChecks()
        Display.update()

    }, FPSInterval)

}

initGame()

