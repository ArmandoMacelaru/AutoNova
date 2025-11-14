// Sample car data with real images
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
        badge: "REDUS",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=250&fit=crop"
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
        badge: "NOU",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=250&fit=crop"
    },
    {
        id: 3,
        title: "Volkswagen Golf 1.6 TDI",
        seller: "Vânzător individual",
        price: "15.750 €",
        year: "2019",
        km: "78.400 km",
        fuel: "Motorină",
        gearbox: "Manuală",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=250&fit=crop"
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
        badge: "PREMIUM",
        image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=250&fit=crop"
    },
    {
        id: 5,
        title: "Dacia Duster 1.5 dCi",
        seller: "Vânzător individual",
        price: "18.300 €",
        year: "2021",
        km: "45.600 km",
        fuel: "Motorină",
        gearbox: "Manuală",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&h=250&fit=crop"
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
        badge: "NOU",
        image: "https://images.unsplash.com/photo-1563720223485-8f6a4bca015c?w=400&h=250&fit=crop"
    },
    {
        id: 7,
        title: "Ford Focus 1.0 EcoBoost",
        seller: "Vânzător individual",
        price: "16.800 €",
        year: "2020",
        km: "62.100 km",
        fuel: "Benzină",
        gearbox: "Manuală",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop"
    },
    {
        id: 8,
        title: "Toyota RAV4 Hybrid",
        seller: "Dealer auto",
        price: "34.200 €",
        year: "2022",
        km: "15.700 km",
        fuel: "Hibrid",
        gearbox: "Automată",
        badge: "ECOLOGIC",
        image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=400&h=250&fit=crop"
    }
];

// Catalog rendering
function renderCatalog(carsToRender = cars) {
    const catalogEl = document.getElementById('catalog');
    if (!catalogEl) return;
    
    catalogEl.innerHTML = carsToRender.map(car => `
        <div class="car-card">
            ${car.badge ? `<div class="car-badge">${car.badge}</div>` : ''}
            <div class="car-image">
                <img src="${car.image}" alt="${car.title}">
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
            const searchTerm = e.target.value.toLowerCase();
            const filteredCars = cars.filter(car => 
                car.title.toLowerCase().includes(searchTerm) ||
                car.fuel.toLowerCase().includes(searchTerm) ||
                car.seller.toLowerCase().includes(searchTerm)
            );
            renderCatalog(filteredCars);
        });
    }

    // Favorite button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('favorite-btn')) {
            e.target.classList.toggle('active');
        }
    });
});
