// Import necessary dependencies
import prisma from '../../../lib/prismaClient';

// Define the API endpoint
const getCharacter = async (req: any, res: any) => {
  try {
    // Extract character name from the request parameters
    const { name } = req.query;

    // Use Prisma to find characters by name
    const characters = await prisma.character.findMany({
      where: { name: String(name) }, // Assuming the name is a string
    });

    // Check if any characters were found
    if (characters.length === 0) {
      return res.status(404).json({ message: 'Character not found' });
    }

    // Respond with the character data (excluding sensitive information)
    const characterData = characters.map((character) => ({
      id: character.id,
      name: character.name,
      image1: character.image1,
      hp: character.hp,
      sp: character.sp,
      atk: character.atk,
      def: character.def,
      mag: character.mag,
      mdef: character.mdef,
      crit: character.crit,
      speed: character.speed,
      influence: character.influence,
      job: character.job,
      rarity: character.rarity,
    }));

    res.status(200).json(characterData);
  } catch (error) {
    console.error('Error fetching characters:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Export the endpoint
export default getCharacter;
