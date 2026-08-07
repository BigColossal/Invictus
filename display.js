export const Display = {

    canvas: null,
    ctx: null,
    height: null,
    width: null,

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

    drawBackground() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, this.width, this.height);
    },

    init() {

        this.canvas = document.getElementById("gameDisplay");
        this.ctx = this.canvas.getContext("2d");

        this.resizeCanvas();
        window.addEventListener("resize", this.resizeCanvas.bind(this));
        
    },

}