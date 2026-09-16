# Production architecture — vacation-rental marketplace

The diagram lives at [`architecture.svg`](./architecture.svg) and is also served in the app at `/architecture`.

## How this clone maps to production

| Surface in the clone | Production counterpart |
| --- | --- |
| `src/lib/listing-data.ts` | Listing service + read-through Redis + ISR HTML |
| `/photos/*` | Object storage + image CDN (room-sized derivatives) |
| Photo tour / lightbox | Client islands; images preloaded by room |
| Calendar + quote | Calendar service + pricing service; Redis lock on Reserve |
| Save heart | Wishlist service (per-user); here, component state |
| Reserve modal | Booking saga: hold → pay → confirm → notify |

## Scaling notes

- **Frontend:** SSR listing HTML at the edge. Public listings are cacheable; signed-in modules (wishlist, messages) hydrate as islands. Photo tour is a full-screen overlay so it can code-split from the listing shell.
- **Backend:** Independently scalable services behind an API gateway. The booking path is a saga with idempotency keys — double-clicks must not double-book.
- **Storage:** Postgres for system of record (users, listings, reservations). Redis for hot paths (session, price quotes, calendar locks). Object storage for original photos.
- **Search:** OpenSearch (or equivalent) with geo + amenity + a denormalized availability bitmap fed by a CDC/Kafka stream from the calendar.
- **Deploy:** Preview deploys per PR, blue/green prod, no runtime disk writes. This demo targets Vercel-style SSR.

This submission deliberately does **not** stand up auth or a database — the take-home is visual and behavioural parity of the listing page.
