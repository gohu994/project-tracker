import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Bienvenue dans Project Manager</h1>
      <Link href="/projects" className="text-blue-600 hover:underline text-lg">
        Voir les projets
      </Link>
    </div>
  );
}
