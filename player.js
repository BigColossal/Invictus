export const Player = {
    position: [0, 0],
    speed: 500,

    init() {
        
    },

    movePosition(x, y) {
        if (x != 0 && y != 0) {
            x /= 1.66; y /= 1.66
        }
        this.position[0] += x;
        this.position[1] += y;
    }
}