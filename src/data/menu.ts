export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  note?: 'confirm' | 'range';
}

export interface MenuCategory {
  id: string;
  label: string;
  subtitle: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'cold-beverages',
    label: 'Cold Beverages',
    subtitle: 'Cool refreshments & shakes',
    items: [
      { name: 'Fanta', price: 'Rs 90' },
      { name: 'Coke', price: 'Rs 90' },
      { name: 'Sprite', price: 'Rs 90' },
      { name: 'Lemon Soda', price: 'Rs 90' },
      { name: 'Soda', price: 'Rs 60' },
      { name: 'Mineral Water', price: 'Rs 25' },
      { name: 'Cold Coffee', price: 'Rs 130' },
      { name: 'Chocolate Milk Shake', price: 'Rs 180' },
      { name: 'Banana Milk Shake', price: 'Rs 220' },
      { name: 'Banana Lassi', price: 'Rs 200' },
      { name: 'Plain Lassi', price: 'Rs 180' },
      { name: 'Fresh Juice', price: 'Rs 240' },
      { name: 'Real Juice', price: 'Rs 140' },
      { name: 'Tonic Water', price: 'Rs 180' },
      { name: 'Red Bull', price: 'Rs 380' },
    ],
  },
  {
    id: 'hot-drinks',
    label: 'Hot Drinks',
    subtitle: 'Tea, coffee & comfort',
    items: [
      { name: 'Thakali Tea', price: 'Rs 140' },
      { name: 'Milk Tea', price: 'Rs 70' },
      { name: 'Lemon Tea', price: 'Rs 120' },
      { name: 'Coffee', price: 'Rs 90' },
      { name: 'Hot Lemon/Honey', price: 'Rs 70' },
      { name: 'Hot Chocolate', price: 'Rs 200' },
      { name: 'Milk', price: 'Rs 90' },
    ],
  },
  {
    id: 'soup',
    label: 'Soup',
    subtitle: 'Warm, comforting bowls',
    items: [
      { name: 'Vegetable Soup', price: 'Rs 150' },
      { name: 'Mushroom Soup', price: 'Rs 180' },
      { name: 'Chicken Soup', price: 'Rs 220' },
      { name: 'Chicken Mushroom Soup', price: 'Rs 250' },
    ],
  },
  {
    id: 'thakali-snacks',
    label: 'Thakali Snacks',
    subtitle: 'Traditional dry & spiced bites',
    items: [
      { name: 'Sukuti Tareko', price: 'Rs 550' },
      { name: 'Sukuti Sandeko', price: 'Rs 600' },
      { name: 'Kanchemba', price: 'Rs 220' },
      { name: 'Aaloo Kaptera', price: 'Rs 220' },
      { name: 'Aaloo Tareko', price: 'Rs 120' },
      { name: 'Sukuti Curry', price: 'Rs 600' },
      { name: 'Sukuti Aaloo Curry', price: 'Rs 480' },
      { name: 'Mutton Bhutuwa', price: 'Rs 350' },
      { name: 'Bandel Fried', price: 'Rs 400' },
      { name: 'Bandel Boiled', price: 'Rs 320' },
    ],
  },
  {
    id: 'snacks',
    label: 'Snacks',
    subtitle: 'Salads, fried bites & mains',
    items: [
      { name: 'Green Salad', price: 'Rs 130' },
      { name: 'Fruit Salad', price: 'Rs 180' },
      { name: 'Aaloo Sandeko', price: 'Rs 160' },
      { name: 'Bhatta Sandeko', price: 'Rs 220' },
      { name: 'Gundruk Sandeko', price: 'Rs 200' },
      { name: 'Peanut Sandeko / Bhatamas Sadeko', price: 'Rs 180' },
      { name: 'Fried Peanut', price: 'Rs 80' },
      { name: 'Fried Kaju', price: 'Rs 350' },
      { name: 'Masala Papad', price: 'Rs 200' },
      { name: 'Omlet Double', price: 'Rs 140' },
      { name: 'Omlet Single', price: 'Rs 70' },
      { name: 'Aloo Chips', price: 'Rs 220' },
      { name: 'Aloo Chips Chilly', price: 'Rs 280' },
      { name: 'Paneer Pakauda', price: 'Rs 300' },
      { name: 'Paneer Chilly / Mushroom Chilly', price: 'Rs 360' },
      { name: 'Chicken Fried', price: 'Rs 300' },
      { name: 'Chicken Chilly', price: 'Rs 360' },
      { name: 'Chicken Sandeko', price: 'Rs 320' },
      { name: 'Chicken Sausage', price: 'Rs 320' },
      { name: 'Sausage Chilly', price: 'Rs 380' },
      { name: 'Fish Fried / Fish Curry Big Bowl', price: 'Rs 320' },
      { name: 'Mutton Curry', price: 'Rs 320' },
      { name: 'Chicken Curry', price: 'Rs 280' },
      { name: 'Paneer / Egg Curry', price: 'Rs 220' },
      { name: 'Vegetable Curry', price: 'Rs 180' },
      { name: 'Momo Chicken', price: 'Rs 270' },
      { name: 'Momo Veg', price: 'Rs 200' },
      { name: 'Chowmein Chicken', price: 'Rs 300' },
      { name: 'Chowmein Egg', price: 'Rs 250' },
      { name: 'Chowmein Veg', price: 'Rs 220' },
      { name: 'Fried Rice Chicken', price: 'Rs 300' },
      { name: 'Fried Rice Egg', price: 'Rs 250' },
      { name: 'Fried Rice Veg', price: 'Rs 220' },
    ],
  },
  {
    id: 'special-set',
    label: 'Special Lunch / Dinner Set',
    subtitle: 'A complete Thakali experience',
    items: [
      {
        name: 'Non Veg',
        price: 'Rs 950',
        description: 'Thakali thali and snacks served with welcome drinks',
      },
      {
        name: 'Veg',
        price: 'Rs 850',
        description: 'Thakali thali and snacks served with welcome drinks',
      },
    ],
  },
  {
    id: 'thakali-nonveg-thali',
    label: 'Thakali Non-Veg Thali',
    subtitle: 'Hearty non-vegetarian platters',
    items: [
      { name: 'Chicken', price: 'Rs 520' },
      { name: 'Mutton/Fish', price: 'Rs 590' },
    ],
  },
  {
    id: 'thakali-veg-thali',
    label: 'Thakali Veg Thali',
    subtitle: 'Generous vegetarian platters',
    items: [
      {
        name: 'Thakali Veg Thali',
        price: 'Rs 420',
        description:
          'Rice, dal, 3 types of curry, achar, salad, papad, ghee and curd',
      },
    ],
  },
  {
    id: 'lunch-dinner-set',
    label: 'Lunch / Dinner Set',
    subtitle: 'Everyday value meals',
    items: [{ name: 'Lunch or Dinner Set', price: 'Rs 220' }],
  },
  {
    id: 'others',
    label: 'Other Thakali Meals',
    subtitle: 'Thalis, dhindo & à la carte curries',
    items: [
      {
        name: 'Thakali Non Veg Thali / Thakali Non Veg Dhindo Thali',
        price: 'Rs 520',
      },
      {
        name: 'Thakali Veg Thali / Thakali Veg Dhindo Thali',
        price: 'Rs 480',
      },
      {
        name: 'Thakali Plain Thali / Thakali Plain Dhindo Thali',
        price: 'Rs 420',
      },
      {
        name: 'Special Thakali Non Veg Thali / Dhindo Thali',
        price: 'Rs 750',
      },
      {
        name: 'Special Thakali Veg Thali / Dhindo Thali',
        price: 'Rs 680',
      },
      {
        name: 'Thakali Plain Thali',
        price: 'Rs 380',
        note: 'confirm',
      },
      {
        name: 'Special Thakali Non Veg Thali',
        price: 'Rs 400',
        note: 'confirm',
      },
      {
        name: 'Special Thakali Veg Thali',
        price: 'Rs 500',
        note: 'confirm',
      },
      { name: 'Mutton Curry', price: '—', note: 'confirm' },
      { name: 'Chicken Curry', price: '—', note: 'confirm' },
      { name: 'Fish Curry', price: '—', note: 'confirm' },
      { name: 'Sukuti Aaloo Curry', price: '—', note: 'confirm' },
      { name: 'Aloo-Bean Curry', price: '—', note: 'confirm' },
      { name: 'Paneer / Egg Curry', price: '—', note: 'confirm' },
      { name: 'Phaper Ko Roti / Puri / Paratha', price: '—', note: 'confirm' },
      { name: 'Chapati', price: '—', note: 'confirm' },
      { name: 'Plain Rice / Dhindo', price: '—', note: 'confirm' },
    ],
  },
  {
    id: 'alcohol',
    label: 'Alcohol',
    subtitle: 'Spirits, wine & beer — served separately',
    items: [
      { name: 'Uwa Jhwatte', price: 'Rs 270' },
      { name: '8848 Vodka', price: 'Rs 400' },
      { name: 'Kodono Jhwikhatte', price: 'Rs 150' },
      { name: 'Gin', price: 'Rs 350' },
      { name: 'Rice Beer (Chang)', price: 'Rs 120 / Rs 300', note: 'range' },
      { name: 'Khukuri Rum', price: 'Rs 400' },
      { name: 'Signature Green', price: 'Rs 450' },
      { name: 'Signature Red', price: 'Rs 550' },
      { name: 'Carlsberg Beer', price: 'Rs 600' },
      { name: 'Tuborg Beer', price: 'Rs 570' },
      { name: 'Gorkha Beer', price: 'Rs 550' },
      { name: 'Old Durbar Black', price: 'Rs 600' },
      { name: 'Old Durbar Red', price: 'Rs 500' },
      { name: 'Somersby', price: 'Rs 700' },
      { name: 'Red Wine', price: 'Rs 550' },
      { name: 'White Wine', price: 'Rs 550' },
      { name: 'Red Label', price: 'Rs 900' },
      { name: 'Black Label', price: 'Rs 1,200' },
      { name: 'Uwa Ko Brandy', price: 'Rs 250' },
      { name: 'Kodo Ko Raksi', price: 'Rs 130' },
      { name: 'Chivas Regal', price: 'Rs 1,000' },
      { name: 'Label/JD', price: 'Rs 1,000' },
    ],
  },
];
