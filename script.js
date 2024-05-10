function showContent(content) {
  let code;
  switch (content) {
    case "Sobre Mim":
      code =
        "<p>Me chamo Giovanni Mota de Oliveira, tenho 25 anos e gosto de jogar nas horas vagas</p>";
      break;
    case "Formação Educacional":
      code =
        "<p>Atualmente estou me formando como engenheiro de software pela UNINTER</p>";
      break;
    case "Portfólio":
      code =
        "<p>Este é o link do meu repositório, você pode encontrar vários projetos pessoais: <a href=github.com/devgiovannimota>GitHub</a></p>";
      break;
    case "Contato":
      code =
        '<form><label for="nome">Nome:</label><br><input type="text" id="nome" name="nome"><br><label for="email">Email:</label><br><input type="email" id="email" name="email"><br><label for="mensagem">Digite sua mensagem:</label><br><textarea id="mensagem" name="mensagem" rows="4" placeholder="Digite sua mensagem..."></textarea><br><input type="submit" value="Enviar"></form>';
      break;
    default:
      code = "";
  }
  document.getElementById("content").innerHTML = code;
}
