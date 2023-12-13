import prisma from '../../../lib/prismaClient';

const addCharacter = async (req: any, res: any) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    return res.status(400).json({ message: 'Invalid Content-Type. Please use application/json.' });
  }

  try {
    const {
      name,
      image1,
      image2,
      hp,
      sp,
      atk,
      def,
      mag,
      mdef,
      crit,
      speed,
      influence,
      job,
      rarity,
    } = req.body;

    if (!name || !image1 || hp <= 0 || sp <= 0 || atk <= 0 || def <= 0 || mag <= 0 || mdef <= 0 || crit <= 0 || speed <= 0 || !influence || !job || !rarity) {
      return res.status(400).json({ message: 'Invalid data. Please provide all required fields with valid values.' });
    }

    const character = await prisma.character.create({
      data: {
        name,
        image1,
        image2,
        hp: parseInt(hp, 10),
        sp: parseInt(sp, 10),
        atk: parseInt(atk, 10),
        def: parseInt(def, 10),
        mag: parseInt(mag, 10),
        mdef: parseInt(mdef, 10),
        crit: parseInt(crit, 10),
        speed: parseInt(speed, 10),
        influence,
        job,
        rarity,
      },
    });

    res.status(201).json(character);
  } catch (error) {
    console.error('Error adding character:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default addCharacter;
