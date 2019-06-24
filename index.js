const fetch = require('node-fetch')

// Fetching USERS using PROMISES .THEN
// function fetchAvatarUrl(userId) {
//     return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     .then(response => response.json())
//     .then(data => data.imageUrl)
// }

// Fetching USERS using ASYNC/AWAIT
// async function fetchAvatarUrl(userId) {
//     const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     const data = await response.json()
//     response
//     data
//     return data
// }

// const result = fetchAvatarUrl(123)
// result

// Fetching CATS using PROMISES

// function fetchCatAvatars(userId) {
//     return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//     .then(response => response.json())
//     .then(user => {
//         const promises = user.cats.map(catId => 
//             fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
//             .then(response => response.json())
//             .then(catData => catData.imageUrl) 
//         )
//         return Promise.all(promises)
//     })
// }

// Fetching CATS using ASYNC/AWAIT

async function fetchCatAvatars(userId) {
    const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    const user = await response.json()
    
    return await Promise.all(user.cats.map(async function(catId) {
        const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
        const catData = await response.json()
        return catData.imageUrl
    }))

}
const result = fetchCatAvatars(123)
result
 