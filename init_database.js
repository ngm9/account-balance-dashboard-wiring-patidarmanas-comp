// MongoDB initialization script for Utkrusht Skill Wallet demo
// This script runs inside the MongoDB container on first startup.

// Switch to (or create) the skillwallet database
var db = db.getSiblingDB("skillwallet");

// Drop existing data for a clean start (safe for demo environments)
db.accounts.drop();

// Insert realistic sample account documents
// Each account represents a user's learning credits wallet within Utkrusht.
db.accounts.insertMany([
  {
    userId: "user-alice-001",
    name: "Alice Kumar",
    email: "alice.kumar@example.com",
    balance: 1200,
    currency: "INR",
    status: "active",
    createdAt: new Date()
  },
  {
    userId: "user-bob-002",
    name: "Bob Singh",
    email: "bob.singh@example.com",
    balance: 850,
    currency: "INR",
    status: "active",
    createdAt: new Date()
  },
  {
    userId: "user-charlie-003",
    name: "Charlie Rao",
    email: "charlie.rao@example.com",
    balance: 500,
    currency: "USD",
    status: "inactive",
    createdAt: new Date()
  },
  {
    userId: "user-diana-004",
    name: "Diana Patel",
    email: "diana.patel@example.com",
    balance: 3000,
    currency: "USD",
    status: "active",
    createdAt: new Date()
  },
  {
    userId: "user-eli-005",
    name: "Eli Verma",
    email: "eli.verma@example.com",
    balance: 150,
    currency: "INR",
    status: "active",
    createdAt: new Date()
  },
  {
    userId: "user-fiona-006",
    name: "Fiona Das",
    email: "fiona.das@example.com",
    balance: 2200,
    currency: "INR",
    status: "active",
    createdAt: new Date()
  },
  {
    userId: "user-gaurav-007",
    name: "Gaurav Menon",
    email: "gaurav.menon@example.com",
    balance: 975,
    currency: "USD",
    status: "inactive",
    createdAt: new Date()
  },
  {
    userId: "user-hina-008",
    name: "Hina Shah",
    email: "hina.shah@example.com",
    balance: 4100,
    currency: "INR",
    status: "active",
    createdAt: new Date()
  },
  {
    userId: "user-ivar-009",
    name: "Ivar Nair",
    email: "ivar.nair@example.com",
    balance: 640,
    currency: "USD",
    status: "active",
    createdAt: new Date()
  },
  {
    userId: "user-jyoti-010",
    name: "Jyoti Reddy",
    email: "jyoti.reddy@example.com",
    balance: 50,
    currency: "INR",
    status: "inactive",
    createdAt: new Date()
  }
]);

// Create a simple single-field index on email for faster lookups by email address.
// Candidates can add additional indexes (for example, on userId) in the Mongoose schema.
db.accounts.createIndex({ email: 1 });
