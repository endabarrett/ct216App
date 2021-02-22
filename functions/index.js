const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
admin.initializeApp();

exports.postcomments = functions.https.onRequest((request, response) => {
   // 1. Receive comment data in here from user POST request
   // 2. Connect to our Firestore database
	cors(request, response, () => {
		return admin.firestore().collection('comments').add(request.body).then(() => {
			response.send("Saved in the database");
		});
	});
});

exports.getcomments = functions.https.onRequest((request, response) => {

	cors(request, response, () => {
		// 1. Connect to our Firestore database
		let myData = [];
		admin.firestore().collection('comments').get().then((snapshot) => {

			if (snapshot.empty) {
				console.log('No matching documents.');
				response.send('No data in database');
				return;
			}

			snapshot.forEach(doc => {
				let docObj = {};
				docObj.id = doc.id;
				myData.push(Object.assign(docObj, doc.data()));
			});

			// 2. Send data back to client
			response.send(myData);
		})
	});
});

exports.deletecomment = functions.https.onRequest((request, response) => {
	cors(request, response, () => {
		// your function body here - use the provided req and res from cors
		admin.firestore().collection("comments").doc(request.query.id).delete().then(function() 	{
			response.send("Document successfully deleted!");
		})
	});
});


