import { spriteHandler } from "./spriteHandler.js";
import { mapData } from "./mapData.js";

export const Display = {

    canvas: null,
    ctx: null,
    height: null,
    width: null,
    tileSize: 256,

    /**
     * Resizes the canvas to match the browser viewport
     */
    resizeCanvas() {

        this.height = window.innerHeight;
        this.width = window.innerWidth;

        this.canvas.height = this.height;
        this.canvas.width = this.width;

        // Redraw background as resizing wipes the canvas clean
        this.drawBackground();
    },

    /**
     * Draw a 100x100 grass background
     */
    drawBackground() {
        const grassSprite = spriteHandler.sprites.grass;
        let canvasX, canvasY;
        for (let x = 0; x < mapData.defense.grasslands.width; x++) {
            canvasX = x * this.tileSize
            for (let y = 0; y < mapData.defense.grasslands.height; y++) {
                canvasY = y * this.tileSize;
                this.ctx.drawImage(grassSprite, canvasX, canvasY)
            }
        }
    },

    init() {

        this.canvas = document.getElementById("gameDisplay");
        this.ctx = this.canvas.getContext("2d");

        this.resizeCanvas();
        window.addEventListener("resize", this.resizeCanvas.bind(this));
        
    },

}