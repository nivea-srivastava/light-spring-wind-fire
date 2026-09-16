const COLS: { title: string; links: string[] }[] = [
  {
    title: "Support",
    links: [
      "Help Center",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighborhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Airbnb-friendly apartments",
    ],
  },
  {
    title: "Airbnb",
    links: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Gift cards",
      "Airbnb.org emergency stays",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-wash border-t border-hair mt-16">
      <div className="listing-wrap py-12 grid md:grid-cols-3 gap-8">
        {COLS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold mb-3">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <button type="button" className="text-sm hover:underline text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="listing-wrap border-t border-hair py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
        <p>
          © 2026 Airbnb, Inc. ·{" "}
          <button type="button" className="hover:underline">
            Privacy
          </button>{" "}
          ·{" "}
          <button type="button" className="hover:underline">
            Terms
          </button>{" "}
          ·{" "}
          <button type="button" className="hover:underline">
            Sitemap
          </button>
          {" · "}
          <a href="/architecture" className="hover:underline">
            Architecture
          </a>
        </p>
        <p className="flex items-center gap-4 font-semibold">
          <span>English (US)</span>
          <span>$ USD</span>
        </p>
      </div>
    </footer>
  );
}
