import type { NextConfig } from 'next';

// Validate env files https://github.com/t3-oss/t3-env/issues/276#issuecomment-2465021156 (jiti was not working)
import '@/env/server';
import '@/env/client';

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
