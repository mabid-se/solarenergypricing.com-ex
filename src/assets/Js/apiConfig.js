export const callAPI = async (
    url,
    header,
    type,
    postData,
    token
) => {
    let json;

    const _headers = {
        Authorization: "Bearer " + token,
    };

    let response;

    if (header) {
        _headers["Content-Type"] = "application/json";
    }

    if (type === "POST" || type === "PUT") {
        try {
            response = await fetch(url, {
                method: type,
                headers: _headers,
                body: postData,
            });
            if (response.status === 403) {
                return {
                    type: "error",
                    status: response.status,
                    data: null,
                };
            } else if (response.status !== 204) {
                json = await response.json();
            } else {
                return {
                    type: "success",
                    status: response.status,
                    data: null,
                };
            }

            if (
                response.status === 200 ||
                response.status === 201 ||
                response.status === 204
            ) {
                return {
                    type: "success",
                    status: response.status,
                    data: json,
                };
            } else {
                return {
                    type: "error",
                    status: response.status,
                    data: json,
                };
            }
        } catch (err) {
            if (response && response.status === 401) {
               
            }
            return {
                type: "error",
                status: 500,
                data: err,
            };
        }
    } else if (type === "GET") {
        try {
            response = await fetch(url, {
                method: type,
                headers: _headers,
            });
            const json = await response.json();
            if (response.status === 200 || response.status === 201) {
                return {
                    type: "success",
                    status: response.status,
                    data: json,
                };
            } else if (response.status === 403) {
                return {
                    type: "error",
                    status: response.status,
                    data: null,
                };
            } else {
                return {
                    type: "error",
                    status: response.status,
                    data: json,
                };
            }
        } catch (err) {
            if (response && response.status === 401) {
            }
            return {
                type: "error",
                status: 500,
                data: err,
            };
        }
    }
};