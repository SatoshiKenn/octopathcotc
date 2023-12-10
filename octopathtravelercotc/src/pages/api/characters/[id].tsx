// pages/api/characters/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prismaClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID parameter' });
  }

  try {
    const character = await prisma.character.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }

    res.status(200).json(character);
  } catch (error) {
    console.error('Error fetching character:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
