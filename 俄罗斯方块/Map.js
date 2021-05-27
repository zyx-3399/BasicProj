function Map(){
    this.mapCode=[
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,7,0,0,0,0],
        [0,0,0,0,0,0,0,6,0,0,0,0],
        [0,3,0,4,0,0,0,6,0,0,0,0],
        [1,2,0,5,3,1,0,6,5,5,0,0],
        [9,9,9,9,9,9,9,9,9,9,9,9]
    ]
}
Map.prototype.render=function (gameMap){
    for (let i = 0; i < gameMap.row; i++) {
        for (let j = 0; j < gameMap.col; j++) {
            game.setColor(i,j,this.mapCode[i][j])
        }
    }
}
Map.prototype.checkRemove=function (){
    for (let i = 0; i < 20; i++) {
        if (this.mapCode[i].indexOf(0)==-1){
            this.mapCode.splice(i,1)
            this.mapCode.unshift([0,0,0,0,0,0,0,0,0,0,0,0])
            game.score++;
            if (game.speed>10){
                game.speed--;
            }else {
                game.speed=10;
            }
        }
    }
}
Map.prototype.checkOver=function (){
    for (let i = 0; i < 12; i++) {
        if (this.mapCode[0][i]!=0){
            clearInterval(game.timer);
            alert("游戏结束，您的最终得分为："+game.score)
        }
    }

}