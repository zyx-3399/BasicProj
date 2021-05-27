function Block(){
   var allType=["s","t","o","l","j","i","z"];
   this.type=allType[parseInt(Math.random()*allType.length)];
    this.allDir=arry[this.type].length;
    this.dir=parseInt(Math.random()*this.allDir);
    this.code=arry[this.type][this.dir];
    this.row=0;
    this.col=4;

}
Block.prototype.render=function (){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if(this.code[i][j]!==0){
                game.setColor(i+this.row,j+this.col,this.code[i][j]);
            }
        }
    }
}
Block.prototype.check=function (row,col) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (this.code[i][j] !== 0 && game.map.mapCode[i + row][j + col] !== 0) {
                return false;
            }
        }
    }
    return true;
}
Block.prototype.down=function (){
    if (this.check(this.row+1,this.col)){
        this.row++;
    }else {
        game.block=game.nextBlock;
        game.nextBlock=new Block();
        this.renderMap();
        game.map.checkRemove();
        game.map.checkOver();
    }
}
Block.prototype.renderMap=function (){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (this.code[i][j]!==0){
                game.map.mapCode[this.row+i][this.col+j]=this.code[i][j]
            }
        }
    }
}
Block.prototype.checkLeft=function (){
    if (this.check(this.row,this.col-1)){
        this.col--;
    }
}
Block.prototype.checkRight=function (){
    if (this.check(this.row,this.col+1)){
        this.col++;
    }
}
Block.prototype.checkEnd=function (){
    while (this.check(this.row+1,this.col)){
        this.row++;
    }
}
Block.prototype.checkRote=function (){
    let oldDir=this.dir;
    this.dir++;
    if (this.dir>this.allDir-1){
        this.dir=0;
    }
    this.code=arry[this.type][this.dir];
    if (!this.check(this.row,this.col)){
        this.dir=oldDir;
        this.code=arry[this.type][this.dir];
    }//下次渲染之前已经打回了
}
