export const mapData = {
    currentW: null,
    currentH: null,
    init() {
        this.currentW = this.defense.grasslands.width;
        this.currentH = this.defense.grasslands.height;
    },
    defense: {
        grasslands: {
            width: 15,
            height: 15,
        }
    }
}