import { ListingsPage } from '@prometora/marketplace-ui';

/**
 * Listings Page
 * Wrapper page that uses the ListingsPage component from @prometora/marketplace-ui
 */
export default function Listings() {
  const storeSlug = process.env.NEXT_PUBLIC_STORE_SLUG || process.env.STORE_SLUG || '';
  // Use empty string for relative URLs - deployed stores will use their own domain
  // Set NEXT_PUBLIC_PROMETORA_URL in .env.local for local development pointing to main app
  const apiUrl = process.env.NEXT_PUBLIC_PROMETORA_URL || '';

  if (!storeSlug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error: Store slug not configured</p>
      </div>
    );
  }

  return <ListingsPage storeSlug={storeSlug} apiUrl={apiUrl} />;
}
