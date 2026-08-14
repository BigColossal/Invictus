export class Enemy {
    constructor(x, y, health, attack, enemyType) {
        this.x = x;
        this.y = y;
        this.health = health;
        this.attack = attack;
        this.enemyType = enemyType;
        this.getEnemyTypeStats()
    }

    getEnemyTypeStats() {
        if (this.enemyType == "normal" ) {
            this.size = 40
        }
    }
}