import "./globals.css";
export const metadata = {
  title: "Sathsalaha",
  description: "Sathsalaha Management Consultancy",
};

const FAVICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0ea5e9"/><text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" font-size="36" font-family="Arial, sans-serif" fill="#ffffff">S</text></svg>';
const FAVICON_DATA_URL = `data:image/svg+xml;utf8,${encodeURIComponent(FAVICON_SVG)}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={FAVICON_DATA_URL} />
      </head>
      <body>{children}</body>
    </html>
  );
}
