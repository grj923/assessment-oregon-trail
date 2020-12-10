class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
    // Increases the traveler's food by 2.
  }
  eat() {
    if (this.food > 0) {
      this.food--;
    } else {
      this.isHealthy = false;
    }

    // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat,
    // the traveler is no longer healthy (set isHealthy to false).
  }
}
class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    let seatsLeft = this.capacity;
    seatsLeft = seatsLeft - this.passengers.length;
    return seatsLeft;
    //  Returns the number of empty seats, determined by the capacity set when the wagon was created,
    // subtracted by the number of passengers currently on board.
  }
  join(traveler) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(traveler);
    }
    //Adds the traveler to the wagon if there is space.
    // If the wagon is already at maximum capacity, don't add them.
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      console.log(this.passengers[i]);
      if (this.passengers[i].isHealthy == false) {
        return true;
      }

      // return true if one person is unhealthy
    }
    return false;
  }
  totalFood() {
    let foodInWagon = 0;
    for (let i = 0; i < this.passengers.length; i++) {
      foodInWagon = foodInWagon + this.passengers[i].food;
      console.log(foodInWagon);
    }

    return foodInWagon;
  } // Returns the total amount of food among all passengers in the wagon.
}
