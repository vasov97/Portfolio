export type Testimonial = {
  name: string;
  project?: string;
  quote: string | { en: string; sr: string };
  rating: number;
};

/**
 * Exact review text from Upwork. Reviews stay in their original language.
 * Optionally add a Serbian version: quote: { en: '...', sr: '...' }
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Oliver Ruby',
    project: 'FlutterFlow & Supabase',
    quote:
      "I had the pleasure of working with Stefan on a project involving FlutterFlow and Supabase, and I couldn't be more satisfied with the experience. Stefan demonstrated exceptional technical expertise and a strong ability to teach complex concepts in a clear and approachable way.",
    rating: 5,
  },
  {
    name: 'Gabriel Saint-Martin',
    quote:
      'Stefan is a very talented and organized designer, he works quickly and is attentive to details. I worked with him many times and will work with him again, 10/10 would recommend.',
    rating: 5,
  },
  {
    name: 'Gabriel Saint-Martin',
    quote:
      'Amazing freelancer, great designer to work with, very attentive and well organized. 10/10 would recommend.',
    rating: 5,
  },
  {
    name: 'Kimberly Kuya',
    quote: 'Stefan is very helpful and a great person to work with.',
    rating: 5,
  },
];