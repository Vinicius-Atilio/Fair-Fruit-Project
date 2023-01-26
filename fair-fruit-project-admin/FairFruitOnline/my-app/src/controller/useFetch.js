import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import config from './config';

const FetchContext = createContext();
FetchContext.displayName = 'fetch';

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json;charset=UTF-8',
};

export default function useFetchContext() {
    function userAdd() {
        axios
            .post(
                `${config.apiUrl}/users`,
                {
                    login: 'igulino',
                    password: '321',
                },
                headers
            )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return { userAdd };
}
