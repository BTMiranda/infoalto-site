const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  const data = {
    text: `Nome: ${nome.trim()}\nTelefone: ${telefone}\n\n${mensagem.trim()}`,
  };

  const url = "https://api.whatsapp.com/send?phone=5534998430039";
  const newURL = addUrlParameters(url, data);
  window.open(newURL, "_blank");
});

function addUrlParameters(url, parameters) {
  const separator = url.indexOf("?") !== -1 ? "&" : "?";

  const parameterStrings = [];

  for (const [key, value] of Object.entries(parameters)) {
    parameterStrings.push(`${key}=${encodeURIComponent(value)}`);
  }

  return `${url}${separator}${parameterStrings.join("&")}`;
}
