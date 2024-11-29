//STAFFS
db.staff.insertMany([
  {
    "staffId": 1,
    "staffName": "Somchai Jaid",
    "address": {
	  "dormNumber": "111",
      "street": "123/4 Sukhumvit Road",
      "subdistrict": "Khlong Tan",
      "district": "Watthana",
      "province": "Bangkok",
      "postalCode": "10110"
    },
    "email": "somchai.jaid@gmail.com",
    "phone": "0812345678"
  },
  {
    "staffId": 2,
    "staffName": "Ornthai Suayngam",
    "address": {
	  "dormNumber": "222",
      "street": "456/7 Rama IX Road",
      "subdistrict": "Suan Luang",
      "district": "Suan Luang",
      "province": "Bangkok",
      "postalCode": "10250"
    }
  }
]);

// USERS
db.user.insertMany([
    {
      "userId": 1,
      "username": "john_doe",
      "password": "password123",
      "email": "john.doe@example.com",
      "role": "admin",
      "createdOn": new Date("2024-05-11T12:00:00Z"), 
      "updatedOn": new Date("2024-05-31T12:00:00Z")  
    },
    {
      "userId": 2,
      "username": "jane_smith",
      "password": "securePass456",
      "email": "jane.smith@example.com",
      "role": "user",
      "createdOn": new Date("2024-06-15T12:00:00Z"), 
      "updatedOn": new Date("2024-07-08T12:00:00Z")  
    }
  ]);

//  FAVORITES
  db.favorite.insertMany([
    {
      "favId": 1,
      "dormId": 1, 
      "userId": 1      
    },
    {
      "favId": 2,
      "dormId": 2, 
      "userId": 2      
    }
  ]);
  
//DORMITORIES
db.dormitory.insertOne({
    "dormId": 1,
    "name": "The Cozy Dorm",
    "status": "empty",
    "address": {
	  "dormNumber": "111",
      "street": "Sukhumvit Road",
      "subdistrict": "Khlong Toei",
      "district": "Khlong Toei",
      "province": "Bangkok",
      "postalCode": "10110"
    },
    "roomCount": 20,
    "type": "all",
    "size": Decimal128.fromString("25.5"), // ใช้ Decimal128
    "min_price": Decimal128.fromString("3000.00"), // ใช้ Decimal128
    "max_price": Decimal128.fromString("5000.00"), // ใช้ Decimal128
    "distance": Decimal128.fromString("1.5"), // ใช้ Decimal128
    "created_at": new Date("2024-11-15T12:00:00Z"),
    "updated_at": new Date("2024-11-04T12:00:00Z"),
    "image": [
      "https://example.com/image1.jpg"
    ],
    "building_facility": ["CCTV","WiFi","24-hour security"],
    "room_facility": ["Air conditioning","Private bathroom","Desk"],
    "staffId": 1
});


db.dormitory.insertOne({
    "dormId": 2,
    "name": "Student Residence",
    "status": "full",
    "address": {
	  "dormNumber": "222",
      "street": "Phahonyothin Road",
      "subdistrict": "Chatuchak",
      "district": "Chatuchak",
      "province": "Bangkok",
      "postalCode": "10900"
    },
    "roomCount": 30,
    "type": "f",
    "size": Decimal128.fromString("20.0"), // ใช้ Decimal128
    "min_price": Decimal128.fromString("4000.00"), // ใช้ Decimal128
    "max_price": Decimal128.fromString("6000.00"), // ใช้ Decimal128
    "distance": Decimal128.fromString("2.0"), // ใช้ Decimal128
    "created_at": new Date("2024-08-10T12:00:00Z"),
    "updated_at": new Date("2024-09-01T12:00:00Z"),
    "image": [
      "https://example.com/image3.jpg"
    ],
    "building_facility": [
      "Gym",
      "Laundry",
      "Study room"
    ],
    "room_facility": [
      "Wardrobe",
      "Refrigerator",
      "WiFi"
    ],
    "staffId": 2
  });