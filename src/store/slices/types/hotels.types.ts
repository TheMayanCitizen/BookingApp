export interface Hotel {
  id: number;
  name: string;
  description: string;
  price: string;
  address: string;
  lat: string;
  lon: string;
  createdAt: Date;
  updatedAt: Date;
  cityId: number;
  rating: string;
  images: Image[];
  city: City;
}

export interface City {
  id: number;
  name: string;
  country: string;
  countryId: string;
}

export interface Image {
  id: number;
  url: string;
  hotelId: number;
}
