const ticketModule = require("./module");

const tickets = ticketModule.tickets;

////////////////////////////////////////////////////////////////////

// Display
tickets.forEach((ticket) => {
  ticket.showInfo();
  console.log("------------------------");
});

////////////////////////////////////////////////////////////////////

// Add ticket
const newTicket = new ticketModule.Ticket(
  4,
  "D4",
  "Flight 4",
  "Tokyo",
  "New York",
  "2024-02-10"
);

tickets.push(newTicket);

console.log("New Ticket Added:");
console.log("------------------------");

newTicket.showInfo();

////////////////////////////////////////////////////////////////////

// Get ticket
let ticketToUpdate = null;

for (let i = 0; i < tickets.length; i++) {
  if (tickets[i].id === 1) {
    ticketToUpdate = tickets[i];
    break;
  }
}

console.log(
  "------------------------ First Ticket Before update ------------------------"
);

ticketToUpdate.showInfo();

////////////////////////////////////////////////////////////////////

// Update ticket
ticketToUpdate.updateInfo({
  seatNum: "E5",
  flightNum: "Flight 1111",
  arrivalAirport: "Saudia Arabia",
});

console.log(
  "------------------------ First Ticket After update ------------------------"
);
ticketToUpdate.showInfo();

////////////////////////////////////////////////////////////////////

console.log("------------------------");
console.log("New Tickets:");
console.log("------------------------");

tickets.forEach((ticket) => {
  ticket.showInfo();
  console.log("------------------------");
});
