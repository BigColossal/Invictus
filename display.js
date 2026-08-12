import { spriteHandler } from "./spriteHandler.js";
import { mapData } from "./mapData.js";
import { tileSize } from "./configs.js";
import { Player } from "./player.js"
import { Camera } from "./camera.js"

export const Display = {

    canvas: null,
    ctx: null,
    height: null,
    width: null,
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

        const mapWidth = mapData.defense.grasslands.width;
        const mapHeight = mapData.defense.grasslands.height;

        const cameraX = Camera.position[0] - this.width / 2
        const cameraY = Camera.position[1] - this.height / 2

        const startX = Math.floor(cameraX / tileSize);
        const startY = Math.floor(cameraY / tileSize);

        const endX = Math.ceil(
            (cameraX + this.width) / tileSize
        );

        const endY = Math.ceil(
            (cameraY + this.height) / tileSize
        );

        const grassSprite = spriteHandler.sprites.grass;

        for (let x = Math.max(0, startX); x < Math.min(mapWidth, endX + 1); x++) {
            for (let y = Math.max(0, startY); y < Math.min(mapHeight, endY + 1); y++) {
                const screenX = x * tileSize - cameraX;
                const screenY = y * tileSize - cameraY;

                this.ctx.drawImage(
                    grassSprite,
                    screenX,
                    screenY,
                    tileSize,
                    tileSize
                );
                }
        }
    },

    

    drawPlayer() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.width / 2 - Player.size / 2, this.height / 2 - Player.size / 2, Player.size, Player.size);
    },

    update() {
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, 0, this.width, this.height);
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