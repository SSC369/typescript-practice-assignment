const ecommerceSystem = {
  store: {
    name: "TechGadgets Plus",
    locations: [
      {
        id: "LOC001",
        address: {
          street: "123 Tech Avenue",
          city: "Silicon Valley",
          state: "CA",
          zipCode: "94025",
          coordinates: {
            lat: 37.4419,
            lng: -122.1419,
          },
        },
        inventory: {
          total: 1500,
          categories: {
            electronics: 800,
            accessories: 500,
            software: 200,
          },
        },
      },
    ],
  },
  products: [
    {
      id: "PROD001",
      name: "Smart Watch Pro",
      category: "electronics",
      price: 299.99,
      specifications: {
        display: "AMOLED",
        battery: "48hrs",
        features: ["heart-rate", "GPS", "waterproof"],
        dimensions: {
          width: 44,
          height: 38,
          depth: 10.7,
        },
      },
      inventory: {
        inStock: true,
        quantity: 150,
        warehouses: [
          { id: "WH001", quantity: 100 },
          { id: "WH002", quantity: 50 },
        ],
      },
    },
  ],
};

// Social Media Platform
const socialMediaPlatform = {
  user: {
    id: "USR123",
    profile: {
      personalInfo: {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1990-05-15",
        contact: {
          email: "john.doe@email.com",
          phone: "+1-555-123-4567",
        },
      },
      settings: {
        privacy: {
          profileVisibility: "friends",
          showEmail: false,
          showPhone: false,
        },
        notifications: {
          email: true,
          push: true,
          frequency: "daily",
        },
      },
    },
    posts: [
      {
        id: "POST001",
        content: {
          text: "Hello World!",
          media: [
            {
              id: "001",
              type: "image",
              url: "https://example.com/image1.jpg",
              metadata: {
                size: "2MB",
                dimensions: { width: 1920, height: 1080 },
              },
            },
          ],
        },
        engagement: {
          likes: 42,
          comments: [
            {
              id: "CMT001",
              user: "USR456",
              text: "Great post!",
              timestamp: "2023-06-15T10:30:00Z",
              replies: [],
            },
          ],
          shares: 5,
        },
      },
    ],
  },
};

// Game Character System
const gameCharacter = {
  id: "CHAR001",
  basic: {
    name: "Dragon Slayer",
    class: "Warrior",
    level: 45,
    experience: 75000,
  },
  attributes: {
    physical: {
      strength: 85,
      dexterity: 65,
      constitution: 70,
    },
    mental: {
      intelligence: 45,
      wisdom: 50,
      charisma: 60,
    },
  },
  equipment: {
    weapon: {
      id: "WPN001",
      name: "Flame Sword",
      stats: {
        damage: 120,
        durability: 100,
        effects: [
          {
            type: "fire",
            damage: 25,
            duration: "5s",
          },
        ],
      },
    },
    armor: {
      head: { id: "ARM001", defense: 30, weight: 5 },
      chest: { id: "ARM002", defense: 50, weight: 15 },
      legs: { id: "ARM003", defense: 40, weight: 10 },
    },
  },
  inventory: {
    capacity: 100,
    currentWeight: 45,
    items: [
      {
        id: "ITM001",
        name: "Health Potion",
        quantity: 5,
        weight: 0.5,
        effects: {
          type: "heal",
          value: 50,
          duration: "instant",
        },
      },
    ],
  },
  skills: [
    {
      id: "SKL001",
      name: "Whirlwind",
      level: 3,
      damage: {
        base: 80,
        scaling: {
          strength: 0.6,
          dexterity: 0.3,
        },
      },
      cooldown: "30s",
    },
  ],
};
