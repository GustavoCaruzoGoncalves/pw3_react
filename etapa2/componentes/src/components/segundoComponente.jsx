import terceiroComponente from "./terceiroComponente";

const segundoComponente = () => {
    const aluno = {
        nome: "Gustavo Caruzo Gonçalves",
        profissao: "Apostador",
        idade: 17,
        casado: true
    }
    return (
        <>
            <p>
                <h3>Aluno</h3>
                <strong>Nome: </strong>{aluno.nome} <br />
                <strong>Profissão: </strong>{aluno.profissao} <br />
                <strong>Idade: </strong>{aluno.idade} <br />
                <strong>Casado: </strong>{aluno.casado} <br />
            </p>

            <p>
                <terceiroComponente />
            </p>
        </>
    );
}

export default segundoComponente;