const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cities.controllers');

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://tmaz-dev.us.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'http://localhost:3000/api/v1/cities',
  issuer: [`https://tmaz-dev.us.auth0.com/`],
  algorithms: ['RS256']
});

// Retrieve all employees
router.get('/', checkJwt, cityController.findAll);

// Create a new employee
router.post('/', checkJwt,cityController.create);

// Retrieve a single employee with id
router.get('/:id', checkJwt,cityController.findById);

// Update a employee with id
router.put('/:id', checkJwt,cityController.update);

// Delete a employee with id
router.delete('/:id', checkJwt,cityController.delete);

module.exports = router