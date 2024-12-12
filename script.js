// Konfigurasi bot Telegram
const botToken = "7667658360:AAGwXaS2tfDV52denremA6FsWjg-QLi-bKM"; // Ganti dengan token bot Telegram Anda
const chatId = "7013450923"; // Ganti dengan chat ID pengguna (atau gunakan mekanisme input untuk mendapatkan ID pengguna)

// Fungsi untuk menghasilkan password acak
function generatePassword(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Fungsi untuk mengirim pesan ke bot Telegram
function sendToTelegram(message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        alert("Gagal mengirim pesan ke Telegram!");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Fungsi untuk login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Ambil data dari localStorage
  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    alert(`Login berhasil! Selamat datang, ${username}`);
  } else {
    alert("Username atau password salah!");
  }
}

// Fungsi untuk register
function register() {
  const regUsername = document.getElementById("regUsername").value;

  // Cek apakah username sudah terdaftar
  if (localStorage.getItem(regUsername)) {
    alert("Username sudah terdaftar! Gunakan username lain.");
  } else {
    // Generate password otomatis
    const regPassword = generatePassword();

    // Simpan username dan password di localStorage
    localStorage.setItem(regUsername, regPassword);

    // Kirim password ke bot Telegram
    const message = `Akun berhasil dibuat!\nUsername: ${regUsername}\nPassword: ${regPassword}`;
    sendToTelegram(message);

    alert("Registrasi berhasil! Password Anda telah dikirim ke Telegram.");
    showLogin();
  }
}

// Tampilkan form login
function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.add("hidden");
}

// Tampilkan form register
function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}
