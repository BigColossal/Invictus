import { Display } from "./display.js";
import { spriteHandler } from "./spriteHandler.js";
import { controlsHandler } from "./controlsHandler.js";
import { Player } from "./player.js";
import { FPScap } from "./tools/fpsHelper.js";
import { FPSInterval } from "./configs.js";

let then;
async function initGame() {

    // sprites should load first before anything display related starts
    await spriteHandler.getSprites()
    controlsHandler.init()
    Display.init()
    Player.init()

    then = Date.now();
    runGame()
}

function runGame() {
    setTimeout(() => {
        requestAnimationFrame(runGame);

        const [capped, newThen] = FPScap(then)
        if (!capped) {
            then = newThen;
            controlsHandler.runChecks()
            Display.update()
        }

    }, FPSInterval)

}

initGame()

