type parameterTypes = {
    url: string,
    method: string,
    data?: object,
}

const rootUrl = "https://upayments-studycase-api.herokuapp.com/api";

// This token will be expire in five days from created ==> 14.10.2022 14:00
const BearerToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhjdW1hbGkxNkBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vSGN1bWFsaSIsImlhdCI6MTY2NTMxOTg2MSwiZXhwIjoxNjY1NzUxODYxfQ.IZe4QA9OG5-FDbetUjio4ZqL0UaZuZQ0bN-cIChZ-Ko";

function request(parameter: parameterTypes) {
    const {url, method, data} = parameter;

    return new Promise(async (resolve, reject) => {
        var options = null

        if (data && method === "POST") {
            console.log("POST Request");
            
            options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': BearerToken
                },
                body: JSON.stringify(data)
            }
        } else {
            console.log("GET Request");

            options = {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': BearerToken
                },
            }
        }

        const response = await fetch(url, options)
        const result = await response.json()

        if (response.ok) {
            resolve(result)
        } else {
            reject(result)
        }
    });
}

export const get = (url: string) => request({url: rootUrl+url, method: "GET"})
export const post = (url: string, data: object) => request({url: rootUrl+url, data, method: "POST"})
