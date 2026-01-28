// Color configuration for RiskWise application
// Edit these values to customize the theme

export const colors = {
  // Primary brand colors
  primary: {
    brown: {
      light: '#6B5B4F',
      DEFAULT: '#4A3F35',
      dark: '#3A2F25',
      darker: '#2C1810',
    },
    navy: {
      light: '#4A5568',
      DEFAULT: '#2D3748',
      dark: '#1A202C',
      darker: '#0F1419',
    },
  },

  // Risk level colors
  risk: {
    low: {
      border: 'border-l-blue-500',
      iconBg: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-50 dark:bg-blue-900/20',
      badgeBorder: 'border-blue-200 dark:border-blue-800',
      badgeText: 'text-blue-600 dark:text-blue-400',
      bulletColor: 'bg-blue-500',
    },
    medium: {
      border: 'border-l-yellow-500',
      iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      badgeBg: 'bg-yellow-50 dark:bg-yellow-900/20',
      badgeBorder: 'border-yellow-200 dark:border-yellow-800',
      badgeText: 'text-yellow-600 dark:text-yellow-400',
      bulletColor: 'bg-yellow-500',
    },
    high: {
      border: 'border-l-red-500',
      iconBg: 'bg-red-100 dark:bg-red-900/30',
      iconColor: 'text-red-600 dark:text-red-400',
      badgeBg: 'bg-red-50 dark:bg-red-900/20',
      badgeBorder: 'border-red-200 dark:border-red-800',
      badgeText: 'text-red-600 dark:text-red-400',
      bulletColor: 'bg-red-500',
    },
  },
};

// Hex color values for direct use
export const hexColors = {
  brown: {
    light: '#6B5B4F',
    DEFAULT: '#4A3F35',
    dark: '#3A2F25',
    darker: '#2C1810',
  },
  navy: {
    light: '#4A5568',
    DEFAULT: '#2D3748',
    dark: '#1A202C',
    darker: '#0F1419',
  },
};
