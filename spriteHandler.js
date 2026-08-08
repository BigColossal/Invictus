import { getSprite } from "./tools/spriteHelpers.js";

export const spriteHandler = {
    sprites: {},

    // load all sprites in parallel, resolving when they're all loaded
    async getSprites() {

        const namesAndPaths = [
            ["grass", "./assets/grassSprite.png", "256"]]
        await Promise.all(
            namesAndPaths.map(async ([name, path, tileSize]) => {
                this.sprites[name] = await getSprite(path, tileSize);
            })
        );

        return

    },

};