import { Display } from "./display.js";
import { spriteHandler } from "./spriteHandler.js";
import { controlsHandler } from "./controlsHandler.js";
import { Player } from "./player.js";
import { Camera } from "./camera.js";
import { FPSInterval } from "./configs.js";
import { FPSGetter } from "./tools/fpsHelper.js";
import { gameHandler } from "./gameHandler.js";

let dt;
async function initGame() {

    // sprites should load first before anything display related starts
    await spriteHandler.getSprites()

    controlsHandler.init()
    Player.init()
    Camera.init()
    Display.init()

    requestAnimationFrame(runGame)
}

function runGame() {
        dt = FPSGetter.addFrame()
        gameHandler.update(dt)
        Display.update()

        requestAnimationFrame(runGame);
    }

initGame()

