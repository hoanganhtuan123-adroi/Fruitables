const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: swaggerDocument,
  apis: ['./userRoutes.js'], // Update this path if necessary
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Import routes
const userRoutes = require('./userRoutes'); // Updated path
app.use('/users', userRoutes);

module.exports = app;
