function validaForm() {
	if (document.contato.nomeUser.value.length <=1) {
		alert("O campo nome não pode ficar em branco - Digite seu nome.");
		contato.nomeUser.focus();
		return false;
	}
	if (document.contato.email.value.length <=1) {
		alert("O campo e-mail não pode ficar em branco - Digite seu e-mail.");
		contato.email.focus();
		return false;
	}
	if (document.contato.assuntoMsg.value.length <=1) {
		alert("O campo assunto não pode ficar em branco - Digite seu telefone.");
		contato.assuntoMsg.focus();
		return false;
	}
	return false;
}