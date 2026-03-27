import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="justify-items-center content-center h-screen">
          <div className="pb-2">
            <Image src="/profile-pic.jpg" alt="Picture of the author" width={200} height={200} className="rounded-full" />
          </div>
          <div className="text-4xl pb-2">
            SENIOR, FULLSTACK DEVELOPER
          </div>
          <div className="text-xl pb-2">
            Senior fullstack developer with 10+ years of experience building front and backend web applications.
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/kcdhopkins" target="_blank">
              <Image src="/github.png" alt="github-img" width={50} height={50} />
            </Link>
            <Link href="https://www.linkedin.com/in/keyairius-hopkins-4b7b984a/" target="_blank">
              <Image src="/linked.png" alt="linkedin-mg" width={50} height={50} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
