// Počkáme, kým sa načíta celý HTML dokument
document.addEventListener('DOMContentLoaded', () => {

    // Nájdenie HTML elementov podľa ich ID
    const form = document.getElementById('myForm');
    const messageDiv = document.getElementById('message');

    // Pridanie "poslucháča" na udalosť odoslania formulára
    form.addEventListener('submit', (event) => {
        // 1. Zastavíme predvolenú akciu formulára (ktorá by znovu načítala stránku)
        event.preventDefault();

        // 2. Získame hodnoty z input polí
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const name = nameInput.value;
        const email = emailInput.value;

        // 3. Vytvoríme správu a zobrazíme ju
        // Skontrolujeme, či polia nie sú prázdne (hoci 'required' v HTML to už čiastočne rieši)
        if (name && email) {
            messageDiv.textContent = `Ďakujeme, ${name}! Formulár bol úspešne odoslaný. Odpoveď pošleme na ${email}.`;
            messageDiv.style.color = 'green';

            // 4. Vyčistíme formulár po odoslaní
            form.reset();
        } else {
            messageDiv.textContent = 'Prosím, vyplňte všetky polia.';
            messageDiv.style.color = 'red';
        }
    });

});