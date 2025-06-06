// Simple approximation using Conway's method
function getMoonPhase(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JS months are 0-based
  const day = date.getDate();

  let r = year % 100;
  r %= 19;
  if (r > 9) r -= 19;
  r = ((r * 11) % 30) + month + day;
  if (month < 3) r += 2;
  const phase = r % 30;

  // Convert phase to label
  if (phase < 1) return "New Moon";
  if (phase < 7) return "Waxing Crescent";
  if (phase < 9) return "First Quarter";
  if (phase < 15) return "Waxing Gibbous";
  if (phase < 17) return "Full Moon";
  if (phase < 23) return "Waning Gibbous";
  if (phase < 25) return "Last Quarter";
  return "Waning Crescent";
}
