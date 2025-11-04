import { SignInPage } from '@prometora/marketplace-ui';

/**
 * Sign In Page
 * Wrapper page that uses the SignInPage component from @prometora/marketplace-ui
 */
export default function SignIn() {
  const storeSlug = process.env.NEXT_PUBLIC_STORE_SLUG || process.env.STORE_SLUG || '';
  const apiUrl = process.env.NEXT_PUBLIC_PROMETORA_URL || process.env.PROMETORA_API_URL || 'https://www.prometora.com';

  if (!storeSlug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error: Store slug not configured</p>
      </div>
    );
  }

  return <SignInPage storeSlug={storeSlug} apiUrl={apiUrl} />;
}
