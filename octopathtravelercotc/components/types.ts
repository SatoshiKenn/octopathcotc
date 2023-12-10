// types.ts
interface Character {
    id: number;
    name: string;
    image1: string;
    image2?: string | null;
    
    // Stats
    hp: number;
    sp: number;
    atk: number;
    def: number;
    mag: number;
    mdef: number;
    crit: number;
    speed: number;
  
    // Additional Fields
    influence: string;
    job: string;
    rarity: string;
  }
  
  export default Character;
  