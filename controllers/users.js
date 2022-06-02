import express from 'express';
import fs from 'fs/promises';
import _ from 'lodash';

const users = [];

const app = express();
app.use(express.json({extended: false}));

//get to get data with date
export const getDate = (req, res) => {
    
    const date = req.params.date;
    const dates = [
        { "availableAt": "2020-03-15T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-16T00:00:00Z" },
        { "availableAt": "2020-03-16T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-17T00:00:00Z" },
        { "availableAt": "2020-03-17T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-18T00:00:00Z" },
        { "availableAt": "2020-03-18T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-19T00:00:00Z" },
        { "availableAt": "2020-03-19T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-20T00:00:00Z" },
        { "availableAt": "2020-03-20T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-21T00:00:00Z" },
        { "availableAt": "2020-03-21T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-22T00:00:00Z" }
    ]
  
    res.json({
        date: dates
    });
}

//create user id and rewards on the fly
export const getNewUser = (req, res) => {

    const id = [1,2,3,4,5,6,7];
    const reward = ["Pen","Mouse","Keyboard","Laptop","Monitor","Phone","Headphones"];
    const user_date = [
      { "availableAt": "2020-03-15T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-16T00:00:00Z" },
      { "availableAt": "2020-03-16T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-17T00:00:00Z" },
      { "availableAt": "2020-03-17T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-18T00:00:00Z" },
      { "availableAt": "2020-03-18T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-19T00:00:00Z" },
      { "availableAt": "2020-03-19T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-20T00:00:00Z" },
      { "availableAt": "2020-03-20T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-21T00:00:00Z" },
      { "availableAt": "2020-03-21T00:00:00Z", "redeemedAt": null, "expiresAt": "2020-03-22T00:00:00Z" }
    ]

    res.json({
        id: _.sample(id),
        reward: _.sample(reward),
        date: _.sample(user_date),
    });
}   

//get user by id
export const getIdUser = (req, res) => {
    const { id } = req.params.id;
    const idUser = users.find((user) => user.id === id);
    res.send(idUser);
}

export const patchUser = (req, res) => {
    const { id } = req.params.id;
    const findUserById = users.find((user) => user.id === id);
    res.send(findUserById);
}


export const getUserFilter = (req, res) => {
     const { filter } = req.query;
     const filterUser = users.filter(user => {
         let isValid = true;
         for(key in filter) {
            isValid = isValid && user[key] === filter[key];
         }
         return isValid;
     })
     res.send(filterUser);

     if(!filterUser){
        throw new Error(error, "This reward is already expired")
    }
}




// export const postUser = (req, res) => {
//      const user = req.body;
//      users.push(user);
//      res.send(`User with id ${user.id} added`);
// }


  