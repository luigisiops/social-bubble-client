import React, { useState } from 'react';
import axios from 'axios';
// import 'App.css';

const apiUrl = 'http://localhost:8080';

axios.interceptors.request.use(
    config => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [apiUrl];
      const token = localStorage.getItem('token');
      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  

function App() {
    const storedJwt = localStorage.getItem('token');
    const [jwt, setJwt] = useState(storedJwt || null);
    const [register, setFields] = useState([]);
    // const [loginStatus, setLoginStatus] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    const getJwt = async () => {
        const { data } = await axios.get(`${apiUrl}/jwt`);
        localStorage.setItem('token', data.token);
        setJwt(data.token);
      };
    
    const getFields = async () => {
        try {
          const { data } = await axios.get(`${apiUrl}/register`);
          setFields(data);
          setFetchError(null);
        } catch (err) {
          setFetchError(err.message);
        }
      };
      return (
        <>
          <section style={{ marginBottom: '10px' }}>
            <button onClick={() => getJwt()}>Get JWT</button>
            {jwt && (
              <pre>
                <code>{jwt}</code>
              </pre>
            )}
          </section>
          <section>
            <button onClick={() => getFields()}>
              Get Fields
            </button>
            <ul>
              {register.map((field, i) => (
                <li>{field.description}</li>
              ))}
            </ul>
            {fetchError && (
              <p style={{ color: 'red' }}>{fetchError}</p>
            )}
          </section>
        </>
      );
    }
    
    export default App;