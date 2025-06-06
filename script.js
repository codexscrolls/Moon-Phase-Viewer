function updateMoon(date) {
  const phase = getMoonPhase(date);
  const label = document.getElementById("phase-label");
  const path = document.getElementById("phase-shape");

  label.textContent = phase;

  switch (phase) {
    case "New Moon":
      path.setAttribute("d", "");
      break;
    case "Full Moon":
      path.setAttribute("d", "M50,10 A40,40 0 1,1 49.9,10 Z");
      break;
    case "First Quarter":
    case "Last Quarter":
      path.setAttribute("d", "M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10 Z");
      break;
    default:
      path.setAttribute("d", "M50,10 A40,40 0 1,1 30,90 A40,40 0 1,1 50,10 Z");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("datePicker");
  const today = new Date();
  dateInput.valueAsDate = today;
  updateMoon(today);

  dateInput.addEventListener("change", () => {
    const selectedDate = new Date(dateInput.value);
    updateMoon(selectedDate);
  });
});
