export const ESTIMATOR = {
  hourlyRate: 25, // USD
  hoursPerWeek: 30, // used for the timeline
  rangeLow: 0.85, // low end of the range = 85% of the estimate
  rangeHigh: 1.25, // high end = 125%
  roundTo: 100, // prices rounded to nearest $100

  platforms: [
    { id: 'ios', multiplier: 1 },
    { id: 'android', multiplier: 1 },
    { id: 'both', multiplier: 1.15 }, // Flutter = one codebase, small extra for 2 stores
  ],
  sizes: [
    { id: 'simple', hours: 80 },
    { id: 'medium', hours: 180 },
    { id: 'complex', hours: 350 },
  ],
  features: [
    { id: 'auth', hours: 16 },
    { id: 'backend', hours: 24 },
    { id: 'payments', hours: 20 },
    { id: 'push', hours: 10 },
    { id: 'chat', hours: 30 },
    { id: 'maps', hours: 16 },
    { id: 'ai', hours: 24 },
    { id: 'admin', hours: 40 },
    { id: 'analytics', hours: 6 },
    { id: 'i18n', hours: 8 },
  ],
  design: [
    { id: 'have', multiplier: 1 },
    { id: 'need', multiplier: 1.25 },
  ],

  defaults: {
    platform: 'both',
    size: 'medium',
    design: 'need',
    features: ['auth', 'backend'],
  },
};