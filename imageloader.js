export default function imageLoader({ src, width, quality }) {
    return `https://<app-address.domain>${src}?w=${width}?q=${quality || 75}`;
  }