particlesJS('particles-js', {
    particles: {
      number: { value: 100 },
      color: { value: '#fff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { enable: true, speed: 2 }
    },
    interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
  });

  document.getElementById('generate-btn').addEventListener('click', function() {
    var length = document.getElementById('password-length').value;
    var password = generatePassword(length);
    document.getElementById('password').value = password;
  });

  document.getElementById('copy-btn').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
  });

  function generatePassword(length) {
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = '';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }