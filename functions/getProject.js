require('dotenv').config();
const {
	DATABASE_URL,
	SUPABASE_SERVICE_API_KEY
} = process.env;

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://bryyamhedpxgkbszroci.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjAzNzc5NywiZXhwIjoxOTUxNjEzNzk3fQ.fmZKPoSQWxkH2QXPs0-ETr7lgwhZzio42WeI-Z9AHKw');


exports.handler = async event => {

    const pwd = JSON.parse(event.body);


    // Insert a row
    let { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        .eq('name', pwd.pwd)



    if( notes.length > 0 && notes) { 
        if( notes[0].isUsed ) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'This Password has been used',
                    loginAllowed: false
                })
            }
        }
        else{
            let res = await supabase
                        .from('notes')
                        .update({ 'isUsed': true })
                        .match({ 'name': pwd.pwd })

            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'You are allowed to login',
                    loginAllowed: true
                    
                })
            }
        }
        
    }
    else{
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Password is not correct',
                loginAllowed: false

            })
        }
    }
    console.log(notes, error);
  }