// RN 内置了 Ajax，一些基于Ajax的第三方库都可以用（如，frisbee 或者 axios ，除了 jQuery）

// function MovieRequestService(){
//     var service = this;
//     service.getMoviesFromApi = function(){
//         var requestUrl = 'https://facebook.github.io/react-native/movies.json';
//         return fetch(requestUrl, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//               }
//             //   ,body: JSON.stringify({
//             //     firstParam: 'yourValue',
//             //     secondParam: 'yourOtherValue',
//             //   })
//         }).then((response) => response.json())
//         .then((responseJson)=> {
//             return responseJson.movies;
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     }
//     return service;
// }

// const requestService = RequestService();
// export default requestService;

export default function getMoviesFromApi(){
    var requestUrl = 'https://facebook.github.io/react-native/movies.json';
    return fetch(requestUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        //   ,body: JSON.stringify({
        //     firstParam: 'yourValue',
        //     secondParam: 'yourOtherValue',
        //   })
    }).then((response) => {
        var obRes = response.json();
        console.log(obRes);
        return obRes;
    })
    .then((responseJson)=> {
        console.log(responseJson.movies);
        return responseJson.movies;
    })
    .catch((error) => {
        console.error(error);
    })
};