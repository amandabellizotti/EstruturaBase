  // Não finalizado
  
  // Bloco 1: Manipulação de Texto (strings) //
        
     function limparCadastro() {
        // Dica 1: Capture o valor digitado no input usando 
        // Dica 2: Crie a lógica usando os métodos de string solicitados
        // Dica 3: Exiba o valor final na tela alterando o innerText do span com id "resultadoNome"
        
        const nomeCompleto = document.getElementById("inputNome").value;
        const nomeLimpo = nomeCompleto.trim(); // tira espaços desnecessários
        const primeiroNomeLimpo = nomeLimpo.split(" ")[0].toLowerCase(); // split pega partes nesse caso 0, (a primeira informação que aparece)

        const campoResultado = document.getElementById("resultadoNome");
        campoResultado.innerText = primeiroNomeLimpo;
        console.log("Valor digitado no input:", primeiroNomeLimpo);
    }

    function validarEmail() {
      const emailCompleto = document.getElementById("inputEmail").value;
      const campoResultado = document.getElementById("resultadoEmail")

      const ehGmail = emailCompleto.endsWith("@gmail.com");

      if (ehGmail) {
        campoResultado.innerText = "Este é um e-mail do Gmail!";
        campoResultado.style.color = "green";
       } else {
        campoResultado.innerText = "Este não é um email do Gmail!";
        campoResultado.style.color = "red";
       }
     
       console.log("Email digitado:", ehGmail);
        
    }

    function mascararCartao() {
      const numCartao = document.getElementById("inputCartao").value;
      const exibirCartao = numCartao.slice(-4).padStart(16, "*"); // slice corta a string e pega somente os ultimos 4 digitos. o padStart garante q a string tenha 16 caracteres no total, preenchendo o que faltar no início com asteriscos.
    
      //exibe o resultado
      const campoResultado = document.getElementById("resultadoCartao");
      campoResultado.innerText = exibirCartao; 
    
      console.log("Número do Cartão: ", exibirCartao);
    }

    function localizarUsuario() {
      const stringCompleta = document.getElementById("inputUsuario").value;


    }


    function geradorSlug() {
      const titulo = document.getElementById("inputSlug").value;
      const tituloLimpo = titulo.toLowerCase().replaceAll(" ", "-");     //deixar em minusculo e substituir caracter
      
      const campoResultado = document.getElementById("resultadoSlug");
      campoResultado.innerText = tituloLimpo; 

      console.log("Título novo: ", tituloLimpo);
    }

    function Censura() {
      const frase = document.getElementById("inputCensura").value;
      const fraseSubstituido = frase.replaceAll("erro", "sucesso");

      const campoResultado = document.getElementById("resultadoCensura");
      campoResultado.innerText = fraseSubstituido;

      console.log("Nova frase: ", fraseSubstituido);
    }

    function extracaoDominio() {
      const dominio = document.getElementById("inputExtrair").value;
      const inicio = dominio.indexOf("//") + 2; //onde começa o dominio
      const fim = dominio.indexOf("."); // onde termina o dominio
      
      const dominioExtraido = dominio.slice(inicio, fim);

      const campoResultado = document.getElementById("resultadoExtracao");
      campoResultado.innerText = dominioExtraido;

      console.log("Extração de Domínio: ", dominioExtraido);
    }

    function contagemCaracter() {
      const string = document.getElementById("inputContagem").value;
      const contador = string.length;
      
      const campoResultado = document.getElementById("resultadoContagem");
      campoResultado.innerText = contador;
        
      if (string.length > 160) {
        console.log("Mensagem muito longa! O limite é de 160 caracteres.");
        } else {
        console.log("SMS pronto para enviar. Caracteres usados: " + string.length);
      }
     
    }

    function formatacaoCPF() {
      const cpf = document.getElementById("inputFormatacao").value;
      const parte1 = cpf.slice(0, 3);
      const parte2 = cpf.slice(3, 6);
      const parte3 = cpf.slice(6, 9);
      const parte4 = cpf.slice(9, 11); // ou apenas .slice(9)
      
      const cpfLimpo = `${parte1}.${parte2}.${parte3}-${parte4}`;

      const campoResultado = document.getElementById("resultadoFormatacao");
      campoResultado.innerText = cpfLimpo;

      console.log("CPF formatado: ", cpfLimpo);
    }

    function repeticao() {
      const inputPalavra = document.getElementById("inputRepeticaoPalavra");
      const inputNumero = document.getElementById("inputRepeticaoNumero");

      const palavra = inputPalavra.value;
      const vezes = Number(inputNumero.value);
      const resultadoFinal = (palavra + " ").repeat(vezes);

      const campoResultado = document.getElementById("resultadoRepeticao");
      campoResultado.innerText = resultadoFinal;
    }

    function sorteioAluno() {
      const numero = document.getElementById("inputSorteio").value;

      const numeroSorteio = numero.Math.floor(Math.random() * 30);

      const campoResultado = document.getElementById("resultadoSorteio");
      campoResultado.innerText = numeroSorteio;
    }

