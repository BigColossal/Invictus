import { mapData } from "./mapData.js";
import { tileSize } from "./configs.js";

export const Player = {
    x: null,
    y: null,
    size: tileSize / 2,

    speedLvl: 100,
    healthLvl: 1,
    regenLvl: 1,
    attackLvl: 1,

    maxHealth: null,
    currentHealth: null,
    speed: null,
    regenRate: null,
    katanaDamage: null,

    init() {
        this.x = (mapData.currentW * tileSize) / 2;
        this.y = (mapData.currentH * tileSize) / 2;

        this.maxHealth = this.getHealth()
        this.currentHealth = this.maxHealth;
        
        this.speed = this.getSpeed();
        
        this.regenRate = this.getRegen();

        this.katanaDamage = this.getKatanaDamage();
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
        const baseSpeed = 200;
        return baseSpeed + ((this.speedLvl - 1) * 10);
    },

    getHealth() {
        const baseHealth = 100;
        return baseHealth + ((this.healthLvl - 1) * 15);
    },

    getRegen() {
        const baseRegenRate = 1.6;
        return baseRegenRate + ((this.regenLvl - 1) * 10);
    },

    getKatanaDamage() {
        const baseKatanaDamage = 10;
        return baseKatanaDamage + ((this.attackLvl - 1) * 2.5)
    },

    movePosition(x, y) {
        if (x !== 0 && y !== 0) {
            x /= 1.66;
            y /= 1.66;
        }
        const [leftHitbox, rightHitbox, topHitbox, bottomHitbox] = this.getHitBox()

        if (rightHitbox + x <= mapData.currentW * tileSize &&
            leftHitbox + x >= 0
        ) {
            this.x += x;
        } else if (leftHitbox + x <= 0) {
            this.x = this.size / 2;
        } else {
            this.x = mapData.currentW * tileSize - this.size / 2
        }

        if (bottomHitbox + y <= mapData.currentH * tileSize &&
            topHitbox + y >= 0
        ) {
            this.y += y;
        } else if (topHitbox + y <= 0) {
            this.y = this.size / 2;
        } else {
            this.y = mapData.currentH * tileSize - this.size / 2;
        }
    }
}