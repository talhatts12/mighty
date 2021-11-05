require('dotenv').config();
const {
	DATABASE_URL,
	SUPABASE_SERVICE_API_KEY
} = process.env;

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);


exports.handler = async event => {

    // Insert a row
      const { data, error } = await supabase
          .from('notes')
           .insert([
               { name: 'I need to not forget this' },
          ]);
  
    // Did it work?
    console.log(data, error);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello  World 1'
        })
    }
  }