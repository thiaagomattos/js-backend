const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10,8,7.5,9];

const listaDeAlunosEMedia = [alunos,medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedia[0].includes(aluno)) {
/*      const alunos = listaDeAlunosEMedia[0];
        const medias = listaDeAlunosEMedia[1]; */

        const [alunos,medias] = listaDeAlunosEMedia;

        const indice = alunos.indexOf(aluno); 

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {
            console.log("Aluno não encontrado!")
        }
    }
exibeNomeENota("João");