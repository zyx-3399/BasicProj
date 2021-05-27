function Game(){
        // alert($)
  this.row=20;
  this.col=12;
  this.init();
  this.block=new Block();
  this.nextBlock=new Block();
  this.map=new Map();
  this.start();
  this.bindEvent();
  this.score=0;
  this.speed=25;
  this.f=0;
}
Game.prototype.init=function (){
    var $table=$("<table id='table1'></table>");
    for (let i = 0; i < this.row; i++) {
        var $tr=$("<tr></tr>")
        for (let j = 0; j < this.col; j++) {
            var $td=$("<td></td>")
            $td.appendTo($tr)
        }
        $tr.appendTo($table)
    }
    var $table2=$("<table id='table2'></table>");
    for (let i = 0; i < 4; i++) {
        var $tr2=$("<tr></tr>")
        for (let j = 0; j < 4; j++) {
            var $td2=$("<td></td>")
            $td2.appendTo($tr2)
        }
        $tr2.appendTo($table2)
    }
    $($table).appendTo("body");
    $($table2).appendTo("body");
}
Game.prototype.setColor=function (row,col,num){
        $("#table1").find("tr").eq(row).children("td").eq(col).addClass("c"+num);
}
Game.prototype.setNextColor=function (){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (this.nextBlock.code[i][j]!=0){
                $("#table2").find("tr").eq(i).children("td").eq(j).addClass("c"+this.nextBlock.code[i][j]);
            }
        }
    }
}
Game.prototype.clear=function (){
    for (let i = 0; i < this.row; i++) {
        for ( let j = 0; j < this.col; j++) {
            $("#table1").find("tr").eq(i).children("td").eq(j).removeClass();
        }
    }
    for (let i = 0; i < 4; i++) {
        for ( let j = 0; j < 4; j++) {
            $("#table2").find("tr").eq(i).children("td").eq(j).removeClass();
        }
    }
}
Game.prototype.bindEvent=function (){
    var self=this;
    document.onkeydown=function (event){
        if (event.keyCode==37){
            self.block.checkLeft();
        }else if(event.keyCode==39){
            self.block.checkRight();
        }else if(event.keyCode==38){
            self.block.checkEnd();
        }else if(event.keyCode==32){
            self.block.checkRote();
        }
    }
}
Game.prototype.start=function (){
        var self=this;
        this.timer=setInterval(function (){
            self.f++;
            document.getElementById("score").innerHTML="score:"+self.score;
            self.clear();
            self.setNextColor();
            self.block.render();
            self.map.render(self);
            self.f%self.speed==0&&self.block.down();
        },20)
}
