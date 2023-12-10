import Image from 'next/image';
import { Inter } from 'next/font/google';
import NavBar from '../../components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 ${inter.className}`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Octopath Traveler: Champions of the Continent
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By {'Kennette Guevara'}
            
          </a>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <NavBar />
      </div>

      <div className="relative flex place-items-center mt-8">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/cotclogo.png"
          alt="CotC Logo"
          width={120}
          height={25}
          priority
        />
      </div>
    </main>
  );
}
