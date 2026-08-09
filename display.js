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

    drawPlayer() {
        this.ctx.fillStyle = "white";
        const [x, y] = Player.position;

        this.ctx.fillRect(x, y, 50, 50);
    },

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.drawBackground();
        this.drawPlayer();
    },

    init() {

        this.canvas = document.getElementById("gameDisplay");
        this.ctx = this.canvas.getContext("2d");

        this.resizeCanvas();
        window.addEventListener("resize", this.resizeCanvas.bind(this));
        
    },

}