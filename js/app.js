// Sample car data
const cars = [
    {
        id: 1,
        title: "Skoda Karoq 1.5 TSI",
        seller: "Vânzător individual",
        price: "20.999 €",
        year: "2020",
        km: "56.300 km",
        fuel: "Benzină",
        gearbox: "Automată",
        badge: "REDUS"
    },
    {
        id: 2,
        title: "BMW Seria 3 320d",
        seller: "Dealer auto",
        price: "28.500 €",
        year: "2021",
        km: "42.100 km",
        fuel: "Motorină",
        gearbox: "Automată",
        badge: "NOU"
    },
    {
        id: 3,
        title: "Volkswagen Golf 1.6 TDI",
        seller: "Vânzător individual",
        price: "15.750 €",
        year: "2019",
        km: "78.400 km",
        fuel: "Motorină",
        gearbox: "Manuală"
    },
    {
        id: 4,
        title: "Audi A4 2.0 TDI",
        seller: "Dealer auto",
        price: "32.999 €",
        year: "2022",
        km: "23.200 km",
        fuel: "Motorină",
        gearbox: "Automată",
        badge: "PREMIUM"
    },
    {
        id: 5,
        title: "Dacia Duster 1.5 dCi",
        seller: "Vânzător individual",
        price: "18.300 €",
        year: "2021",
        km: "45.600 km",
        fuel: "Motorină",
        gearbox: "Manuală"
    },
    {
        id: 6,
        title: "Mercedes C-Class C200",
        seller: "Dealer auto",
        price: "35.800 €",
        year: "2022",
        km: "18.900 km",
        fuel: "Benzină",
        gearbox: "Automată",
        badge: "NOU"
    }
];

// Catalog rendering
function renderCatalog() {
    const catalogEl = document.getElementById('catalog');
    if (!catalogEl) return;
    
    catalogEl.innerHTML = cars.map(car => `
        <div class="car-card">
            ${car.badge ? `<div class="car-badge">${car.badge}</div>` : ''}
            <div class="car-image">
                [FOTOGRAFIE MAȘINĂ]
                <button class="favorite-btn">♥</button>
            </div>
            <div class="car-content">
                <h3 class="car-title">${car.title}</h3>
                <p class="car-seller">${car.seller}</p>
                <div class="car-details">
                    <div class="car-detail">📅 ${car.year}</div>
                    <div class="car-detail">🛣️ ${car.km}</div>
                    <div class="car-detail">⛽ ${car.fuel}</div>
                    <div class="car-detail">⚙️ ${car.gearbox}</div>
                </div>
                <div class="car-price">${car.price}</div>
                <div class="car-actions">
                    <a href="detalii.html?id=${car.id}" class="details-btn">Vezi detalii</a>
                    <button class="compare-btn">Compară</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderCatalog();
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            console.log('Searching for:', e.target.value);
            // Implement search logic here
        });
    }
});
