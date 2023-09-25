import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTBiOWU5YTczMTY5YmU1ODQwNDBlYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTU5ODc4OSwiZXhwIjoxNjk1ODU3OTg5fQ.5K2_vVUE88_7VuSp6JX4G1BrFSt-tEkLY7ykWkC5Abg";

export const normalAxioRequest = axios.create({
  baseURL: BASE_URL,
});

export const userAxioRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
