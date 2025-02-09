// staffs
db.staff.insertMany([
  {
    "staffId": 1,
    "staffName": "Somchai Jaid",
    "staffAddress": {
	  "dormNumber": "111",
      "street": "123/4 Sukhumvit Road",
      "subdistrict": "Khlong Tan",
      "district": "Watthana",
      "province": "Bangkok",
      "postalCode": "10110"
    },
    "staffEmail": "somchai.jaid@gmail.com",
    "staffPhone": "0812345678"
  },
  {
    "staffId": 2,
    "staffName": "Ornthai Suayngam",
    "staffAddress": {
	  "dormNumber": "222",
      "street": "456/7 Rama IX Road",
      "subdistrict": "Suan Luang",
      "district": "Suan Luang",
      "province": "Bangkok",
      "postalCode": "10250"
    },
    "staffEmail": "ornthai.suayngam@gmail.com",
    "staffPhone": "0823456789"
  }
]);

// users
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

//  favorites
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

// forms
db.form.insertMany([
  {
    formId: 1,
    form_date: new Date("2025-01-15"),
    name: "somchai123",
    email: "somchai@example.com",
    phone: "0812345678",
    date_in: new Date("2025-01-20"),
    date_out: new Date("2025-01-25"),
	description: "good dormitory",
    staffId: 1,
    dormId: 1,
	userId: 1
  },
  {
    formId: 2,
    form_date: new Date("2025-01-16"),
    name: "arisa999",
    email: "arisa@example.com",
    phone: "0865432109",
    date_in: new Date("2025-01-22"),
    date_out: new Date("2025-01-28"),
	description: "what about your new dormitory?",
    staffId: 2,
    dormId: 2,
	userId: 2
  }
]);
  
// dormitorys
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
      
    ],
    "building_facility": ["CCTV","WiFi","24-hour security"],
    "room_facility": ["Air conditioning","Private bathroom","Desk"],
    "staffId": 1
});

