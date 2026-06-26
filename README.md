## Getting Started

This is a [Next.js](https://nextjs.org/) project that uses [Contentful](https://www.contentful.com/) for the blog content.

### Prerequisites

- Node.js (18+ recommended)

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file in the project root with your Contentful credentials:

   ```bash
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_KEY=your_access_token
   ```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Other scripts

- `npm run build` — build the production bundle
- `npm run start` — run the production build (run `npm run build` first)
- `npm run lint` — lint the project
