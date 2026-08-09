import { Player } from "./player.js"

export const Camera = {
    position: null,
    zoom: null,

    init() {
        this.zoom = 1;
        this.updatePosition();
    },

    updatePosition() {
        this.position = Player.position;
    },

    updateZoom() {

    },
}