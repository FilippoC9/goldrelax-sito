// Funzione per caricare i dati da un file remoto
async function caricaDati() {
    try {
        // Effettua una richiesta per il file remoto database.data
        const response = await fetch('https://www.goldrelax.it/database.data');

        if (!response.ok) throw new Error('Errore nel caricamento del file');

        // Leggi i dati come testo
        const dati = await response.text();

        // Divide i dati in righe (una per cliente)
        const righe = dati.split('\n');

        // Ottieni il contenitore dell'elenco
        const elencoClienti = document.getElementById('elenco-clienti');

        // Processa ogni riga e crea un elemento per la lista
        righe.forEach((riga) => {
            if (riga.trim()) { // Ignora righe vuote
                const [nome, numero, donazione] = riga.split(','); // Separa i dati
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="nome">${nome.trim()}</span>
                    <span class="numero">${numero.trim()}</span>
                    <span class="totale">€${donazione.trim()}</span>
                `;
                elencoClienti.appendChild(li); // Aggiungi alla lista
            }
        });
    } catch (error) {
        console.error('Errore:', error);
    }
}

// Chiama la funzione per caricare i dati
caricaDati();
