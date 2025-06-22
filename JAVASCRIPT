const form = document.getElementById("patientForm");
const lista = document.getElementById("listaPacientes");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const diagnostico = document.getElementById("diagnostico").value;

  const li = document.createElement("li");
  li.textContent = `👤 ${nome} | Idade: ${idade} | Diagnóstico: ${diagnostico}`;
  lista.appendChild(li);

  form.reset();
});
