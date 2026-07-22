# W.H.R. Associates website

The client application for the W.H.R. Associates PEO and staffing website.

## Local development

From the repository root:

```sh
npm install
npm run dev --workspace client
```

The contact form reads `VITE_CONTACT_ENDPOINT` when a hosted API endpoint is configured and otherwise uses `/api/contact`.

## Quality checks

```sh
npm run lint --workspace client
npm run build
```

The production client is generated in `client/dist`. The GitHub Pages workflow publishes that directory at the `/WHR/` repository path and uses `public/404.html` as the client-side route fallback.
