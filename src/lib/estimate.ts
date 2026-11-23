import { ESTIMATOR } from '../data/estimator';

export type Selection = {
  platform: string;
  size: string;
  design: string;
  features: string[];
};

export type Estimate = {
  low: number;
  high: number;
  weeksLow: number;
  weeksHigh: number;
};

const round = (n: number) => Math.round(n / ESTIMATOR.roundTo) * ESTIMATOR.roundTo;

export function calculate(sel: Selection): Estimate {
  const size = ESTIMATOR.sizes.find((s) => s.id === sel.size) ?? ESTIMATOR.sizes[0];
  const platform = ESTIMATOR.platforms.find((p) => p.id === sel.platform) ?? ESTIMATOR.platforms[0];
  const design = ESTIMATOR.design.find((d) => d.id === sel.design) ?? ESTIMATOR.design[0];

  const featureHours = ESTIMATOR.features
    .filter((f) => sel.features.includes(f.id))
    .reduce((sum, f) => sum + f.hours, 0);

  const hours = (size.hours + featureHours) * platform.multiplier * design.multiplier;
  const cost = hours * ESTIMATOR.hourlyRate;

  return {
    low: round(cost * ESTIMATOR.rangeLow),
    high: round(cost * ESTIMATOR.rangeHigh),
    weeksLow: Math.max(1, Math.round((hours * ESTIMATOR.rangeLow) / ESTIMATOR.hoursPerWeek)),
    weeksHigh: Math.max(2, Math.ceil((hours * ESTIMATOR.rangeHigh) / ESTIMATOR.hoursPerWeek)),
  };
}

export function formatUSD(value: number, locale: string): string {
  return new Intl.NumberFormat(locale === 'sr' ? 'sr-Latn-RS' : 'en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}