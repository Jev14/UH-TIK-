
document.addEventListener('DOMContentLoaded', () => {
    console.log("========================================");
    console.log("📊 SYSTEM: Web Report Siswa Berhasil Dijalankan.");
    console.log("🎮 STATUS: Modul Project Roguelike & Cosmos Aktif.");
    console.log("========================================");
});

const tombolProject = document.querySelectorAll('.btn-action');
tombolProject.forEach((tombol, index) => {
    tombol.addEventListener('click', () => {
        console.log(`🔗 Navigasi: Pengguna beraliv ke halaman Project 0${index + 1}`);
    });
});