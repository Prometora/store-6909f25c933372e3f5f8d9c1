import { ListingDetailPage } from '@prometora/marketplace-ui';

/**
 * Listing Detail Page
 * Wrapper page that uses the ListingDetailPage component from @prometora/marketplace-ui
 */
export default async function ListingDetail({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) {
  const { listingId } = await params;
  const storeSlug = process.env.NEXT_PUBLIC_STORE_SLUG || process.env.STORE_SLUG || '';
  const apiUrl = process.env.NEXT_PUBLIC_PROMETORA_URL || process.env.PROMETORA_API_URL || 'https://www.prometora.com';

  if (!storeSlug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error: Store slug not configured</p>
      </div>
    );
  }

  return <ListingDetailPage listingId={listingId} storeSlug={storeSlug} apiUrl={apiUrl} />;
}
