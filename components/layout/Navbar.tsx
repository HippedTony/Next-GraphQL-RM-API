import Link from "next/link";

function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href={"/"}>Rick & Morty</Link>

        <div className="flex gap-6">
          <Link href={"/"}>Characters</Link>

          <Link href={"/favorites"}>Favorites</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
