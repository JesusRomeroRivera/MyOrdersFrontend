import axios from "axios";

export default axios.create({
  baseURL: "https://myorders.somee.com/api/v1",
  headers: {
    "Content-type": "application/json",
    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIzIiwiZW1haWwiOiJzZXJnaW8uYXFzMTdAZ21haWwuY29tIiwibmFtZSI6IlNlcmdpbyBRdWlyb3oiLCJuYmYiOjE2NTY3MDg2MjQsImV4cCI6MTY1NzMxMzQyNCwiaWF0IjoxNjU2NzA4NjI0fQ.43Dsfmti6jB0fCrAPommU4N-zoyWVew0uHjeYS5rSNw`,
  },
});
