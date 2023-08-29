import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsMedium } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="z-20 relative h-screen bg-dark flex flex-col py-10 font-extralight items-center justify-center flex-wrap mx-auto w-11/12 max-w-7xl 2xl:w-4/5">
        <div className="flex items-center py-12">
          <Link href="/">
            {/* <Image
              src="/jjcx_logo.svg"
              width={75}
              height={75}
              alt="jjcx logo"
              style={{ width: "75px", height: "75px" }}
            /> */}
          </Link>
        </div>
        <div className="h-px w-3/4 border-0 bg-gradient-to-r from-transparent via-cyan-800 to-transparent"></div>

        <div className="flex items-center gap-6 py-12 uppercase">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Work</Link>
          <Link href="/">Resume</Link>
        </div>
        <div className="h-px w-3/4 border-0 bg-gradient-to-r from-transparent via-cyan-800 to-transparent "></div>
        <div className="flex flex-col items-center py-12 text-2xl">
          <div className="flex items-center py-6 text-2xl gap-2">
            <BsGithub />
            <BsMedium />
          </div>
          <div className="text-sm">2023 jjcx</div>
        </div>
      </footer>
    </>
  );
}
