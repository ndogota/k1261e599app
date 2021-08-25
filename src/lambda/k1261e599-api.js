// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios"
export async function handler() {
    try {
        const response = await axios.get("https://k1261e599api.herokuapp.com/city/", { headers: { Accept: "application/json" } })
        const data = response.data
        return {
            statusCode: 200,
            body: JSON.stringify({ data: data })
        }
    } catch (err) {
        console.log(err) // output to netlify function log
        return {
            statusCode: 500,
            body: JSON.stringify({ data: err.message })
        }
    }
}