(function() {
    'use strict';
  
    window.onload = function() {
        // get row clicked in previous page from sessionStorage
        var index = this.window.city_id-1;
        // get JSON obj data
        var dataJson = getData();

        // update the contract status and details fields html
        document.getElementById("state").innerText  += "   " + "Created"; //hard coded for now, will implement from azure
        document.getElementById("date").innerText  += "   " + dataJson.contracts[index].timestamp;
        document.getElementById("contractid").innerText  += "   " + dataJson.contracts[index].id;
        document.getElementById("address").innerText += "   " + dataJson.contracts[index].ledgerIdentifier;
        document.getElementById("name").innerText += "   " + dataJson.contracts[index].contractProperties[1].value ;
        document.getElementById("org").innerText += "   " + dataJson.contracts[index].contractProperties[4].value ;
        document.getElementById("descr").innerText += "   " + dataJson.contracts[index].contractProperties[2].value ;
        document.getElementById("city").innerText += "   " + dataJson.contracts[index].contractProperties[3].value ;
        document.getElementById("mincontrib").innerText += "   " + dataJson.contracts[index].contractProperties[5].value ;
        document.getElementById("goal").innerText += "   " + dataJson.contracts[index].contractProperties[6].value ;
        document.getElementById("funds").innerText += "   " + dataJson.contracts[index].contractProperties[7].value ;
        document.getElementById("contributors").innerText += "   " + dataJson.contracts[index].contractProperties[9].value ;
        document.getElementById("manager").innerText += "   " + dataJson.contracts[index].contractProperties[8].value ;
    }

  })();

  
  // JSON raw
  function getData(){
    return {
        "nextLink": "/api/v1/contracts?skip=20&workflowId=17",
        "contracts": [
            {
                "id": 29,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:25:32.43",
                "connectionID": 1,
                "ledgerIdentifier": "0xd2510fedb7e1b8681363241bbbcc0ad516459af3",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Akwesasne - Mohawk Council of Akwesasne"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Decrease the rate of new cases of diabetes.  Increase patient mobility."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Akwesasne"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "3680"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 59,
                        "connectionId": 1,
                        "transactionHash": "0xe580dfb993b253ca769506537d72bc8091226105b8058575fd6f39c646892e80",
                        "blockID": 7091,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 84,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:25:32.43",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 59,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 30,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:27:19.12",
                "connectionID": 1,
                "ledgerIdentifier": "0xcc20363db7c2714f78833a1de5c095f483736a5a",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Bowen Island"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Reduce high reliance on single-occupancy internal-combustion vehicles."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Bowen Island"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "3680"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 60,
                        "connectionId": 1,
                        "transactionHash": "0x05045f493250cd66aaccefb68c87b639bc1461a6778fecefb8ba6f01b48c6e6c",
                        "blockID": 7093,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 86,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:27:19.12",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 60,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 31,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:30:18.5333333",
                "connectionID": 1,
                "ledgerIdentifier": "0x6e197fc372b91b6c2667a2cc25a7ec1283b3a4e9",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Castlegar"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Improve travel decision making."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Castlegar"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "8039"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 61,
                        "connectionId": 1,
                        "transactionHash": "0x4eed640085acf96bb5a02fed0f487a494d74658f21d9d95407498940aeae88f3",
                        "blockID": 7097,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 88,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:30:18.55",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 61,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 32,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:34:19.81",
                "connectionID": 1,
                "ledgerIdentifier": "0x7be43172edb3f7a83a3414485dd074ce91a58d1b",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Abbotsford"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Create an intelligent primary transit corridor."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Abbotsford"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "141397"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 62,
                        "connectionId": 1,
                        "transactionHash": "0xf1b86eea1d849e9b6a33a588d40329c40ccb9590cf77c016cfd79f8cb241a377",
                        "blockID": 7100,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 91,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:34:19.81",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 62,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 33,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:36:23.6266667",
                "connectionID": 1,
                "ledgerIdentifier": "0x97f756b704186f62b5a58723d53e76aef2d70f66",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Clarence-Rockland"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Leverage sensors and geospatial analysis to drive change."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Clarence-Rockland"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "24512"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 63,
                        "connectionId": 1,
                        "transactionHash": "0x83e4c1354a13eca333f30109dafebf59cdc5235ac8deea2b666c0cb81e044813",
                        "blockID": 7103,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 92,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:36:23.64",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 63,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 34,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:38:56.74",
                "connectionID": 1,
                "ledgerIdentifier": "0x31ee1e50bb774f926708db423c879352888f1dd8",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Morden"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Remove mobility barriers for all citizens by creating an accessible, sustainable, point deviation, machine learning, mode-integrated greenfield public transportation system."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Morden"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "8668"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "0"
                    }
                ],
                "transactions": [
                    {
                        "id": 64,
                        "connectionId": 1,
                        "transactionHash": "0x9f6b52b15c9a2836fcf6c262695e60c44a1dee6072cae7e71b9f7f2fa6fd4ca9",
                        "blockID": 7108,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 94,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:38:56.74",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 64,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 35,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:40:52.1833333",
                "connectionID": 1,
                "ledgerIdentifier": "0x1d7ab1dc00d77516605b9ebf51d3adbb2f7acf4c",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of North Vancouver"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Use lighting and signal technologies to create information driven dynamic parking regulations, pedestrian scale lighting, EV charging and prioritization for rapid transit."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of North Vancouver"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "52898"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 65,
                        "connectionId": 1,
                        "transactionHash": "0xe89368d93d9437ae684cc77796511c6890486ecbec933524434374733d6cfc1d",
                        "blockID": 7111,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 96,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:40:52.1833333",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 65,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 36,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:42:47.03",
                "connectionID": 1,
                "ledgerIdentifier": "0xd4d04f468652810f83ed6ff631678ccd30399ea1",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Richmond"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Incident response plans and activation protocols utilizing for communication technology, decision making, and asset mobilization/ movement during an incident."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Richmond"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "198310"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 66,
                        "connectionId": 1,
                        "transactionHash": "0x3c69e5c80dce392f288c3020991a5dd2c173179d19cdd2ab2f994c1f330538f4",
                        "blockID": 7112,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 98,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:42:47.0466667",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 66,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 37,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:43:50.7833333",
                "connectionID": 1,
                "ledgerIdentifier": "0xb06f9bb088b9f5107bbdb7eadc8825b35ae74ba1",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of St. Albert"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Smart Mobility vision to eliminate traffic fatalities and serious injuries, improve local travel efficiency by 20% and advance seamless regional travel, while serving as a national model for remote sensing and future travel mode readiness."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of St. Albert"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "65590"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 67,
                        "connectionId": 1,
                        "transactionHash": "0x90e614a859d998323ec7f0f06d14d93be0be42dde85ff46c58413578a9a62c88",
                        "blockID": 7114,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 100,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:43:50.8166667",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 67,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 38,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:45:24.1",
                "connectionID": 1,
                "ledgerIdentifier": "0xd7a1e1d1ba6ef27df86927284c8267b6bd627884",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Surrey"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Surrey and Vancouver will implement Canada’s first two collision-free multi-modal transportation corridors, leveraging autonomous vehicles."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Surrey"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "517887"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 68,
                        "connectionId": 1,
                        "transactionHash": "0x561707f5cc548e40a801527ec0c9d6ce63521429f65fc1a9c1f9ae9229a4f98a",
                        "blockID": 7116,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 102,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:45:24.1",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 68,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 39,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:47:14.1833333",
                "connectionID": 1,
                "ledgerIdentifier": "0x4644894017f22faad0a359ac6e74d581b93c1d7b",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Vancouver"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Surrey and Vancouver will implement Canada’s first two collision-free multi-modal transportation corridors, leveraging autonomous vehicles."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Vancouver"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "631486"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 69,
                        "connectionId": 1,
                        "transactionHash": "0x40451de1058a55059e7160e83c4eda2bb9652616831b8d13420a45c3511fcef2",
                        "blockID": 7118,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 104,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:47:14.2133333",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 69,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 40,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T21:56:01.5133333",
                "connectionID": 1,
                "ledgerIdentifier": "0x7e8f0dbaa3bd04217573de712f4e8919b367d22c",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Wetaskiwin"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Access to autonomous transportation. The future impact of autonomous vehicles in cities will also affect the carbon footprint as autonomous vehicles have no need for traffic lights, require no fuel, an electric autonomous vehicle has zero emissions."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Wetaskiwin"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "12655"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 70,
                        "connectionId": 1,
                        "transactionHash": "0xd3f0035a209be343fa77b39b08c8ed135369215273f4c45b749781267760594f",
                        "blockID": 7127,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 106,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T21:56:01.5133333",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 70,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 41,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:00:05.6633333",
                "connectionID": 1,
                "ledgerIdentifier": "0x5a4da1a6fe0347e94ace8fd9cdcf614addd26bcc",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Winkler"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Our community will remove mobility barriers for all citizens by creating an accessible, sustainable, point deviation, machine learning, mode-integrated greenfield public transportation system."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Winkler"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "12591"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "0"
                    }
                ],
                "transactions": [
                    {
                        "id": 71,
                        "connectionId": 1,
                        "transactionHash": "0x10dc40a2c80ca7692350645235c2f60ee47cf0d3d1150bea0f78c3d14a8ecf4f",
                        "blockID": 7130,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 108,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:00:05.6633333",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 71,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 42,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:00:32.4766667",
                "connectionID": 1,
                "ledgerIdentifier": "0x759982354a7ba5934e73729cc8402c0917aa8eb0",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "City of Winnipeg"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Our community will implement an intelligent, open, and integrated municipal transportation ecosystem, reducing transportation infrastructure costs 10x over five years, while enabling mobility-as-a-service and public safety for all citizens."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "City of Winnipeg"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "705244"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 72,
                        "connectionId": 1,
                        "transactionHash": "0x9c60d44a6573e901cb7edcd00ff7cf2f3f5574d6cae181bfc793ba0c3127c54b",
                        "blockID": 7133,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 110,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:00:32.4766667",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 72,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 43,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:02:14.81",
                "connectionID": 1,
                "ledgerIdentifier": "0xd43dfab12da7aecb28ad8a084ea2d7612d5bd101",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Delaware Nation at Moraviantown"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Our communities will increase sense of empowerment and inclusion by ensuring every person has access to available, affordable, accessible, and safe transportation whenever they need it."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Delaware Nation at Moraviantown"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "395"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "0"
                    }
                ],
                "transactions": [
                    {
                        "id": 73,
                        "connectionId": 1,
                        "transactionHash": "0x022d673e4ac8597041f2307a3a3ea25824afb5d9f13d577ca3109fb6d7f6eee1",
                        "blockID": 7134,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 112,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:02:14.8733333",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 73,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 44,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:04:02.89",
                "connectionID": 1,
                "ledgerIdentifier": "0x2b1f84bbf62767e4db1193d24f6f8cc421b8ad53",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Dieppe"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Our community will provide an efficient, high-ridership public transit system that allows for trips tailored to the needs of its users. "
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Dieppe"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "25364"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 74,
                        "connectionId": 1,
                        "transactionHash": "0x0677282500248f3e41bef0cee92867f9c5fea8dd1347c9f4eda2efdf0ef72d08",
                        "blockID": 7136,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 114,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:04:02.9066667",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 74,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 45,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:06:03.5366667",
                "connectionID": 1,
                "ledgerIdentifier": "0x44ac71c9810bd9a86dd958c1f8d2e8161705133a",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Drummondville"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Turn an abandoned downtown industrial site into a diversified eco-district, thereby creating a human-scale environment reflecting the best sustainable development innovations and practices: designed to be walkable."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Drummondville"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "75423"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "0"
                    }
                ],
                "transactions": [
                    {
                        "id": 75,
                        "connectionId": 1,
                        "transactionHash": "0x5a10264b106db28febcc9b6fbac14d8ec29b73fc736b865454307ae15f31f250",
                        "blockID": 7139,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 116,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:06:03.5366667",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 75,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 46,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:07:47.76",
                "connectionID": 1,
                "ledgerIdentifier": "0x47f715932af486c9548fcfb8c6127d6bc083a874",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Greater Victoria"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Freedom to move”We will collaboratively create a multimodal transportation network that is convenient, green and affordable, which will boost South Islanders’ mobility wellbeing score by at least 20%"
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Greater Victoria"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "367770"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 76,
                        "connectionId": 1,
                        "transactionHash": "0x5321f2daa9e3c87225fdae9299912356d1fd1b8e7c2c715bf9ce350634110975",
                        "blockID": 7140,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 118,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:07:47.76",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 76,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 47,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:09:34.81",
                "connectionID": 1,
                "ledgerIdentifier": "0xe7d4c8f4a9e1996889d8639a1017aad9cf7a060d",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Halifax Regional Municipality"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Despite record growth, Halifax is one of the most food insecure cities in Canada, so we will improve access to nutritious, affordable food for every person, making this a more equitable place to live, and our community the most food secure in the country."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Halifax Regional Municipality"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "403131"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "1"
                    }
                ],
                "transactions": [
                    {
                        "id": 77,
                        "connectionId": 1,
                        "transactionHash": "0x2db0fdc0b6767d2e9a5873d72f75df1d22544b5ac14184bc0cb7d6d889732c14",
                        "blockID": 7142,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 120,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:09:34.8266667",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 77,
                        "workflowStateId": 39
                    }
                ]
            },
            {
                "id": 48,
                "provisioningStatus": 2,
                "timestamp": "2018-08-09T22:11:41.7666667",
                "connectionID": 1,
                "ledgerIdentifier": "0x68d27a68e2055d73d46ec3adf4cfa6bc53605d3d",
                "deployedByUserId": 1,
                "workflowId": 17,
                "contractCodeId": 9,
                "contractProperties": [
                    {
                        "workflowPropertyId": 145,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 146,
                        "value": "Joliette"
                    },
                    {
                        "workflowPropertyId": 147,
                        "value": "Developing alternatives to solo car use, proposing a sustainable and intelligent solution to problems with congestion, parking and isolation of communities in the region's north using a mobile application."
                    },
                    {
                        "workflowPropertyId": 148,
                        "value": "Joliette"
                    },
                    {
                        "workflowPropertyId": 149,
                        "value": "Federation of Canadian Municipalities"
                    },
                    {
                        "workflowPropertyId": 150,
                        "value": "100"
                    },
                    {
                        "workflowPropertyId": 151,
                        "value": "20484"
                    },
                    {
                        "workflowPropertyId": 152,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 153,
                        "value": "0xd8329d7eb36afd199ecbe78b43e399276a024394"
                    },
                    {
                        "workflowPropertyId": 154,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 155,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 156,
                        "value": "0x0000000000000000000000000000000000000000"
                    },
                    {
                        "workflowPropertyId": 157,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 158,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 159,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 160,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 161,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 162,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 163,
                        "value": "0"
                    },
                    {
                        "workflowPropertyId": 164,
                        "value": "1"
                    },
                    {
                        "workflowPropertyId": 165,
                        "value": "0"
                    }
                ],
                "transactions": [
                    {
                        "id": 78,
                        "connectionId": 1,
                        "transactionHash": "0x263a090c7f2bb822cea3b066ff38974e539590629f6a13b6fe345fea42b12e65",
                        "blockID": 7146,
                        "from": "0xd8329d7eb36afd199ecbe78b43e399276a024394",
                        "to": "0xa86629e4ac2929b93bad9e9e1b0f7be68855c3e5",
                        "value": 0,
                        "isAppBuilderTx": true
                    }
                ],
                "contractActions": [
                    {
                        "id": 122,
                        "userId": 1,
                        "provisioningStatus": 2,
                        "timestamp": "2018-08-09T22:11:41.7833333",
                        "parameters": [],
                        "workflowFunctionId": 68,
                        "transactionId": 78,
                        "workflowStateId": 39
                    }
                ]
            }
        ]
    };
}


  
  