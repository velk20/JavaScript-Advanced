function tickets(arr, criterion) {
  class Ticket {
    constructor(destinationName, price, status) {
      this.destinationName = destinationName;
      this.price = Number(price);
      this.status = status;
    }

    static priceSort(t1, t2) {
      return t1.price - t2.price;
    }

    static destinationSort(t1, t2) {
      return t1.destinationName > t2.destinationName
        ? 1
        : t1.destinationName < t2.destinationName
        ? -1
        : 0;
    }

    static statusSort(t1, t2) {
      return t1.status > t2.status ? 1 : t1.status < t2.status ? -1 : 0;
    }
  }

  let arrTickets = [];
  for (const input of arr) {
    const [destinationName, price, status] = input.split('|');
    arrTickets.push(new Ticket(destinationName, price, status));
  }

  if (criterion === 'price') {
    arrTickets.sort(Ticket.priceSort);
  } else if (criterion === 'status') {
    arrTickets.sort(Ticket.statusSort);
  } else arrTickets.sort(Ticket.destinationSort);

  return arrTickets;
}