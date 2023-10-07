import citrus from "../Content/Images/sticker_citrus.webp"
import organic from "../Content/Images/sticker_original.webp"
import energy from "../Content/Images/sticker.webp"
import raspberry from "../Content/Images/sticker_raspberry.webp"
import peach from "../Content/Images/sticker_peach.webp"

export const drinks = [
  {
    id: "a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2",
    name: "Energy Drink Yerbee Yerba Mate Kombucha",
    taste: "Original",
    description: "Představujeme revoluční energetický Kombucha nápoj, který kombinuje vlastnosti yerba mate a prospěšné probiotiky Kombuchy.", 
    price: "43 Kč",
    SKU: "D0121",
    reviews: ["5909796d-5030-4e36-adec-68b8f9ec2d96"],
    image: ["a345455a-76c0-4b34-954a-b38dbf654616"],
  },
  {
    id: "bb8afbec-2fec-491f-93e9-7f13950dd80b",
    name: "Energy Drink Yerbee Yerba Mate Kombucha",
    taste: "Ananas",
    description: "Představujeme revoluční energetický Kombucha nápoj, který kombinuje vlastnosti yerba mate a prospěšné probiotiky Kombuchy.", 
    price: "43 Kč",
    SKU: "D0122",
    reviews: ["5909796d-5030-4e36-adec-68b8f9ec2d96"],
    image: ["a345455a-76c0-4b34-954a-Ssjpsdoj69999"],
  },
  {
    id: "982bfbce-c5e0-41a0-9f99-d5c20ecee49d",
    name: "Yerba Mate Kombucha",
    taste: "Organic",
    description: "Our yerba mate kombucha is certified organic, made without chemicals or preservatives, with only natural ingredients: organic yerba mate brew 92% (water, yerba mate), organic cane sugar and kombucha culture.",
    price: "433 Kč",
    SKU: "D0121",
    reviews: ["5909796d-5030-4e36-adec-68b8f9ec2d96"],
    image: ["a345455a-76c0-fd65-954a-b38dbf310789"],
  },
  {
    id: "d9241927-09e1-44f3-8986-a76346869037",
    name: "Yerba Mate Kombucha",
    description: "Yerba mate kombucha with a refreshing citrus flavor. Our kombucha is certified organic, made only with natural ingredients: organic yerba mate brew 92% (water, yerba mate), organic cane sugar, natural citrus aroma and live kombucha culture.",
    taste: "Citrus",
    price: "43 Kč",
    SKU: "D0121",
    reviews: ["5909796d-5030-4e36-adec-68b8f9ec2d96"],
    image: ["a345455a-eg44-4b34-954a-b38dbf310789"],
  },
  {
    id: "381b0c31-6360-43ff-80d1-581a116159d8",
    name: "Yerba Mate Kombucha",
    taste: "Peach",
    description: "Yerba mate kombucha with peach flavor. Our kombucha is certified organic, made only with natural ingredients: organic yerba mate brew 92% (water, yerba mate), organic cane sugar, natural peach aroma and live kombucha culture.",
    price: "43 Kč",
    SKU: "D0121",
    reviews: ["2345677d-5030-4e36-adec-68b8f9ec2d56"],
    image: ["rerer333-76c0-4b34-954a-b38dbf310789"],
  },
  {
    id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
    name: "Yerba Mate Kombucha",
    taste: "Raspberry",
    description:  "Yerba mate kombucha with raspberry flavor. Our kombucha is certified organic, made only with natural ingredients: organic yerba mate brew 92% (water, yerba mate), organic cane sugar, natural raspberry aroma and live kombucha culture.", 
    price: "43 Kč",
    SKU: "D0121",
    reviews: ["2345677d-5030-4e36-adec-68b8f9ec2d56", "2345677d-ghg4-4e36-adec-68b8f9ec2d56"],
    image: ["a3gh6jt6-76c0-4b34-954a-b38dbf310789"],
  },
];

export const reviews = [
  {
    id: "5909796d-5030-4e36-adec-68b8f9ec2d96",
    userId: "a304959a-76c0-4b34-954a-b38dbf310360",
    text: "Not bad",
    rating: 5,
  },
  {
    id: "2345677d-5030-4e36-adec-68b8f9ec2d56",
    userId: "a345455a-76c0-4b34-954a-b38dbf310789",
    text: "Not bad",
    rating: 4,
  },
  {
    id: "2345677d-ghg4-4e36-adec-68b8f9ec2d56",
    userId: "a345455a-5687-4b34-954a-b38dbf310789",
    text: "Not bad",
    rating: 3,
  },
  {
    id: "2345677d-ghg4-4e36-ddsd-68b8f9ec2d56",
    userId: "a345455a-5687-sdfs-954a-b38dbf310789",
    text: "Not bad",
    rating: 2,
  },
];

export const users = [
  {
    id: "a304959a-76c0-4b34-954a-b38dbf310360",
    name: "Antony",
  },
  {
    id: "a345455a-76c0-4b34-954a-b38dbf310789",
    name: "Marta",
  },
  {
    id: "a345455a-5687-4b34-954a-b38dbf310789",
    name: "Olga",
  },
];

export const images = [
  {
    id: "a345455a-76c0-4b34-954a-b38dbf654616",
    src: energy,
    alt: "energy",
    
  },
  {
    id:"a345455a-76c0-4b34-954a-Ssjpsdoj69999",
    src: energy,
    alt: "energy",
  },
  {
    id:"a345455a-76c0-fd65-954a-b38dbf310789",
    src: organic,
    alt: "organic",
  },
  {
    id:"a345455a-eg44-4b34-954a-b38dbf310789",
    src: citrus,
    alt: "citrus",
  },
  {
    id:"rerer333-76c0-4b34-954a-b38dbf310789",
    src: peach,
    alt: "peach",
  },
  {
    id:"a3gh6jt6-76c0-4b34-954a-b38dbf310789",
    src: raspberry,
    alt: "raspberry",
  },
]