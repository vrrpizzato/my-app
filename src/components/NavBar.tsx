import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-zinc-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="hover:underline">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-poppins font-semibold whitespace-nowrap dark:text-white">MyApp</span>
                </div>
            </Link>
        </div>
    </nav>

  );
};

export default NavBar;
