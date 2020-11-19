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
    if (seatsLeft > 0) {
      seatsLeft = seatsLeft - this.passengers.length;
      console.log(seatsLeft);
      console.log(this.capacity);
    }
    return seatsLeft;
    //  Returns the number of empty seats, determined by the capacity set when the wagon was created,
    // subtracted by the number of passengers currently on board.
  }
  join(Traveler) {
    this.passengers.push(Traveler.name);
  }
  //Adds the traveler to the wagon if there is space.
  // If the wagon is already at maximum capacity, don't add them.

  shouldQuarantine() {
    if (Traveler.isHealthy == false) {
      return true;
    }
    // return true if one person is unhealthy
  }
  totalFood() {
    // Returns the total amount of food among all passengers in the wagon.
  }
}
