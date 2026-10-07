import { buscaTodosAlunosRepositorio } from "../Repositorio/AlunosRepositorio";

const buscaTodosAlunosServico = async () => {
    const alunos = await buscaTodosAlunosRepositorio();
    return alunos;
}

export { buscaTodosAlunosServico }