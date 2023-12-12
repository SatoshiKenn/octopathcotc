import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const login = async (req: any, res: any) => {
  const { email, password } = JSON.parse(req.body);

  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Omit password before sending the user data in the response
    const { password: _, ...userWithoutPassword } = user;

    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default login;


