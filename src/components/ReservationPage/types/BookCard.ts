/* export interface Booking {
  id: number;
  checkIn: Date;
  checkOut: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  hotelId: number;
  hotel: HotelClass;
}

export interface HotelClass {
  id: number;
  name: string;
  price: string;
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
}
 */

export interface Image {
  id: number;
  url: string;
}
export interface City {
  id: number;
  name: string;
  country: string;
  countryId: string;
}
export interface Hotel {
  id: number;
  name: string;
  price: string;
  images: Image[];
  city: City;
}
export interface Booking {
  id: number;
  checkIn: string;
  checkOut: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  hotelId: number;
  hotel: Hotel;
}
