import { prisma } from "../prisma";


const buscaTodosAlunosRepositorio = async () => {
    const alunos = await prisma.alunos.findMany();
    return alunos;
}

export {
    buscaTodosAlunosRepositorio
}