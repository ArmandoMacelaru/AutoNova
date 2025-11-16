// === SISTEM LOGIN CU LOCALSTORAGE ===

// Initializează utilizatorii dacă nu există
function initializeUsers() {
    if (!localStorage.getItem('autonova_users')) {
        const defaultUsers = [
            { 
                id: 1, 
                username: 'admin', 
                email: 'admin@autonova.ro', 
                password: 'parola123' 
            }
        ];
        localStorage.setItem('autonova_users', JSON.stringify(defaultUsers));
    }
}

// Initializează mașinile
function initializeCars() {
    if (!localStorage.getItem('autonova_cars')) {
        const defaultCars = [
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
            }
        ];
        localStorage.setItem('autonova_cars', JSON.stringify(defaultCars));
    }
}

// Login utilizator
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('autonova_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('autonova_current_user', JSON.stringify(user));
        return true;
    }
    return false;
}

// Înregistrare utilizator nou
function registerUser(username, email, password) {
    const users = JSON.parse(localStorage.getItem('autonova_users') || '[]');
    
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Emailul este deja înregistrat!" };
    }
    
    const newUser = {
        id: Date.now(),
        username,
        email,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('autonova_users', JSON.stringify(users));
    return { success: true, message: "Cont creat cu succes!" };
}

// Verifică dacă utilizatorul este logat
function isLoggedIn() {
    return localStorage.getItem('autonova_current_user') !== null;
}

// Obține utilizatorul curent
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('autonova_current_user'));
}

// Deloghează utilizatorul
function logoutUser() {
    localStorage.removeItem('autonova_current_user');
}

// === CATALOG MAȘINI ===
function renderCatalog() {
    const catalogEl = document.getElementById('catalog');
    if (!catalogEl) return;
    
    const cars = JSON.parse(localStorage.getItem('autonova_cars') || '[]');
    
    catalogEl.innerHTML = cars.map(car => `
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

// === INITIALIZARE ===
document.addEventListener('DOMContentLoaded', function() {
    initializeUsers();
    initializeCars();
    renderCatalog();
    updateNavigation();
    
    // Căutare
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cars = JSON.parse(localStorage.getItem('autonova_cars') || '[]');
            const filteredCars = cars.filter(car => 
                car.title.toLowerCase().includes(searchTerm) ||
                car.fuel.toLowerCase().includes(searchTerm)
            );
            
            const catalogEl = document.getElementById('catalog');
            catalogEl.innerHTML = filteredCars.map(car => `
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
        });
    }

    // Butoane favorite
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('favorite-btn')) {
            e.target.classList.toggle('active');
        }
    });
});

// Actualizează navigația în funcție de login
function updateNavigation() {
    const loginLink = document.getElementById('loginLink');
    if (loginLink && isLoggedIn()) {
        const user = getCurrentUser();
        loginLink.innerHTML = `Bună, ${user.username} | <a href="#" onclick="logout()">Logout</a>`;
    }
}

// Funcție logout
function logout() {
    logoutUser();
    window.location.href = 'index.html';
}
