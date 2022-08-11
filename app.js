console.log('Calculando media');

const { Console } = require('console');
const { exit } = require('process');

// Import da biblioteca entrada de dados 
    var readline = require('readline');

// Instancia do objeto entrada dde dados
    var entradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

// Entrada do nome do aluno
    entradaDados.question('Digite o nome do aluno: \n', function (nome){
         let nomeAluno = nome;

// Entrada do nome do Professor 
    entradaDados.question('Digite o nome do Professor ou Professora: \n', function (nome2){
            let nomeProfessor = nome2;

// Entrada do sexo do aluno
    entradaDados.question('Digite o sexo do Aluno: \n', function (genero1){
            let sexoAluno = genero1;

// Entrada do sexo do Professor 
    entradaDados.question('Digite o sexo do Professor: \n', function (genero2){
    let sexoProfessor = genero2;

            
// Entrada do nome do curso
    entradaDados.question('Digite o nome do curso: \n', function (curso){
            let nomeCurso = curso;

// Entrada do nome da disciplina
    entradaDados.question('Digite o nome da disciplina: \n', function (disciplina){
            let nomeDisciplina = disciplina;
// Entrada da nota 1
      entradaDados.question('Digite o valor da nota 1:\n', function (valor1){
        let nota1 = valor1; 

// Entrada da nota 2
      entradaDados.question('Digite o valor da nota 2:\n', function (valor2){
        let nota2 = valor2; 

// Entrada da nota 3 
      entradaDados.question('Digite o valor da nota 3:\n', function (valor3){
        let nota3 = valor3;

// Entrada da nota 4 
      entradaDados.question('Digite o valor da nota 4:\n', function (valor4){
        let nota4 = valor4;

        let media;
        let statusAluno;
        let statusAluno2;
        let notaExame;
        
        

        if ( nota1<0 || nota1>=101 )
        {
          console.log('ERRO: As notas devem ser entre 0 e 100')
          entradaDados.close();
        }

        else if ( nota2<0 || nota2>=101 )
        {
          console.log('ERRO: As notas devem ser entre 0 e 100')
          entradaDados.close();
        }

         else if ( nota3<0 || nota3>=101 )
        {
          console.log('ERRO: As notas devem ser entre 0 e 100')
          entradaDados.close();
        }

        else if ( nota4<0 || nota4>100 )
        {
          console.log('ERRO: As notas devem ser entre 0 e 100')
          entradaDados.close();
        }

        
      else if (nomeAluno == '' ) 
      {
        console.log('O nome do aluno deve ser informado.');
        entradaDados.close();
      }

        else if (nomeProfessor  == '')
      {
        console.log('O nome do professor ou professora deve ser informado.');
        entradaDados.close();
     }

     else if ( sexoAluno == '')
      {
        console.log('O sexo do aluno deve ser informado.');
        entradaDados.close();
      }

      else if ( sexoProfessor == '')
      {
        console.log('O sexo do professor deve ser informado.');
        entradaDados.close();
      }

      else if (nomeDisciplina == '')
      {
        console.log('O nome da disciplina deve ser informado.');
        entradaDados.close();
      }

      else if (nomeCurso == '')
      {
        console.log('O nome do curso deve ser informado.');
        entradaDados.close();
      }

    else if(nota1 == '' || nota2  == '' || nota3 == '' || nota4 == ''){
        console.log('Todas as notas do aluno devem ser informadas')
        entradaDados.close();
    }else{

        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4;
    }
        if ( media>=70.0){
          statusAluno ='Aprovado :))';
          console.log('Relátorio do Aluno: \n')

    if (sexoAluno == "feminino" )
    {
      console.log('A aluna ' + nomeAluno + ' foi APROVADA na disciplina '+ nomeDisciplina)
    }

    else {
      console.log('O aluno ' + nomeAluno + ' foi APROVADO na disciplina '+ nomeDisciplina)
    }

    console.log('Curso: ' + nomeCurso)

    if (sexoProfessor == "feminino" )
    {
      console.log('Professora: ' + nomeProfessor)
    }

    else {
      console.log('Professor: ' + nomeProfessor)
    }

    console.log('Notas do aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4)

    console.log( 'Media Final: ' + media) }

      
      else if( media<=69.9 && media>=50.0)
      {
          statusAluno = 'Em exame :|';
          if ( statusAluno == 'Em exame :|') {
            entradaDados.question('O aluno esta em exame. Por favor informe a nota do exame: \n', function (exame) { 
              let media2 = exame; 
        media2 = (parseFloat(media) + parseFloat(exame)) /2;
            
        if ( media2>60.0){
              
    console.log('\n Relátorio do Aluno: \n')

    if (sexoAluno == "feminino" )
    {
      console.log('A partir do exame, A aluna ' + nomeAluno + ' foi APROVADA na disciplina '+ nomeDisciplina)
    }

    else {
      console.log('A partir do exame, O aluno ' + nomeAluno + ' foi APROVADO na disciplina '+ nomeDisciplina)
    }

    console.log('Curso: ' + nomeCurso)

    if (sexoProfessor == "feminino" )
    {
      console.log('Professora: ' + nomeProfessor)
    }

    else {
      console.log('Professor: ' + nomeProfessor)
    }

    if ( statusAluno == 'Em exame :|'){
    console.log('Notas do Aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4)
  }

    console.log('Nota do Exame: ' + exame)
    console.log('Média Final: ' + media ) 

    console.log('Média Final do Exame: ' + media2 )
              entradaDados.close()
          }
          else {
              statusAluno = 'Infelizmente o Aluno foi reprovado novamente :((';
              console.log(statusAluno)
              entradaDados.close()
          }
           
          })
    
    }
          
      }
      else {
        console.log('Relátorio do Aluno: \n')

        if (sexoAluno == "feminino" )
        {
          console.log('A aluna ' + nomeAluno + ' foi REPROVADA na disciplina '+ nomeDisciplina)
        }
    
        else {
          console.log('O aluno ' + nomeAluno + ' foi REPROVADO na disciplina '+ nomeDisciplina)
        }
    
        console.log('Curso: ' + nomeCurso)
    
        if (sexoProfessor == "feminino" )
        {
          console.log('Professora: ' + nomeProfessor)
        }
    
        else {
          console.log('Professor: ' + nomeProfessor)
        }
    
        
        console.log('Notas do Aluno: ' + nota1 + ',' + nota2 + ',' + nota3 + ',' + nota4)
        
        console.log('Média Final: ' + media ) 
    
       
                  entradaDados.close()
              
            
    
  }
  
      


      

    
                              })
                            })
                        })
                    })
                })
            })
        })
    })
})
})