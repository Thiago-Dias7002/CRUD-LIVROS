import { Router, Request, Response } from "express";

import { prisma } from "../prisma";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
    const livros = await prisma.livros.findMany();

    res.status(200).json(livros);
});

router.post("/", async (req: Request, res: Response) => {
    const { titulo, autor, paginas } = req.body;

    const livro = await prisma.livros.create({
        data: {
            titulo,
            autor,
            paginas
        }
    });

    res.status(201).json(livro);
});

router.put("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { titulo, autor, paginas } = req.body;

    const livro = await prisma.livros.update({
        where: {
            id: Number(id)
        },
        data: {
            titulo,
            autor,
            paginas
        }
    });

    res.status(200).json(livro);
});

router.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    const livro = await prisma.livros.delete({
        where: {
            id: Number(id)
        }
    });

    res.status(200).json(livro);
});

export default router;