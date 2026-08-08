
/**
 * Grabs sprite from asset, waits for it to finish loading, and returns the sprite scaled as an offscreenCanvas
 * 
 * @param {*} srcPath Where the sprite image is located
 * @param {*} tileSize desired size for sprite to get scaled to
 */
export async function getSprite(srcPath, tileSize) {

    const sprite = new Image();
    sprite.src = srcPath;

    // Waits until image finishes loading before scaling it
    await new Promise((resolve, reject) => {
        sprite.onload = resolve;
        sprite.onerror = reject;
    });

    return scaleSprite(sprite, tileSize)
};

/**
 * Used for scaling sprites and saving them
 * 
 * @param {*} sprite loaded image of the sprite
 * @param {*} tileSize desired size for sprite to get scaled to
 * @returns OffscreenCanvas
 */
function scaleSprite(sprite, tileSize) {
    const canvas = new OffscreenCanvas(tileSize, tileSize);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(sprite, 0, 0, tileSize, tileSize);

    return canvas;
}