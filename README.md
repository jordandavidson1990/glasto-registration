# Glastonbury registrations

A small, shared Glastonbury registration lookup for a festival crew. It is a static Next.js site: registration details are stored in the repository and deployed with the site, so every visitor sees the same current list.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update registrations

Edit [app/registrations.ts](app/registrations.ts). Each person needs a stable `id`, name, registration number, and registered postcode. A note is optional.

```ts
{
  id: "jane-doe",
  name: "Jane Doe",
  registration: "1234567890",
  postcode: "BA6 8JJ",
  note: "Optional",
}
```

Commit, push, and redeploy after any change. The site does not use a database or browser storage.

## Check before deploying

```bash
npm run lint
npm run build -- --webpack
```

## Deploy

Deploy the repository to your preferred Next.js host, such as Vercel. Each push to the connected production branch can trigger a new deployment.

## Privacy

Registration numbers and postcodes are sensitive personal details. Anyone who can open the deployed site can view them. Keep the repository private and put the deployed site behind authentication or password protection before sharing it outside the intended group.

## Assets

The site uses the Pyramid Stage artwork at `public/pyramid-stage-art.gif` and the Glastonbury banner asset in `public/Glastonbury - Registration Lookup_files/`. The rest of the downloaded saved-page material is intentionally ignored by Git.
