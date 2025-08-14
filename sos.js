document.addEventListener('DOMContentLoaded', () => {
    const sosBtn = document.getElementById('sos-btn');
    const sosModal = document.getElementById('sos-modal');
    const closeSosModalBtn = document.getElementById('close-sos-modal');

    if (sosBtn && sosModal && closeSosModalBtn) {
        sosBtn.addEventListener('click', () => {
            sosModal.classList.remove('hidden');
        });

        closeSosModalBtn.addEventListener('click', () => {
            sosModal.classList.add('hidden');
        });

        sosModal.addEventListener('click', (e) => {
            if (e.target === sosModal) {
                sosModal.classList.add('hidden');
            }
        });
    }
});
