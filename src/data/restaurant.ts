export interface GoogleReview {
  id: string;
  reviewer: string;
  rating: number;
  date: string;
  comment: string;
  avatarInitial: string;
}

export const restaurantInfo = {
  name: 'Pokhara Thakali Kitchen',
  tagline: 'Authentic Thakali Flavors, Served with Heart.',
  subheadline: 'Traditional Nepali and Thakali cuisine in Pokhara.',
  nepaliTagline: 'परम्परागत ठकाली भोजन',
  address: '6X46+9H8, Gauri Marg, Pokhara, Gandaki Province 33700, Nepal',
  shortAddress: '6X46+9H8, Gauri Marg, Pokhara',
  phone: '061-457379',
  phoneHref: 'tel:061457379',
  priceRange: 'Rs 500–1,000 per person',
  rating: 4.0,
  ratingMax: 5,
  totalReviews: '1,022',
  reviewsCount: 1022,
  openingHours: 'Open · Closes 11 PM',
  googleMapsUrl:
    'https://www.google.com/maps?vet=10CAAQoqAOahcKEwiA9L2vwNKWAxUAAAAAHQAAAAAQCA..i&sca_esv=d777865217e22ae8&udm=local&pvq=CgwvZy8xcHAydGwyZzgiHwoZZmFtb3VzIHRoYWthbGkgcmVzdGF1cmFudBACGAM&lqi=CiRmYW1vdXMgdGhha2FsaSByZXN0YXVyYW50IGluIHBva2hhcmEiM1IxL2dlby90eXBlL2VzdGFibGlzaG1lbnRfcG9pL3BvcHVsYXJfd2l0aF90b3VyaXN0c0jIk-Ss1JWAgAhaMBAAEAEQAhgBGAQiJGZhbW91cyB0aGFrYWxpIHJlc3RhdXJhbnQgaW4gcG9raGFyYZIBCnJlc3RhdXJhbJ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=np&sa=X&geocode=KWlj3goblZU5Mb3kxr5zrz0W&daddr=6X46%2B9H8,+Gauri+Marg,+Pokhara,+Gandaki+Province+33700',
  conceptDisclaimer: 'Website concept — created as a design demonstration.',
};

export const reviews: GoogleReview[] = [
  {
    id: 'rev-1',
    reviewer: 'Rana Jyoti',
    rating: 5,
    date: '5 months ago',
    comment:
      'We discovered this place while browsing through reviews and decided to give it a try — and wow, we were completely bowled over!',
    avatarInitial: 'R',
  },
  {
    id: 'rev-2',
    reviewer: 'Thanamas Pongmala',
    rating: 5,
    date: '2 months ago',
    comment:
      'A good place to try authentic Nepali Thakali food. The meal was flavorful, filling, and gave a nice local experience. The portions were satisfying, and the overall taste was enjoyable.',
    avatarInitial: 'T',
  },
  {
    id: 'rev-3',
    reviewer: 'Sk. Md. Rajwanul Islam',
    rating: 5,
    date: 'Edited 3 months ago',
    comment:
      'Hands down the BEST authentic Thakali Thali we had during our entire 15-day trip in Nepal! The environment is spotless, the service is wonderful, and the flavors are absolute perfection.',
    avatarInitial: 'S',
  },
  {
    id: 'rev-4',
    reviewer: 'Jurian Andika',
    rating: 5,
    date: '4 months ago',
    comment:
      'The ambience outdoor and indoor is very nice. Their special menu is any kind of Thakali. I tried their mutton version and it taste great.',
    avatarInitial: 'J',
  },
  {
    id: 'rev-5',
    reviewer: 'Nikesh Kathayat',
    rating: 5,
    date: '1 year ago',
    comment:
      'Delicious food with authentic flavors at Pokhara Thakali Kitchen, located on Street 7, Lakeside, Pokhara! The mutton curry was fresh and incredibly tasty, and the Thakali food was spot on.',
    avatarInitial: 'N',
  },
  {
    id: 'rev-6',
    reviewer: 'Shraddha Uprety',
    rating: 5,
    date: '8 months ago',
    comment:
      'Excellent place. After visiting several thakali places over years in pokhara, this place definitely stands out. Food is always fresh, sumptuous... they have both indoor and…',
    avatarInitial: 'S',
  },
  {
    id: 'rev-7',
    reviewer: 'Sibasis panigrahy',
    rating: 5,
    date: '2 years ago',
    comment:
      'Love the food and the staff behaviour. Fortunately we went to the restaurant at 3:30 and still they serve hot food with the ghee. The ghee tastes amazing as well as the other dish.',
    avatarInitial: 'S',
  },
];
