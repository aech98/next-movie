import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Link href="/movies">Movies</Link>
    </div>
  );
}
