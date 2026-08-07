# Game Idea

## General Idea

A base defense game where you must create a base against waves of enemies who are attempting to kill you, and you must defend yourself with walls and champions.

## Scope

Defend yourrself with walls & "Champions" which would attack the enemies. Enemies fight back against the champions, until eventually they're able to reach the center and defeat you. You'd have attacks as well. Game would be about simply surviving against waves of enemies, getting resources from killing enemies, and using those resources in order to buy walls & upgrades for the main characters & champions. Lastly, player can select a build and choose which champion to benefit the most, while also afflecting his own form of attacks

## Main Pillars

### Champions

Champions, being the main defenders, would have basic AI which would just target nearest enemy

When champions die, they take 10 seconds to respawn at the middle with low health, having a 5 second shield

Champions start regenerating after either:

- not having taken damage for 3 consecutive seconds
- Immediately after spawning

Each stat can be upgraded to level 50, where each upgrade quadratically improves health, damage, and regen capabilities, along with speed.

Each champion has 2 attack sets, one for close range, and one for long range.

3 different champions exist, a fire champion, a grass champion, and a water champion

Player can move champions using a click and drag motion, selecting "move champion" icon on the UI, clicking the champion they want to move, and then dragging to the location they want the champion to go to, where it will then re-engage with enemies in that area

Champions also have 2 modes, Defensive mode or aggresive mode. Defensive mode makes champion stay around one certain point, chosen by the player, they may engage with enemies but they never go further out than a certain radius. aggresive mode is the normal AI which always goes towards nearest enemy no matter how far they are.

#### Fire champion

fire champion does most damage, but is the most squishy. Close range attack is heavy, slow rate but big damage. Long range is burst damage, medium cooldown with splash capability and high damage

#### Grass champion

grass champion has most health, and is the slowest of the bunch. Close range Attacks with medium rate attacks and medium damage. Long range is a constant rapid shot, that does single-target damage and medium damage

#### Water champion

water champion is the quickest, and does the least damage of the three. Close range attack with super fast rate attacks, and low damage. Long range is a heavy shot, super high damage but slow cooldown and single target

### Player

a playeable character which the player can move with wasd/arrow keys. Can be attacked by enemies, and you have health, speed, and damage which you can upgrade.

Players would have two attacks, one close range attack, and one long range attack (just like champions). Long range attacks are based on currently selected build

#### Builds

Player can select an elemental build for their character to use, which would change the following aspects:

- The player's health, speed, and damage
- The champion with the build's element, making them stronger stat-wise

Close range attack is a simple katana swing, damages all enemies hit by katana.

- Having fire build lets katana do fire damage
- Having grass build lets katana inflict cuts, which makes enemies get damaged more by a small percentage
- Having water build lets katana slow enemies down

##### Grass Build

- Most health, medium damage, and slow speed
- Increases all stats of grass champion
- Long range attack is a fast-paced attack which shoots compact earth balls, which bounce off walls and enemies, and hit enemies for low damage

##### Water Build

- Medium health, least damage, and fast speed
- Increases all stats of water champion
- long range attack is a water geyser that appears where the player's cursor is located at (Infinite range). Has medium cooldown and medium damage, and anything hit within the radius gets damaged

##### Fire Build

- Least health, most damage, and medium speed
- Increases all stats of fire champion
- Long range attack is a fireball that does immense damage, but has decently large cooldown. Big splash radius as well

### Enemies & Waves

Enemies come in waves, getting more and more stronger as the waves go on, reaching until wave 25.

3 types of enemies exist:

- Light
- Tank
- Speedy

Light have medium everything, tank have high damage high health but slow speed and bigger hitbox, and speedy has low health, high speed, and low damage

Waves last a long time, upwards of 3 minutes. Waves would have a mix of light, tank, and speedy depending on the wave count, and more quantity would come the later the player get into the game

Enemies would spawn always close to where the most outward walls are, if no walls are found, they just spawns 15 tiles away from the center of the map

Waves must be initiated, so after a wave ends, the player has a chance to prepare their defenses once again and upgrade themselves and their champions.

Killing enemies gives Invictinium, which is used for upgrades. Tanks give more invictinium, and the more you progress the more invictinium you'd get from enemies overall.

Enemies target the closest, that being champion or player, and only can attack close range (no long range attack).

Waves are human-designed, and not created by randomness (Enemy spawns are, but wave composition and spawn time isnt)

Enemies cant break walls

Wave design would be built around so that skill will need to be used in gameplay, as enemies can easily overwhelm champions

### Base

The base consists of walls which the player can build in any shape or form as long as it doesnt close off a space entirely (as in it still has an area where enemies can go in through).

walls are meant to block off enemies and let the user create routes for the enemies to go through

## Size & scaling

Walls are placed upon a grid scaled to 3x3 per square, and can be place on edges of the grid squares, and enemies (except for tank, tank being 2x2 space), the player, and champions taking 1x1 space.

Player can zoom in 0.5x and zoom out 2x

Map size will be a 100x100 squares grid

## Game Loop

Defend waves of enemies -> Purchase upgrades and get stronger -> repeat itself

## Technology to Be Used

- HTML5 Canvas
- CSS
- JavaScript
