import { Request, Response} from "express";
import { buscaTodosAlunosServico } from "../Servico/AlunosServico";

const buscaTodosAlunos = async (req: Request, res: Response) => {
    try {
        const alunos = await buscaTodosAlunosServico();
        res.status(200).json(alunos);
    } catch(erro) {
        res.status(500).json({ error:"Erro ao consultar todos os Alunos"})
    }
}

export { buscaTodosAlunos }