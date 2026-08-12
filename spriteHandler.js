import { tileSize } from "./configs.js";
import { getSprite } from "./tools/spriteHelpers.js";

export const spriteHandler = {
    sprites: {},

    // load all sprites in parallel, resolving when they're all loaded
    async getSprites() {

        const namesAndPaths = [
            ["grass", "./assets/grassSprite.png", tileSize]]
        await Promise.all(
            namesAndPaths.map(async ([name, path, spriteSize]) => {
                this.sprites[name] = await getSprite(path, spriteSize);
            })
        );

        return

    },

};