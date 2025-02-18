import Logo from "@/assets/hydra-logo.svg";
import Github from "@/assets/github.svg";
import { ModeToggle } from "@/components/ui/theme-mode";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload } from "lucide-react";
import { I18nSelector } from "@/components/ui/i18n-selector";
import { useStore } from "@nanostores/react";
import { searchQuery } from "@/stores/search";
import { cn } from "@/lib/utils";

export function Header() {
  const query = useStore(searchQuery);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    searchQuery.set(value);
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-12 w-full max-w-screen-2xl flex-row items-center justify-between px-4 xs:h-14">
        <a href="/" className="flex items-center gap-2">
          <img
            src={Logo.src}
            alt="Hydra Logo"
            width={28}
            height={28}
            decoding="async"
            loading="eager"
            className="dark:invert"
          />
          <span className="hidden text-xl font-semibold md:flex">
            Theme Store
          </span>
        </a>

        <div className="flex items-center">
          <div className="mr-2 items-center gap-2">
            <div className="relative w-full hidden sm:flex">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={handleSearch}
                className="h-8 rounded-lg bg-muted/50 pl-10 text-sm text-muted-foreground xs:w-64"
                placeholder="Search a style..."
              />
            </div>
          </div>

          <a
            href="https://github.com/hydralauncher/hydra-themes"
            className={`${buttonVariants({ variant: "ghost", size: "icon" })} size-8 rounded-lg`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Github.src}
              alt="Source Code"
              width={19}
              height={19}
              decoding="async"
              loading="eager"
              className="transition-all duration-500 dark:invert"
            />
          </a>

          {/* <I18nSelector /> */}

          <ModeToggle />

          <a
            href="https://github.com/hydralauncher/hydra-themes/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "ml-2 h-8 rounded-lg hidden sm:flex",
            )}
          >
            <Upload className="size-4" />
            <span className="text-sm">Upload Theme</span>
          </a>
        </div>
      </div>
    </header>
  );
}
