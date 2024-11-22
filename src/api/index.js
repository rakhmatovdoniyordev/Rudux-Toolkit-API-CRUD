import axios from "axios";

const mainURL = axios.create({
    baseURL: "https://672fc50866e42ceaf15ea982.mockapi.io"
})

export default mainURL