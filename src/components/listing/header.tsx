import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Wordmark, SearchIcon, GlobeIcon, HamburgerIcon, UserIcon } from "./icons";
import { cn } from "@/lib/utils";

type HeaderProps = {
  onSearch: () => void;
  onHost: () => void;
  onGlobe: () => void;
  onLogin: () => void;
  onSignup: () => void;
};

export function Header({ onSearch, onHost, onGlobe, onLogin, onSignup }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-hair">
      <div className="listing-wrap flex h-20 items-center justify-between gap-4">
        <a href="/" className="shrink-0" aria-label="Airbnb home">
          <Wordmark />
        </a>

        <button
          type="button"
          onClick={onSearch}
          className="hidden md:flex items-center h-12 rounded-pill border border-line shadow-search hover:shadow-search-hover transition-shadow bg-paper pl-2 pr-2 min-w-[340px]"
        >
          <span className="px-4 text-sm font-semibold border-r border-line">Anywhere</span>
          <span className="px-4 text-sm font-semibold border-r border-line">Any week</span>
          <span className="px-4 text-sm text-faint flex-1 text-left">Add guests</span>
          <span className="grid place-items-center size-8 rounded-full bg-rausch text-paper">
            <SearchIcon size={14} className="text-paper" />
          </span>
        </button>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onHost}
            className="hidden lg:inline-flex h-10 px-4 rounded-pill text-sm font-semibold hover:bg-wash"
          >
            Airbnb your home
          </button>
          <button
            type="button"
            onClick={onGlobe}
            className="grid place-items-center size-10 rounded-full hover:bg-wash"
            aria-label="Choose a language"
          >
            <GlobeIcon size={16} />
          </button>
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                "flex items-center gap-2 h-[42px] pl-3 pr-1.5 rounded-pill border border-line hover:shadow-search-hover transition-shadow",
                menuOpen && "shadow-search-hover",
              )}
            >
              <HamburgerIcon size={16} />
              <span className="grid place-items-center size-8 rounded-full bg-[#222] text-paper overflow-hidden">
                <UserIcon size={20} className="text-paper mt-1" />
              </span>
            </button>
            {menuOpen ? (
              <div
                id={menuId}
                role="menu"
                className="absolute right-0 top-[calc(100%+8px)] w-[250px] bg-paper rounded-2xl shadow-menu py-2 z-50"
              >
                <MenuItem
                  onClick={() => {
                    setMenuOpen(false);
                    onSignup();
                  }}
                  strong
                >
                  Sign up
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setMenuOpen(false);
                    onLogin();
                  }}
                >
                  Log in
                </MenuItem>
                <div className="h-px bg-hair my-2" />
                <MenuItem
                  onClick={() => {
                    setMenuOpen(false);
                    onHost();
                  }}
                >
                  Airbnb your home
                </MenuItem>
                <MenuItem onClick={() => setMenuOpen(false)}>Host an experience</MenuItem>
                <MenuItem onClick={() => setMenuOpen(false)}>Help Center</MenuItem>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuItem({
  children,
  onClick,
  strong,
}: {
  children: ReactNode;
  onClick: () => void;
  strong?: boolean;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-3 text-sm hover:bg-wash",
        strong ? "font-semibold" : "font-normal",
      )}
    >
      {children}
    </button>
  );
}
