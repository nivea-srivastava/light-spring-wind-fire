import { createFileRoute } from "@tanstack/react-router";
import { ListingApp } from "@/components/listing/listing-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ListingApp />;
}
