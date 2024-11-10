export interface Person {
  id: string;
  name: string;
  phone: string;
  avatar_image: string;
  avatar_origin: string;
  email: string;
  quote: string;
  chuck: string;
  birthday: number;
  address: Address;
}

export interface Address {
  city: string;
  street: string;
  country: string;
}
