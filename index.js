//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');
// instantiate express
const app = express();
app.set('port', process.env.PORT || 4000);
const cors = require('cors');

//=============================================================================
// Middleware
//=============================================================================
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(cors({
    origin: '*'
}));
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));

//=============================================================================
// ROUTES
//=============================================================================
// Redirect
app.get('/', (req, res) => {
	res.redirect('/api/task');
});
/* START CONTROLLERS HERE */
const dateController = require('./controllers/dateController');
const taskController = require('./controllers/taskController');
app.use('/api/date/', dateController);
app.use('/api/task/', taskController);
/* END CONTROLLERS HERE */

//=============================================================================
// START SERVER
//=============================================================================
if(!module.parent){
	app.listen(app.get('port'), () => {
		console.log(`✅ PORT: ${app.get('port')} 🌟`);
	})
};
module.exports = app