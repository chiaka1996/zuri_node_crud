    CRUD APPLICATION
this is a node application that helps user create, read, update, and delete their data.


 file structure 

src
|---controllers
    |--user.js
|
|---models
    |--user.js
|
|--routes.js
|
|--server.js


API REFERENCE

READ all data or GET all datas
GET api: https://osujizuricrud.herokuapp.com/apis/getuser 
parameter: none


GET single user data froom the database
GET api: https://osujizuricrud.herokuapp.com/apis/singleuser
parameter: _id
data type: json
example of expected payload: {_id:"099588jd888949038ei"}
on successfull get request : {
   "data": [
    {
      "_id": "60995eee4c5d6a281c690de9",
      "name": "illa",
      "email": "illa@gmail.com",
      "country": "caton",
      "createdAt": "2021-05-10T16:27:26.496Z",
      "updatedAt": "2021-05-10T16:27:26.496Z",
      "__v": 0
    }
  ] 
}



create data or POST data
POST api: https://osujizuricrud.herokuapp.com/apis/adduser
parameters: name, email, country
data type: json
example of expected data: {name: "dan", email:"dan@gmail.com", country: "canada"}
on successfull post request: {
    message: "user added successfully",
    data: {
            _id : _id,
            name: "dan",
            email: "dan@gmail.com,
            country: "canada"
            }
}


 
UPDATE DATA
PUT api: https://osujizuricrud.herokuapp.com/apis/updateuser
parameters: id, name, email, country
data type: json
example of expected data input: {
                            _id: "129030nmdjfkkfi9999",
                            name: "dan",
                            email: "danny@gmail.com"
                            country: "sango ota"
                }
on successfull update request: {
                                message: "data updated successfully",
                                data: {
                                    _id: "094ookdpd0084930020",
                                    name: "davido",
                                    email: "30bg@gmail.com",
                                    country: "iyana ipaja"
                                }
                                
                     }



DELETE DATA
DELETE api:  https://osujizuricrud.herokuapp.com/apis/deleteuser
parameter: id
data type: json
example of expected data input: {
        _id: "848949030039504lfkf"
}
on successfull DELETE request: {
    message: "user deleted successfully"
}

