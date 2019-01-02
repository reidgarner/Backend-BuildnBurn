module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/movies-for-bnb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
