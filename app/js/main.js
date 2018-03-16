console.log('Edite o arquivo js/main.js.')
$(document).ready(function(){
	//jQuery Datepicker
	$(function() {
		$('#validadeDoCartao').datepicker( {
        	changeMonth: true,
        	changeYear: true,
        	showButtonPanel: true,
        	dateFormat: 'mm/y',
        	onClose: function(dateText, inst) { 
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, month, 1));
			}
		});
	});
	//Verificar a entrada de dados quando o usuário clicar no botão Avançar
	$('button[type="submit"]').on('touchstart tap keypress click',function (data) {
		let inputAprovado = 0;
		let erros = [];
		let nomeDoTitular = $('#nomeDoTitular').val();
		let numeroDoCartao = $('#numeroDoCartao').val();
		let codigoDeSeguranca = $('#codigoDeSeguranca').val();
		let validadeDoCartao = $('#validadeDoCartao').val();
		let bandeira = $('.bandeira').val();
		if(/^[a-zA-Z]+$/i.test(nomeDoTitular)){
			inputAprovado++;
		}else{
			erros.push('Nome completo do titular');
		}
		if(/^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/i.test(numeroDoCartao)){
			inputAprovado++;
		}else{
			erros.push('Número do Cartão');
		}
		if(/^[0-9]{3,4}/i.test(codigoDeSeguranca)){
			inputAprovado++;
		}else{
			erros.push('Código de Segurança');
		}
		if(/^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/i.test(validadeDoCartao)){
			inputAprovado++;
		}else{
			erros.push('Validade do Cartão');
		}
		if($('.bandeiraOpcao').is(':checked')){
			inputAprovado++;
		}
		else{
			erros.push('Escolha a bandeira do cartão');
		}

		if(inputAprovado==4){
			alert('Cadastro realizado com sucesso!');
		}
		else{
			let mensagem = 'Por favor, corrija os erros abaixo:\n';
			for(let i = 0; i<erros.length;i++){
				mensagem += '- '+erros[i]+'\n';
			}
			alert(mensagem);
		}

	});
})