class particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(
      15,
      60 + Math.floor(Math.random() * 40),
      20 + Math.floor(Math.random() * 80)
    );
  }
  update() {
    if (
      this.x < arr.length - 1 &&
      this.x > 1 &&
      this.y < arr.length - 1 &&
      this.y > 1
    ) {
      if (arr[this.x][this.y + 1] == 0) {
        arr[this.x][this.y + 1] = 1;
        arr[this.x][this.y] = 0;
        this.y++;
      } else if (arr[this.x + 1][this.y + 1] == 0) {
        arr[this.x + 1][this.y + 1] = 1;
        arr[this.x][this.y] = 0;
        this.y++;
        this.x++;
      } else if (arr[this.x - 1][this.y + 1] == 0) {
        arr[this.x - 1][this.y + 1] = 1;
        arr[this.x][this.y] = 0;
        this.y++;
        this.x--;
      }
    }
  }
  draw() {
    stroke(this.color);
    point(this.x, this.y);
  }
}

class stone {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = this.color = color(
      7,
      60 + Math.floor(Math.random() * 40),
      20 + Math.floor(Math.random() * 80)
    );
  }
  update() {}
  draw() {
    stroke(this.color);
    point(this.x, this.y);
  }
}

class water {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dir=1;
    this.color = color(
      50,
      60 + Math.floor(Math.random() * 40),
      20 + Math.floor(Math.random() * 80)
    );
  }
  update() {
    if (
      this.x < arr.length - 1 &&
      this.x > 1 &&
      this.y < arr.length - 1 &&
      this.y > 1
    ) {
      if (arr[this.x][this.y + 1] == 0) {
        arr[this.x][this.y + 1] = 3;
        arr[this.x][this.y] = 0;
        this.y++;
      }else if (arr[this.x][this.y + 2] == 0) {
        arr[this.x][this.y + 2] = 3;
        arr[this.x][this.y] = 0;
        this.y=this.y+2;
      }
      else if ((arr[this.x + 1][this.y] == 0) && (arr[this.x - 1][this.y ] != 0)) {
        arr[this.x + 1][this.y + 1] = 3;
        arr[this.x][this.y] = 0;
        this.x++;
      }
      else if ((arr[this.x - 1][this.y] == 0) && (arr[this.x + 1][this.y ] != 0)) {
        arr[this.x - 1][this.y] = 3;
        arr[this.x][this.y] = 0;
        
        this.x--;
      }else if ((arr[this.x + 1][this.y] == 0)) {
        arr[this.x + 1][this.y + 1] = 3;
        arr[this.x][this.y] = 0;
        this.x++;
      }
      else if ((arr[this.x - 1][this.y] == 0) ) {
        arr[this.x - 1][this.y] = 3;
        arr[this.x][this.y] = 0;
        
        this.x--;
      }
    }
  }
  draw() {
    stroke(this.color);
    point(this.x, this.y);
  }
}
