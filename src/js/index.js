import * as PIXI from "pixi.js";
import a from "../img/pig.png";

const width = 800;
const height = 600;
const BricksWidth = 48;
const BricksHeight = 16;
const BricksOffset = 32;

console.log(BricksOffset);
let app = new PIXI.Application(width, height, { antialias: true });
document.body.appendChild(app.view);

let graphics = new PIXI.Graphics();

graphics.lineStyle(1, 0xFF00FF, 1);
graphics.beginFill(0xFF00BB, 0.25);
graphics.drawRoundedRect(150, 450, BricksWidth, BricksHeight, 4);
graphics.endFill();

// 根据坐标生成砖块
function Bricks(coordinate) {

}
// 生成玩家滑块
function PlaySlider() {

}

app.stage.addChild(graphics);

