
export interface address{
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
}



export interface User {
    "id": string,
    "name": string,
    "username": string,
    "email": string,
    "address": address
      "geo": {
        "lat": string,
        "lng": string
      }

}