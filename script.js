function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const Time = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = Time;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();

