// Inisialisasi EmailJS
(function () {
  emailjs.init("Zd41wL2oRWgQ1CgBw"); // Ganti dengan User ID dari EmailJS
})();

// Fungsi untuk Login
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

// Fungsi untuk Registrasi
function register() {
  const regUsername = document.getElementById("regUsername").value;
  const regEmail = document.getElementById("regEmail").value;

  if (!regUsername || !regEmail) {
    alert("Masukkan username dan email!");
    return;
  }

  // Generate password otomatis
  const regPassword = generatePassword();

  // Simpan data ke localStorage
  if (!localStorage.getItem(regUsername)) {
    localStorage.setItem(regUsername, regPassword);

    // Kirim email ke pengguna
    sendEmail(regEmail, regUsername, regPassword);
    alert("Akun berhasil dibuat! Password telah dikirim ke email Anda.");
    showLogin();
  } else {
    alert("Username sudah digunakan! Pilih username lain.");
  }
}

// Fungsi untuk mengirim email
function sendEmail(email, username, password) {
  const templateParams = {
    user_email: darelmyid@gmail.com, // Email pengguna
    username: Darel, // Username pengguna
    password: Dd@@1122, // Password
  };

  emailjs
    .send("service_rozbrbg", "template_whzt2p8", templateParams)
    .then(
      function (response) {
        console.log("Email berhasil dikirim!", response.status, response.text);
      },
      function (error) {
        console.error("Gagal mengirim email!", error);
      }
    );
}

// Fungsi untuk menghasilkan password acak
function generatePassword(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Fungsi untuk menampilkan formulir Login
function showLogin() {
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("registerBox").classList.add("hidden");
}

// Fungsi untuk menampilkan formulir Register
function showRegister() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("registerBox").classList.remove("hidden");
                      }
