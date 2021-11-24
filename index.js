// const { Console } = require('console');
const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || 4200;
// const connectDB = require('./config/db.js');
require('dotenv').config();
const token = "f8d20037-2c76-4851-8f6e-9655eef05912";

//DB connection
// connectDB();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

var initialState = {
    "type": "transaction",
    "entry": [
      {
        "fullUrl": "Patient/MRN090791",
        "resource": {
          "resourceType": "Patient",
          "extension": [
            {
              "extension": [
                {
                  "url": "NCT",
                  "valueString": "NCT12345678"
                },
                {
                  "url": "period",
                  "valuePeriod": {
                    "start": "2021-11-09T00:00:00+00:00",
                    "end": "2021-11-09T23:59:59+00:00"
                  }
                },
                {
                  "url": "reason",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://snomed.info/sct",
                        "code": "166001",
                        "display": "Behavioral therapy"
                      }
                    ]
                  }
                }
              ],
              "url": "http://hl7.org/fhir/StructureDefinition/patient-clinicalTrial"
            },
            {
              "extension": [
                {
                  "url": "NCT",
                  "valueString": "NCT11223344"
                },
                {
                  "url": "period",
                  "valuePeriod": {
                    "start": "2021-11-10T00:00:00+00:00",
                    "end": "2021-11-10T23:59:59+00:00"
                  }
                },
                {
                  "url": "reason",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://snomed.info/sct",
                        "code": "342002",
                        "display": "Amobarbital interview"
                      }
                    ]
                  }
                }
              ],
              "url": "http://hl7.org/fhir/StructureDefinition/patient-clinicalTrial"
            }
          ],
          "identifier": [
            {
              "use": "usual",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                    "code": "MR",
                    "display": "Medical record number"
                  }
                ]
              },
              "system": "https://test.org/identifiers/PatientIdentifier",
              "value": "MRN090791"
            }
          ],
          "name": [
            {
              "use": "usual",
              "family": "JOEY",
              "given": [
                "DOEY"
              ]
            }
          ],
          "telecom": [
            {
              "system": "phone",
              "value": "(718)931-2514",
              "use": "home"
            }
          ],
          "gender": "male",
          "birthDate": "1962-12-16",
          "address": [
            {
              "line": [
                "3013 PHILIP AVENUE"
              ],
              "city": "Bangalore",
              "district": "Bangalore Urban district",
              "state": "Karnataka",
              "postalCode": "560034",
              "country": "India"
            }
          ],
          "generalPractitioner": [
            {
              "identifier": {
                "value": "NPI1001"
              },
              "display": "Clincial Trail Manager"
            }
          ]
        },
        "request": {
          "method": "PUT",
          "url": "Patient?identifier=https://test.org/identifiers/PatientIdentifier|MRN090791"
        }
      },
      {
        "fullUrl": "Device/MRN090791Device12345",
        "resource": {
          "resourceType": "Device",
          "identifier": [
            {
              "system": "http:/cts.org/identifier/devices",
              "value": "Device12345"
            }
          ],
          "udi":{
            "name": "Vitals Monitoring Tool"
          },
          "status": "active",
          "manufacturer": "Philips",
          "manufactureDate": "2021-11-07T13:28:17+00:00",   
          "type": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "70665002",
                "display": "Blood pressure cuff"
              }
            ]
          },
          "patient": {
            "reference": "Patient/MRN090791"
          }
        },
        "request": {
          "method": "PUT",
          "url": "Device?identifier=Device12346"
        }
      }
    ],
    "resourceType": "Bundle"
  }

  var patientNumber = "MRN090408"

  app.post("/time", async (req, res) => {
    try{
    var { deviceName, manufacturerName, date, type, serialNumber, notes }  = req.body;
    // console.log("Your from package", deviceName, manufacturerName, date, type, serialNumber);

    let currentState = JSON.stringify({
      "type": "transaction",
      "entry": [
        {
          "fullUrl": "Patient/"+patientNumber,
          "resource": {
            "resourceType": "Patient",
            "extension": [
              {
                "extension": [
                  {
                    "url": "NCT",
                    "valueString": "NCT12345678"
                  },
                  {
                    "url": "period",
                    "valuePeriod": {
                      "start": "2021-11-09T00:00:00+00:00",
                      "end": "2021-11-09T23:59:59+00:00"
                    }
                  },
                  {
                    "url": "reason",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://snomed.info/sct",
                          "code": "166001",
                          "display": "Behavioral therapy"
                        }
                      ]
                    }
                  }
                ],
                "url": "http://hl7.org/fhir/StructureDefinition/patient-clinicalTrial"
              },
              {
                "extension": [
                  {
                    "url": "NCT",
                    "valueString": "NCT11223344"
                  },
                  {
                    "url": "period",
                    "valuePeriod": {
                      "start": "2021-11-10T00:00:00+00:00",
                      "end": "2021-11-10T23:59:59+00:00"
                    }
                  },
                  {
                    "url": "reason",
                    "valueCodeableConcept": {
                      "coding": [
                        {
                          "system": "http://snomed.info/sct",
                          "code": "342002",
                          "display": "Amobarbital interview"
                        }
                      ]
                    }
                  }
                ],
                "url": "http://hl7.org/fhir/StructureDefinition/patient-clinicalTrial"
              }
            ],
            "identifier": [
              {
                "use": "usual",
                "type": {
                  "coding": [
                    {
                      "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                      "code": "MR",
                      "display": "Medical record number"
                    }
                  ]
                },
                "system": "https://test.org/identifiers/PatientIdentifier",
                "value": patientNumber
              }
            ],
            "name": [
              {
                "use": "usual",
                "family": "JOEY",
                "given": [
                  "DOEY"
                ]
              }
            ],
            "telecom": [
              {
                "system": "phone",
                "value": "(718)931-2514",
                "use": "home"
              }
            ],
            "gender": "male",
            "birthDate": "1962-12-16",
            "address": [
              {
                "line": [
                  "3013 PHILIP AVENUE"
                ],
                "city": "Bangalore",
                "district": "Bangalore Urban district",
                "state": "Karnataka",
                "postalCode": "560034",
                "country": "India"
              }
            ],
            "generalPractitioner": [
              {
                "identifier": {
                  "value": "NPI1001"
                },
                "display": "Clincial Trail Manager"
              }
            ]
          },
          "request": {
            "method": "PUT",
            "url": "Patient?identifier=https://test.org/identifiers/PatientIdentifier|"+patientNumber
          }
        },
        {
          "fullUrl": "Device/"+patientNumber+serialNumber,
          "resource": {
            "resourceType": "Device",
            "identifier": [
              {
                "system": "http:/cts.org/identifier/devices",
                "value": serialNumber
              }
            ],
            "udi":{
              "name": deviceName
            },
            "status": "active",
            "manufacturer": manufacturerName,
            "manufactureDate": date,   
            "type": {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "70665002",
                  "display": type
                }
              ]
            },
            "patient": {
              "reference": "Patient/"+patientNumber
            },
            "note":[
              {
              "text": notes
              }
              ]
          },
          "request": {
            "method": "PUT",
            "url": "Device?identifier="+serialNumber
          }
        }
      ],
      "resourceType": "Bundle"
    })
      

		const response = await axios({
			url: "https://cdr-cognizant-dev.us-east.philips-healthsuite.com/store/fhir/2de9fbaa-058d-4f3f-ba9d-21bcdc1e89a4",
			method: "post",
            data: currentState,
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
    // console.log(response)
		res.json(response.data);
	} catch (err) {
    console.error("This is post error",err);
		res.status(500).json({ message: err })
	}
});
//     }
// })

//Router Linking
// app.use("/auth", require("./routes/auth.routes.js"));


//working message
app.get("/auth", async (req, res) => {
	try {
        // const { deviceName } = req.body;
        // console.log(deviceName);
		const response = await axios({
			url: "https://cdr-cognizant-dev.us-east.philips-healthsuite.com/store/fhir/2de9fbaa-058d-4f3f-ba9d-21bcdc1e89a4/Device?patient.identifier="+patientNumber,
			method: "get",
            // data: initialState,
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
		res.json(response.data);
	} catch (err) {
    console.error("This is get error",err);
		res.status(500).json({ message: err });
	}
});

app.get("/test", async (req, res) => {
	try {
        // const { deviceName } = req.body;
        // console.log(deviceName);
		const response = await axios({
			url: "https://cdr-cognizant-dev.us-east.philips-healthsuite.com/store/fhir/2de9fbaa-058d-4f3f-ba9d-21bcdc1e89a4/Device?patient.identifier="+patientNumber,
			method: "get",
            // data: initialState,
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
		res.json(response.data);
	} catch (err) {
    console.error("This is get error",err);
		res.status(500).json({ message: err });
	}
});


//Router linking
// app.use("/auth", require(""));

app.listen(PORT,() => {
    console.log("Express connected successfully",PORT);
})