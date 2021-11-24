const express = require('express');
const token = "fa2be670-461f-4667-bf7a-72bd32cbc10f";

const userController = {
    postForm: async(request, response) => {
        try {
            const { bundle } = request.body;

            

            //working message
        app.get("/", async (req, res) => {
	        try {
                console.log("inside backend", bundle)
		        const api = await axios({
			    url: "https://cdr-cognizant-dev.us-east.philips-healthsuite.com/store/fhir/2de9fbaa-058d-4f3f-ba9d-21bcdc1e89a4",
			    method: "post",
                data: bundle,
                headers: {
                    "Authorization":`Bearer ${token}`,
                      // "mode": "no-cors",
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "api-version": "1",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                    "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                }
		});
        console.log("Response: ",res.data);
		return response.status(201).json(res.data);
	} catch (err) {
		return response.status(500).json({ message: err });
	}
});

        }
        catch (error) {
            return response.json({message: error.message})
        }
    }
}

module.exports = {userController};