import { spriteHandler } from "./spriteHandler.js";
import { mapData } from "./mapData.js";
import { Player } from "./player.js"
import { Camera } from "./camera.js"

export const Display = {

    canvas: null,
    ctx: null,
    height: null,
    width: null,
    tileSize: 128,
    backgroundCanvas: null,

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
        const sx = Math.floor(0 + Camera.position[0]);
        const sy = Math.floor(0 + Camera.position[1]);

        const sw = this.width;
        const sh = this.height;

        this.ctx.drawImage(
            this.backgroundCanvas, 
            sx, sy, sw, sh, 
            0, 0, sw, sh);
    },

    createBackground() {
        const w = this.tileSize * mapData.defense.grasslands.width;
        const h = this.tileSize * mapData.defense.grasslands.height;

        const canvas = new OffscreenCanvas(w, h);
        const ctx = canvas.getContext("2d")

        const grassSprite = spriteHandler.sprites.grass;
        let canvasX, canvasY;
        for (let x = 0; x < mapData.defense.grasslands.width; x++) {
            canvasX = x * this.tileSize
            for (let y = 0; y < mapData.defense.grasslands.height; y++) {
                canvasY = y * this.tileSize;
                ctx.drawImage(grassSprite, canvasX, canvasY);
            }
        }
        return canvas;
    },

    drawPlayer() {
        this.ctx.fillStyle = "white";

        this.ctx.fillRect(this.width / 2, this.height / 2, 50, 50);
    },

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawBackground();
        this.drawPlayer();
    },

    init() {

        this.canvas = document.getElementById("gameDisplay");
        this.ctx = this.canvas.getContext("2d");

        this.backgroundCanvas = this.createBackground()

        this.resizeCanvas();
        window.addEventListener("resize", this.resizeCanvas.bind(this));
        
    },

}