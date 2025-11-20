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
                image: "https://ireland.apollo.olxcdn.com/v1/files/5p4k6ec367yn-AUTOVITRO/image;s=644x461"
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
                image: "https://frankfurt.apollo.olxcdn.com/v1/files/e1yctu2lsgfj3-RO/image;s=1000x750"
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
            }
        ];
        localStorage.setItem('autonova_cars', JSON.stringify(defaultCars));
    }
}

// ... restul codului tău original din app.js rămâne la fel


