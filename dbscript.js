// staff
db.createCollection("staff", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "staff",
      "required": ["staffId", "staffName", "staffAddress", "staffEmail", "staffPhone"],
      "properties": {
        "staffId": {
          "bsonType": "int"
        },
        "staffName": {
          "bsonType": "string"
        },
        "staffAddress": {
          "bsonType": "object",
          "title": "object",
          "required": ["dormNumber", "street", "subdistrict", "district", "province", "postalCode"],
          "properties": {
		  	"dormNumber": {
              "bsonType": "string"
            },
            "street": {
              "bsonType": "string"
            },
            "subdistrict": {
              "bsonType": "string"
            },
            "district": {
              "bsonType": "string"
            },
            "province": {
              "bsonType": "string"
            },
            "postalCode": {
              "bsonType": "string"
            }
          }
        },
        "staffEmail": {
          "bsonType": "string"
        },
        "staffPhone": {
          "bsonType": "string"
        }
      }
    }
  }
});
// user
db.createCollection("user", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "user",
      "required": ["userId", "username", "password", "email", "role", "createdOn", "updatedOn"],
      "properties": {
        "userId": {
          "bsonType": "int"
        },
        "username": {
          "bsonType": "string"
        },
        "password": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "role": {
          "enum": ['admin', 'user', 'guest']
        },
        "createdOn": {
          "bsonType": "date"
        },
        "updatedOn": {
          "bsonType": "date"
        }
      }
    }
  }
});
// dormitory
db.createCollection("dormitory", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "dormitory",
      "required": ["dormId", "dormName", "status", "address", "roomCount", "type", "size", "min_price", "max_price", "distance", "created_at", "updated_at", "building_facility", "room_facility", "count_facilities",  "score", "staffId"],
      "properties": {
        "dormId": {
          "bsonType": "int"
        },
        "dormName": {
          "bsonType": "string"
        },
        "status": {
          "enum": ['empty', 'full']
        },
        "address": {
          "bsonType": "object",
          "title": "object",
          "required": ["dormNumber","street", "subdistrict", "district", "province", "postalCode"],
          "properties": {
			"dormNumber": {
              "bsonType": "string"
            },
            "street": {
              "bsonType": "string"
            },
            "subdistrict": {
              "bsonType": "string"
            },
            "district": {
              "bsonType": "string"
            },
            "province": {
              "bsonType": "string"
            },
            "postalCode": {
              "bsonType": "string"
            }
          }
        },
        "roomCount": {
          "bsonType": "int"
        },
        "type": {
          "enum": ['all', 'f', 'm']
        },
        "size": {
          "bsonType": "decimal"
        },
        "min_price": {
          "bsonType": "decimal"
        },
        "max_price": {
          "bsonType": "decimal"
        },
        "distance": {
          "bsonType": "decimal"
        },
        "created_at": {
          "bsonType": "date"
        },
        "updated_at": {
          "bsonType": "date"
        },
        "image": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
        "building_facility": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
        "room_facility": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
		"count_facilities": {
          "bsonType": "int"
        },
		"score": {
          "bsonType": "int"
        },
        "staffId": {
          "bsonType": "int"
        }
      }
    }
  },
  "validationLevel": "strict",
  "validationAction": "error"
});
// favorite
db.createCollection("favorite", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "favorite",
      "required": ["favId", "dormId", "userId"],
      "properties": {
        "favId": {
          "bsonType": "int"
        },
        "dormId": {
          "bsonType": "int"
        },
        "userId": {
          "bsonType": "int"
        }
      }
    }
  }
});
// form
db.createCollection("form", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "form",
      required: ["formId", "form_date", "name", "email", "phone", "date_in", "date_out", "description", "staffId", "dormId", "userId"],
      properties: {
        formId: {
          bsonType: "int"
        },
        form_date: {
          bsonType: "date"
        },
        name: {
          bsonType: "string"
        },
        email: {
          bsonType: "string"
        },
        phone: {
          bsonType: "string"
        },
        date_in: {
          bsonType: "date"
        },
        date_out: {
          bsonType: "date"
        },
		description: {
          bsonType: "string"
        },
        staffId: {
          bsonType: "int"
        },
        dormId: {
          bsonType: "int"
        },
		userId: {
          bsonType: "int"
        }
      }
    }
  }
});