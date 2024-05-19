import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const TopBar = () => {
  return (
    <Sheet>
      <header>
        <div className="absolute left-0 right-0 top-2 z-40 pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  Liva
                </Link>
                <SheetTrigger
                  data-collapse-toggle="navbar-default"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu />
                </SheetTrigger>

                <div
                  className="hidden w-full md:block md:w-auto"
                  id="navbar-default"
                >
                  <ul className="justify-center items-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                      <Button variant="gooeyRight" size="lg" asChild>
                        <Link href="/login">Log In</Link>
                      </Button>
                    </li>
                    <li>
                      <ModeToggle />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="relative z-50 overflow-hidden bg-neutral-950 pt-2 dark:bg-vanta-700 dark:bg-white"></nav>
      </header>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default TopBar;
