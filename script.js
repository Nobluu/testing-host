const CORRECT_PASSWORD = '1234';

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginLoading = document.getElementById('loginLoading');
    const btnText = document.getElementById('btnText');
    const loginBtn = document.getElementById('loginBtn');
    
    // Validasi form
    if (!email || !password) {
        showError('Harap isi semua field.');
        return;
    }
    
    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Format email tidak valid.');
        return;
    }
    
    // Tampilkan loading
    loginLoading.style.display = 'block';
    btnText.style.display = 'none';
    loginBtn.disabled = true;
    
    // Simulasi proses login
    setTimeout(() => {
        if (password === CORRECT_PASSWORD) {
            showSuccess(`Login berhasil! Selamat datang, ${email}`);
            
            // Redirect setelah 2 detik
            setTimeout(() => {
                console.log('Login berhasil:', {
                    email: email,
                    timestamp: new Date().toISOString()
                });
                // window.location.href = 'dashboard.html';
                alert('Selamat! Anda berhasil login.');
            }, 2000);
        } else {
            showError('Password salah. Password yang benar adalah: 1234');
        }
        
        // Reset button
        loginLoading.style.display = 'none';
        btnText.style.display = 'block';
        loginBtn.disabled = false;
    }, 1500);
});

// Utility functions
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    const successDiv = document.getElementById('successMessage');
    
    successDiv.style.display = 'none';
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    const errorDiv = document.getElementById('errorMessage');
    
    errorDiv.style.display = 'none';
    successDiv.textContent = message;
    successDiv.style.display = 'block';
}

// Auto focus pada email input
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('email').focus();
});

// Enter key untuk submit
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('loginForm').dispatchEvent(new Event('submit'));
    }
});

// Demo auto-fill (untuk testing)
document.getElementById('email').addEventListener('dblclick', function() {
    this.value = 'admin@example.com';
    document.getElementById('password').value = '1234';
});