import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import Blur from "@/components/svg/blur";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Blur />
    </main>
  );
}
