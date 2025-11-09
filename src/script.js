const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  const a = document.createElement('a');
  a.href = './img/Curriculo.pdf';
  a.download = 'Curriculo-Arthur-Munaier.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});


const modal = document.getElementById("modal");
const abrir = document.getElementById("abrir");
const fechar = document.getElementById("fechar");

abrir.addEventListener("click", () => {
  modal.style.display = "block";
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
});

const toggleDark = document.getElementById("toggleDarkMode");

function aplicarTemaSalvo() {
  const tema = localStorage.getItem("tema");
  if (tema === "escuro") {
    document.body.classList.add("dark-mode");
    toggleDark.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    toggleDark.textContent = "🌙";
  }
}

aplicarTemaSalvo(); 

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleDark.textContent = "☀️";
    localStorage.setItem("tema", "escuro"); 
  } else {
    toggleDark.textContent = "🌙";
    localStorage.setItem("tema", "claro"); 
  }
});

document.getElementById("nome").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
});

document.getElementById("telefone").addEventListener("input", function () {
  let v = this.value.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);

  if (v.length <= 10) {
    this.value = v.replace(/(\d{2})(\d{4})(\d)/, "($1) $2-$3");
  } else {
    this.value = v.replace(/(\d{2})(\d{5})(\d)/, "($1) $2-$3");
  }
});

function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const msg = document.getElementById("msg").value.trim();
  const status = document.getElementById("status");

  if (nome.length < 3) {
    status.textContent = "O nome precisa ter pelo menos 3 letras.";
    status.style.color = "red";
    return;
  }

  if (!validarEmail(email)) {
    status.textContent = "Email inválido.";
    status.style.color = "red";
    return;
  }

  if (telefone.length < 14) {
    status.textContent = "Número de telefone incompleto.";
    status.style.color = "red";
    return;
  }

  if (msg.length < 5) {
    status.textContent = "Digite uma mensagem válida.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Mensagem enviada com sucesso!";
  status.style.color = "green";

  this.reset();
});

const elementos = document.querySelectorAll('.animar');

function animarScroll() {
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animarScroll);
animarScroll();

const texto = "Arthur Munaier — Desenvolvedor Web";
let i = 0;

function digitar() {
  if (i < texto.length) {
    document.getElementById("type").textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 80);
  }
}

digitar();
