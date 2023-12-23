const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieselect = document.getElementById("movie");

populateUI();

let ticketprice = +movieselect.value;

function setMovieData(movieIndex, movieprice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedmovieprica", movieprice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedseats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * 140; // Price per seat is set at 140

  setMovieData(movieselect.selectedIndex, movieselect.value);
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedseats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieselect.selectedIndex = selectedMovieIndex;
  }
}

movieselect.addEventListener("change", (e) => {
  ticketprice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});