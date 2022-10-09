type parameterTypes = {
    url: string,
    method: string,
    data?: object,
}

const root = "xx"

function request(parameter: parameterTypes) {
    const {url, method, data} = parameter;

    return new Promise(async (resolve, reject) => {
        var options = null

        if (data && method === "POST") {
            console.log("if");
            
            options = {
                method,
                body: JSON.stringify(data)
            }
        } else {
            console.log("else");

            options = {
                method
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

export const get = (url: string) => request({url: root+url, method: "GET"})
export const post = (url: string, data: object) => request({url: root+url, data, method: "POST"})
