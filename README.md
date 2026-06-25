### Task Overview
This repository contains a minimal "Skill Wallet" application used by Utkrusht to track learning credits for user accounts. The React frontend currently renders a dashboard with hardcoded account data, and the Node.js/Express backend controllers return mock JSON instead of talking to MongoDB. Your task is to connect the pieces so real data flows end-to-end: replace mock data in the Express controllers with real Mongoose queries, and wire the React components to call those API endpoints so the UI shows live data from MongoDB instead of placeholders.

### Objectives
- Replace mock/hardcoded data in the Express controllers with real Mongoose queries that read from and write to the `accounts` collection.
- Wire the React dashboard component to call the live backend API so the UI displays real account data from MongoDB instead of static arrays.
- Implement basic loading and error handling states in the React component while fetching and submitting data.
- Add a single-field MongoDB index on the most frequently queried field to support efficient lookups.
- Ensure the full data flow works end-to-end: MongoDB → Express API → React UI.

### How to Verify
- Open the React application in a browser and confirm that the account list is populated with data coming from MongoDB, not from hardcoded arrays.
- Use a MongoDB client.accounts` collection and verify that new accounts created from the React form appear in the database.
- Use Postman or `curl` to call the API endpoints and verify that the JSON responses reflect the actual documents stored in MongoDB.
- Confirm that the React UI shows a loading indicator while data is being fetched and an error message if an API call fails.
- In MongoDB Compass, open the `accounts` collection and check the Indexes tab to verify that a single-field index exists on the field you chose as the most commonly queried.

### Helpful Tips
- Consider how the existing Express routes under `/api/accounts` map to the operations you would normally perform on an `accounts` collection.
- Consider which Mongoose model methods best match the current controller responsibilities.
- Think about what fields from the `Account` model are required when creating a new account document so that MongoDB inserts are valid.
- Think about how to shape API responses so the React components can easily render account name, email, balance, and currency without extra transformation.
- Explore the `backend/src/models/Account.js` file to understand the fields available for each account document.
