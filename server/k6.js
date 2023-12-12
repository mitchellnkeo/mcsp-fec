import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 50, // Number of virtual users
    duration: '60m', // Duration of the test
  };
  

export default function () {
  // Make a GET request to fetch data from the backend API
  let response = http.get('https://galvanizeflashcardsfrontend.onrender.com/');

  // Check if the response status is 200
  check(response, {
    'response time is within acceptable range': (res) => res.timings.duration < 1000,
  });

  // Simulate user think time
  sleep(1);
}