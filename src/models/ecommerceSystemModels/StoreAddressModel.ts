interface AddressCoordinatesType {
  lat: number;
  lng: number;
}

class StoreAddressModel {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  coordinates: AddressCoordinatesType;

  constructor(
    street: string,
    city: string,
    state: string,
    zipCode: string,
    coordinates: AddressCoordinatesType
  ) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.coordinates = coordinates;
  }
}

export default StoreAddressModel;
