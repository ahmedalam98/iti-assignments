class Ticket {
  constructor(
    id,
    seatNum,
    flightNum,
    departureAirport,
    arrivalAirport,
    travelDate
  ) {
    this.id = id;
    this.seatNum = seatNum;
    this.flightNum = flightNum;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.travelDate = travelDate;
  }

  updateInfo(newObj) {
    if (newObj.seatNum) {
      this.seatNum = newObj.seatNum;
    }
    if (newObj.flightNum) {
      this.flightNum = newObj.flightNum;
    }
    if (newObj.departureAirport) {
      this.departureAirport = newObj.departureAirport;
    }
    if (newObj.arrivalAirport) {
      this.arrivalAirport = newObj.arrivalAirport;
    }
    if (newObj.travelDate) {
      this.travelDate = newObj.travelDate;
    }
  }

  showInfo() {
    console.log(`Ticket ID: ${this.id}`);
    console.log(`Seat Number: ${this.seatNum}`);
    console.log(`Flight Number: ${this.flightNum}`);
    console.log(`Departure Airport: ${this.departureAirport}`);
    console.log(`Arrival Airport: ${this.arrivalAirport}`);
    console.log(`Travel Date: ${this.travelDate}`);
  }
}

// Array of tickets
const tickets = [
  new Ticket(1, "A1", "Flight 1", "Cairo", "Alex", "2024-02-4"),
  new Ticket(2, "B2", "Flight 2", "Port Said", "Aswan", "2024-02-6"),
  new Ticket(3, "C3", "Flight 3", "Spain", "Italy", "2024-02-8"),
];

module.exports = {
  Ticket,
  tickets,
};
