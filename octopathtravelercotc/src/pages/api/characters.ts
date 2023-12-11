// pages/api/characters.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prismaClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const characters = await prisma.character.findMany();
    res.status(200).json(characters);
  } catch (e) {
    console.error('Error fetching characters:', e);
    res.status(500).json({ error: 'Internal Server Error', description:e });
  }
}
