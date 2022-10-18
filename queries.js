const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

const getWords = (request, response) => {
  pool.query('SELECT "text", "value" FROM "wordCloud"', (error, results) => {
    if (error) {
      throw error;
    }

    response.send({words: results.rows});
  });
}

const updateWords = (request, response) => {
  const { word } = request.body;

  pool.query('SELECT * FROM "wordCloud" WHERE "text" = $1', [word], (error, results) => {
    if (error) {
      throw error;
    }

    const data = results.rows;

    if (results.rowCount > 0) {
      pool.query('UPDATE "wordCloud" SET "value" = "value" + 1 WHERE "text" = $1', [data[0].text]);
    }
    else {
      pool.query('INSERT INTO "wordCloud" ("text", "value") VALUES ($1, 1)', [word]);
    }

    response.status(200).json(results.rows);
  });
}

const getInquiry = (request, response) => {
  pool.query('SELECT "name", "email", "phone", "message" FROM "inquiry" ORDER BY "id" ASC', (error, results) => {
    if (error) {
      throw error;
    }

    response.send({inquiries: results.rows});
  });
}

const submitInquiry = (request, response) => {
  const { name, email, phone, message } = request.body;
  console.log(request); 
    
  pool.query('INSERT INTO "inquiry" ("name", "email", "phone", "message") VALUES ($1, $2, $3, $4)', 
            [name, email, phone, message], (error, results) => {
    if (error) {
      throw error;
    }

    response.status(200).send("finished");
  }).catch(e => {
    response.status(503).send(e);
  });
}

module.exports = {
    getWords,
    updateWords,
    submitInquiry,
    getInquiry,
}