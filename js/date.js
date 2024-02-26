const dateEl = document.getElementById("date");

function getTodayDate() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const todayDate = `${day}.${month}.${year}`;
  dateEl.innerHTML = `Order date: ${todayDate}`;

  return todayDate;
}

getTodayDate();
