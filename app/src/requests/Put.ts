// export const PutData = async (url, token, data, otherFunction, errorFunction) => {
//     await fetch(url, {
//         method: 'PUT',
//         headers: {
//             'Accept': "application/json",
//             'Content-Type': 'application/json',
//             'Authorization': token? `Bearer ${token}`: null
//         },
//         body: data
//     }).then((response) => response.json())
//     .then((json) => {
//         otherFunction(json);
//     }).catch((e) => {
//         console.log('e ', url, e.message);
//         errorFunction();
//     });
// };

export const PutData = async (url, token, data, otherFunction, errorFunction) => {
    await fetch(url, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token? `Bearer ${token}`: null
        },
        body: data
    }).then((response) => {
        const statusCode = response.status;
        const data = response.json();

        return Promise.all([statusCode, data]);
    }).then(([res, data]) => {
        if(res < 300) {
            otherFunction(data, null);
        } else {
            otherFunction(data, res);
            console.log('error statusCode', res, data);
        };
    }).catch((e) => {
        console.log('e ', url, e.message);
        errorFunction(e);
    });
};