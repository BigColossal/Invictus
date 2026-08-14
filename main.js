import { Display } from "./display.js";
import { spriteHandler } from "./spriteHandler.js";
import { controlsHandler } from "./controlsHandler.js";
import { Player } from "./player.js";
import { Camera } from "./camera.js";
import { FPSInterval } from "./configs.js";
import { FPSGetter } from "./tools/fpsHelper.js";
import { gameHandler } from "./gameHandler.js";
import { mapData } from "./mapData.js";
import { Enemy } from "./enemy.js";

let dt;
let enemies;
async function initGame() {

    // sprites should load first before anything display related starts
    await spriteHandler.getSprites()

    mapData.init()
    controlsHandler.init()
    Player.init()
    Camera.init()
    Display.init()

    enemies = [new Enemy(100, 100, 100, 5, "normal")]

    requestAnimationFrame(runGame)
}

function runGame() {
        dt = FPSGetter.addFrame()
        gameHandler.update(dt)
        Display.render(enemies)

        requestAnimationFrame(runGame);
    }

initGame()

