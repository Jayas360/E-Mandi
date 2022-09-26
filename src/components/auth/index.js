import { API } from '../../Config';

const users = [
    {   _id :1,
        role: 0,
        name:"vipin",
        email : "vipin@gmail.com",
        password : "12345678"
    },
    {   _id :2,
        role: 0,
        name:"Aman",
        email : "abhi@gmail.com",
        password : "12345678"
    },
    {   _id :3,
        role: 0,
        name:"Hani",
        email : "aman@gmail.com",
        password : "12345678"
    }
];

var data = {
    error:false,
    user:{
        _id:0,
        role:0,
        name:"",
        email:"",
        password:""
    }
};

export const signup = user => {
    // return fetch(`${API}/signup`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
};

export const signin = user => {
    // return fetch(`${API}/signin`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    //console.log(user);
    data.user = users.find((u) =>{
        return (u.email == user.email) && (u.password == user.password);
        });
    return Promise.resolve(data);
};

export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
};

export const signout = next => {
    // if (typeof window !== 'undefined') {
    //     localStorage.removeItem('jwt');
    //     next();
    //     return fetch(`${API}/signout`, {
    //         method: 'GET'
    //     })
    //         .then(response => {
    //             console.log('signout', response);
    //         })
    //         .catch(err => console.log(err));
    // }
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        //return console.log("User Signed Out Successfully !");
    }
    return true;
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};
