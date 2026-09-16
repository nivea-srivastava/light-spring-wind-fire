import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/architecture")({
  component: ArchitecturePage,
});

function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-wash text-ink">
      <header className="bg-paper border-b border-hair">
        <div className="listing-wrap h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-rausch">
            ← Casa Aurora
          </Link>
          <h1 className="font-semibold">Architecture</h1>
          <a href="/architecture.svg" download className="text-sm underline">
            Download SVG
          </a>
        </div>
      </header>
      <div className="listing-wrap py-10">
        <p className="text-mute max-w-3xl mb-8">
          High-level scaling strategy for a production vacation-rental marketplace — frontend,
          backend, storage, search, and deployment — with a note on how this listing-page
          clone maps onto that system.
        </p>
        <div className="bg-paper rounded-card shadow-card overflow-hidden">
          <img
            src="/architecture.svg"
            alt="Production vacation-rental marketplace architecture diagram covering clients, edge delivery, frontend scale, backend services, data and search, the booking path, and deployment."
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
