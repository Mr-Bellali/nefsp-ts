// import { describe, it, expect, beforeAll, afterAll } from 'vitest';
// import axios from 'axios';
// import faker from 'faker';

// const apiUrl = 'http://localhost:3000/api/v1';
// let token: string;
// let password: string;

// describe('Seller Integration Tests', () => {
//   beforeAll(async () => {
//     // Step 1: Seller Sign Up
//     const storeName = faker.company.companyName();
//     const storeAddress = faker.address.streetAddress();
//     const storeType = faker.commerce.department();
//     const email = faker.internet.email();

//     // Using a utility function to create a random password
//     password = faker.internet.password(8);

//     const signUpResponse = await axios.post(`${apiUrl}/signup`, {
//       storename: storeName,
//       storeaddress: storeAddress,
//       storetype: storeType,
//       email: email,
//     });

//     expect(signUpResponse.status).toBe(201);
//     expect(signUpResponse.data.message).toBe('User created successfully');
//   });

//   it('should log in the seller', async () => {
//     // Step 2: Seller Login
//     const loginResponse = await axios.post(`${apiUrl}/login`, {
//       email: faker.internet.email(), // Use the same email used during sign up
//       password: password,             // Use the generated password
//     });

//     expect(loginResponse.status).toBe(200);
//     expect(loginResponse.data).toHaveProperty('token');
    
//     // Store the token for future requests
//     token = loginResponse.data.token;
//   });

//   it('should create a product', async () => {
//     // Step 3: Create Product
//     const productResponse = await axios.post(
//       `${apiUrl}/seller/product`,
//       {
//         productName: faker.commerce.productName(),
//         originalPrice: faker.commerce.price(),
//         expirationDate: faker.date.future().toISOString(),
//         sellingPrice: faker.commerce.price(),
//         stockQte: faker.datatype.number({ min: 1, max: 100 }),
//         productDescription: faker.commerce.productDescription(),
//         idCategory: faker.datatype.number({ min: 1, max: 10 }), // Assuming categories exist
//         idProfile: 'sellerProfileId', // Replace with a valid profile ID if needed
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data', // Adjust if using form data
//         },
//       }
//     );

//     expect(productResponse.status).toBe(201);
//     expect(productResponse.data.message).toBe('Product added successfully');
//   });

//   afterAll(async () => {
//     // Cleanup code if necessary (e.g., delete test user and product)
//   });
// });
