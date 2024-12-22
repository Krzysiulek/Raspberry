// Funkcja do wczytania pliku JSON
async function loadURLs() {
    const response = await fetch('urls.json');
    return await response.json();
}

// Funkcja do wczytania CSV
async function loadApps(urls) {
    const response = await fetch('config.csv');
    const data = await response.text();
    const rows = data.trim().split('\n').slice(1); // Pomijamy nagłówek

    const localApps = document.getElementById('local-apps');
    const vpnApps = document.getElementById('vpn-apps');

    rows.forEach(row => {
        const [name, port, icon] = row.split(',');

        const localButton = document.createElement('a');
        localButton.href = `${urls.localBaseURL}:${port}`;
        localButton.className = 'button';
        localButton.innerHTML = `<img src="icons/${icon}" alt="${name} Icon" class="icon">${name}`;

        const vpnButton = document.createElement('a');
        vpnButton.href = `${urls.vpnBaseURL}:${port}`;
        vpnButton.className = 'button';
        vpnButton.innerHTML = `<img src="icons/${icon}" alt="${name} Icon" class="icon">${name}`;

        localApps.appendChild(localButton);
        vpnApps.appendChild(vpnButton);
    });
}

// Główna funkcja ładująca konfigurację i aplikacje
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const urls = await loadURLs();
        await loadApps(urls);
    } catch (error) {
        console.error('Błąd podczas ładowania konfiguracji:', error);
    }
});
