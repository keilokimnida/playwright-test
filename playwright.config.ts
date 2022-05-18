// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import 'dotenv/config';

const config: PlaywrightTestConfig = {
  use: {
    // trace: 'on-first-retry',
    baseURL: process.env.BASE_URL,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ]
};
export default config;