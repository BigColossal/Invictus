import { Display } from "./display.js";
import { spriteHandler } from "./spriteHandler.js";

async function initGame() {
    // sprites should load first before anything display related starts
    await spriteHandler.getSprites()
    Display.init()
}

initGame()

