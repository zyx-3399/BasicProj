function Food(gameSnake) {
    let flag=true;
    this.row = parseInt(Math.random() * gameSnake.row);
    this.col = parseInt(Math.random() * gameSnake.col);
    while (flag) {
        for (let i = 0; i < gameSnake.snake.body.length; i++) {
            if (this.col == gameSnake.snake.body[i].col && this.row == gameSnake.snake.body[i].row) {
                this.row = parseInt(Math.random() * gameSnake.row);
                this.col = parseInt(Math.random() * gameSnake.col);
                flag=true;
                break;
            }else {
                flag=false;
            }
        }
    }
}

Food.prototype.render=function () {
    game.setHtml(this.row, this.col, '♥');
}