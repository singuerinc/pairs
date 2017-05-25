import anime from 'animejs';

class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
    this.pointsToAddOrRemove = 0;
  }

  getName() {
    return this.name;
  }

  getPoints() {
    return this.points;
  }

  addPoints(points = 10) {
    const actual = this.getPoints();
    const future = this.getPoints() + points;
    this.pointsToAddOrRemove = points;
    const obj = { charged: actual };

    anime({
      duration: 2000,
      targets: obj,
      charged: future,
      round: 1,
      easing: 'easeOutExpo',
      update: () => {
        const value = parseInt(obj.charged, 10);
        this.pointsToAddOrRemove = (actual + points) - value;
        this.points = value;
      },
    });
  }

  removePoints(points = 2) {
    const actual = this.getPoints();
    const future = this.getPoints() - points;
    const obj = { charged: actual };

    anime({
      targets: obj,
      charged: future,
      round: 1,
      easing: 'linear',
      update: () => {
        const value = parseInt(obj.charged, 10);
        // this.pointsToAddOrRemove = (actual - points) - value;
        this.points = value;
      },
    });
  }
}

export default Player;
