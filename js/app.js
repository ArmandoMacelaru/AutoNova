// Mașini în catalog
const cars = [
  { name: "Tesla Model S", image: "images/tesla-model-s.jpg", year: 2022, type: "electric" },
  { name: "Toyota Mirai", image: "images/toyota-mirai.jpg", year: 2021, type: "hydrogen" },
  { name: "Renault Zoe", image: "images/renault-zoe.jpg", year: 2022, type: "electric" },
  { name: "BMW i4", image: "images/bmw-i4.jpg", year: 2022, type: "electric" },
  { name: "Hyundai Nexo", image: "images/hyundai-nexo.jpg", year: 2022, type: "hydrogen" },
  { name: "Audi e-tron", image: "images/audi-e-tron.jpg", year: 2022, type: "electric" },
  { name: "Mercedes EQC", image: "images/mercedes-eqc.jpg", year: 2022, type: "electric" },
  { name: "Honda Clarity", image: "images/honda-clarity.jpg", year: 2021, type: "hydrogen" }
];

const catalogEl = document.getElementById("catalog");
const paginationEl = document.getElementById("pagination");
const searchEl = document.getElementById("search");

let currentPage = 1;
const itemsPerPage = 4;

// Afișare catalog
function renderCatalog() {
  if (!catalogEl) return;

  let filteredCars = cars;
  if (searchEl && searchEl.value) {
    const q = searchEl.value.toLowerCase();
    filteredCars = cars.filter(car => car.name.toLowerCase().includes(q));
  }

  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filteredCars.slice(start, start + itemsPerPage);

  catalogEl.innerHTML = paginated.map(car => `
    <div class="car-card">
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>An: ${car.year}</p>
      <p>Tip: ${car.type}</p>
    </div>
  `).join("");

  renderPagination(filteredCars.length);
}

function renderPagination(totalItems) {
  if (!paginationEl) return;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  paginationEl.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.style.background = "#9b5de5";
    btn.addEventListener("click", () => {
      currentPage = i;
      renderCatalog();
    });
    paginationEl.appendChild(btn);
  }
}

if (catalogEl) {
  renderCatalog();
}

if (searchEl) {
  searchEl.addEventListener("input", () => {
    currentPage = 1;
    renderCatalog();
  });
}
