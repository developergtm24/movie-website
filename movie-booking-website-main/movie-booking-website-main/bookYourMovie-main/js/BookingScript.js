const container = document.querySelector('.container');
const premiumContainer = document.querySelector('.premium-container');
const ticket = document.getElementById('ticketid')
const btn = document.querySelector('#btn');
const seats = document.querySelectorAll('.row .seat:not(.booked');
const premiumseats = document.querySelectorAll('.row .premium-seat:not(.booked');
const total = document.getElementById('total');
const standard = document.querySelector('.standard');
const premium = document.querySelector('.premium');
const standardPrice = document.getElementById('standard-price');

refreshPage();

// To select the premium seats
premiumContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('premium-seat') && !e.target.classList.contains('booked')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
        premiumUserSelectedSeat();
    }
});
// To book the premium seats
premium.addEventListener('click', (e) => {
    if (e.target.classList.contains('premium-seat') && !e.target.classList.contains('booked')) {
        btn.onclick = () => {
            useralreadyselectedPremiumseat();
            userBookedPremiumSeat();
            alertbox();
        }
    }
});

//  To select the standerd seats
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        // console.log(e.target);
        e.target.classList.toggle('selected');
        userSelectedSeat();
        userSelectedTicket();
    }
});

// To book the standard seats
standard.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('booked')) {
        btn.onclick = () => {
            useralreadyselectedseat();
            userBookedSeat();
            alertbox();
        }
    }
});
// refesh ui function
function refreshPage() {
    const bookedSeats = JSON.parse(localStorage.getItem('bookedSeats'));
    const premiumbookedSeats = JSON.parse(localStorage.getItem('premiumbookedSeats'));

    if (bookedSeats !== null && bookedSeats.length > 0) {
        seats.forEach((seats, index) => {
            if (bookedSeats.indexOf(index) > -1) {
                seats.classList.add('booked')
            }
        })
    }
    if (premiumbookedSeats !== null && premiumbookedSeats.length > 0) {
        premiumseats.forEach((premiumseats, index) => {
            if (premiumbookedSeats.indexOf(index) > -1) {
                premiumseats.classList.add('booked')
            }
        })
    }
}
//booked seat index
function userBookedSeat() {
    const bookedSeats = document.querySelectorAll('.row .seat.booked');
    const seatIndex = [...bookedSeats].map(function (seatI) {
        return [...seats].indexOf(seatI);
    });
    localStorage.setItem('bookedSeats', JSON.stringify(seatIndex));
}
//booked premium seat index
function userBookedPremiumSeat() {
    const bookedSeats = document.querySelectorAll('.row .premium-seat.booked');
    const seatIndex = [...bookedSeats].map(function (seat) {
        return [...premiumseats].indexOf(seat);
    });
    localStorage.setItem('premiumbookedSeats', JSON.stringify(seatIndex));
}
//ticket rate for standard
function userSelectedSeat() {
    const selectedseats = document.querySelectorAll('.row .seat.selected');
    const selectedseatcount = selectedseats.length;
    total.innerText = selectedseatcount * 120;
    // console.log(seatIndex);
}
// ticket rate for premium
function premiumUserSelectedSeat() {
    const premiumselectedseats = document.querySelectorAll('.row .premium-seat.selected');
    const premiumselectedseatcount = premiumselectedseats.length;
    // console.log(premiumselectedseatcount);
    total.innerText = premiumselectedseatcount * 150;
}
// ticket booking funtion for premium
function useralreadyselectedPremiumseat() {
    const alreadyselectedPremiumSeats = document.querySelectorAll('.row .premium-seat.selected');
    // console.log(alreadyselectedPremiumSeats);
    alreadyselectedPremiumSeats.forEach(function (div) {
        div.classList.replace("selected", "booked");
        // console.log(div);
    })
}
// ticket booking funtion for standard
function useralreadyselectedseat() {
    const alreadyselectedseats = document.querySelectorAll('.row .seat.selected');
    // console.log(alreadyselectedseats);
    alreadyselectedseats.forEach(function (div) {
        div.classList.replace("selected", "booked");
        // console.log(div);
    })
}
function userSelectedTicket(){
    const bookedSeats = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...bookedSeats].map(function (seatI) {
        return [...seats].indexOf(seatI);
    });
    console.log(seatIndex);

}
    // ticket value change notifier
     ticket.addEventListener('change', ticketcount)
function ticketcount(e) {
    ticketSelectedCount = parseInt(e.target.value);
    console.log(ticketSelectedCount);
}
function alertbox() {
  confirm("click ok to confirm your purchase");
  if (confirm){
    alert('payed Successfully');
    window.location.href='/index.html';
  }
}
