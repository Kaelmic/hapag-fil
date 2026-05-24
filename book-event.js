  const guestsInput = document.getElementById("guests");
  const guestCount = document.getElementById("guestCount");
  const baseEstimate = document.getElementById("baseEstimate");
  const serviceEstimate = document.getElementById("serviceEstimate");
  const totalEstimate = document.getElementById("totalEstimate");

  guestsInput.addEventListener("input", () => {
    const guests = Number(guestsInput.value) || 0;

    let pricePerGuest = 0;

    if (guests >= 10 && guests <= 20) {
      pricePerGuest = 25;
    } else if (guests >= 21 && guests <= 40) {
      pricePerGuest = 23;
    } else if (guests >= 41) {
      pricePerGuest = 20;
    }

    const base = guests * pricePerGuest;
    const service = base * 0.10;
    const total = base + service;

    guestCount.textContent = `${guests} guests`;
    baseEstimate.textContent = `€${base.toFixed(2)}`;
    serviceEstimate.textContent = `€${service.toFixed(2)}`;
    totalEstimate.textContent = `€${total.toFixed(2)}`;
  });