import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { passwordTest } from '../controllers/auth'
const apiUrl = 'http://localhost:3000/api/v1';
let token: string;


const sellerCredintials = {
    storeName : faker.company.name(),
    storeAddress: faker.location.streetAddress(),
    storeType:faker.commerce.department(),
    email:faker.internet.email()
}

describe('Seller Integration Tests', () => {
  beforeAll(async () => {
    // Step 1: Seller Sign Up
    const storeName = sellerCredintials.storeName;
    const storeAddress = sellerCredintials.storeAddress;
    const storeType = sellerCredintials.storeType;
    const email = sellerCredintials.email;

    // Using a utility function to create a random password

   try {
     const signUpResponse = await axios.post(`${apiUrl}/signup`, {
       storename: storeName,
       storeaddress: storeAddress,
       storetype: storeType,
       email: email,
     });
 
     expect(signUpResponse.status).toBe(201);
     expect(signUpResponse.data.message).toBe('User created successfully');
   } catch (error: any) {
        console.error('Error:', error.message);
   }
  });

  it('should log in the seller', async () => {
    // Step 2: Seller Login
    const loginResponse = await axios.post(`${apiUrl}/login`, {
      email: sellerCredintials.email, 
      password: passwordTest,             
    });

    expect(loginResponse.status).toBe(200);
    expect(loginResponse.data).toHaveProperty('token');
    
    // Store the token for future requests
    token = loginResponse.data.token;
  });

  it('should create a product', async () => {
    // Step 3: Create Product
    const productResponse = await axios.post(
      `${apiUrl}/seller/product`,
      {
        productName: faker.commerce.productName(),
        originalPrice: faker.commerce.price(),
        expirationDate: faker.date.future().toISOString(),
        sellingPrice: faker.commerce.price(),
        stockQte: faker.number.int,
        productDescription: faker.commerce.productDescription(),
        idCategory: 1, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    expect(productResponse.status).toBe(201);
    expect(productResponse.data.message).toBe('Product added successfully');
  });

  afterAll(async () => {
  });
});


