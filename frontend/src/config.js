export default {
  url: import.meta.env.VITE_BACKEND_URL || 'https://ooc-backend-clover-chat.apps.origins.heritage.africa',
  demo: import.meta.env.VITE_DEMO === 'true',
  appName: import.meta.env.VITE_SITE_TITLE || 'Origins Office Communication',
  brand: import.meta.env.VITE_SITE_BRAND || 'Heritage',
  showCredits: import.meta.env.VITE_SHOW_CREDITS === 'true',
};
