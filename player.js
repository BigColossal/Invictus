import { mapData } from "./mapData.js";
import { tileSize } from "./configs.js";

export const Player = {
    x: null,
    y: null,
    size: tileSize / 2,

    speedLvl: 1,

    init() {
        this.x = (mapData.currentW * tileSize) / 2;
        this.y = (mapData.currentH * tileSize) / 2;
    },

    getHitBox() {
        let left, right, top, bottom;
        left = this.x - this.size / 2;
        right = this.x + this.size / 2;
        top = this.y - this.size / 2;
        bottom = this.y + this.size / 2;
        return [left, right, top, bottom];
    },

    getSpeed() {
        const baseSpeed = 200
        return baseSpeed + ((this.speedLvl - 1) * 5)
    },

    getHealth() {

    },

    getRegen() {

    },

    movePosition(x, y) {
        if (x !== 0 && y !== 0) {
            x /= 1.66;
            y /= 1.66;
        }
        const [leftHitbox, rightHitbox, topHitbox, bottomHitbox] = this.getHitBox()

        if (rightHitbox + x < mapData.currentW * tileSize &&
            leftHitbox + x >= 0
        ) {
            this.x += x;
        }

        if (bottomHitbox + y < mapData.currentH * tileSize &&
            topHitbox + y >= 0
        ) {
            this.y += y;
        }
    }
}