import * as PIXI from "pixi.js";
import a from "../img/pig.png";
const { Observable, Subject, ReplaySubject, from, of, range, fromEvent } = require('rxjs');
const { map, filter, switchMap, mapTo, scan } = require('rxjs/operators');

const width = 800;
const height = 600;
const BricksWidth = 48;
const BricksHeight = 16;
const BricksOffset = 32;

let app = new PIXI.Application(width, height, { antialias: true, backgroundColor: 0x7c315b });
let game = {};
document.body.appendChild(app.view);

// 不同幕

// 第一幕，游戏开始界面
function startGame(x, y = 0) {
    let style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#00ff6c', '#46ecf6'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowBlur: 4,
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440
    });

    game.richText = new PIXI.Text('按下回车，开始游戏', style);
    game.richText.x = x;
    game.richText.y = 180;
    game.firstScene = 1;

    app.stage.addChild(game.richText);
}
startGame(200);

    // 根据坐标生成砖块
function Bricks(coordinate) {
    let graphics = new PIXI.Graphics();
    graphics.lineStyle(1, 0xFF00FF, 1);
    graphics.beginFill(0xFF00BB, 0.25);
    graphics.drawRoundedRect(150, 450, BricksWidth, BricksHeight, 4);
    graphics.endFill();
    app.stage.addChild(graphics);
}


// 生成玩家滑块
function PlaySlider() {

}

fromEvent(document, "keydown")
.pipe(map(ev => ev.keyCode))
.subscribe(code =>{
    // 在这里监听键盘事件
    console.log(code);
    switch(code) {
        // 空格
        case 32:
            // 第一幕
            if(game.firstScene === 1){
                app.stage.removeChild(game.richText);
                // 渲染游戏界面
                Bricks();
            }
            // 避免重复点击空格键
            game.firstScene += 1;
            
            break;
        // left 方向键
        case 37:
            break;
        // right 方向键
        case 39:
            break;
        // 空格 重置游戏
        case 13:
            break;
        default:
            console.log("小子，你得按其他键")
            break;

    }
});
