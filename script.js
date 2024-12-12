// Fungsi untuk menampilkan formulir Register
function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");  // Sembunyikan login
  document.getElementById("registerBox").classList.remove("hidden");  // Tampilkan register
}

// Fungsi untuk menampilkan formulir Login
function showLogin() {
  document.getElementById("loginBox").classList.remove("hidden");  // Tampilkan login
  document.getElementById("registerBox").classList.add("hidden");  // Sembunyikan register
}

// Fungsi untuk proses login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validasi username dan password
  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    alert("Login berhasil!");
  } else {
    alert("Username atau password salah!");
  }
}

// Fungsi untuk proses registrasi
function register() {
  const regUsername = document.getElementById("regUsername").value;
  const regEmail = document.getElementById("regEmail").value;

  if (!regUsername || !regEmail) {
    alert("Username dan email harus diisi!");
    return;
  }

  // Generate password otomatis
  const password = generatePassword();

  // Simpan username dan password ke localStorage
  localStorage.setItem(regUsername, password);

  // Kirim email (Gunakan EmailJS atau lainnya di sini)
  sendEmail(regEmail, regUsername, password);

  alert("Akun berhasil dibuat! Password telah dikirim ke email Anda.");
  showLogin();  // Pindah ke halaman login setelah registrasi
}

// Fungsi untuk mengirim email (menggunakan EmailJS)
function sendEmail(email, username, password) {
  const templateParams = {
    user_email: darelmyid@gmail.com,
    username: Darel,
    password: Dd@@1122,
  };

  emailjs.send("service_rozbrbg", "template_whzt2p8", templateParams)
    .then(function(response) {
      console.log("Email berhasil dikirim!", response);
    }, function(error) {
      console.error("Gagal mengirim email!", error);
    });
}

// Fungsi untuk generate password otomatis
function generatePassword(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
