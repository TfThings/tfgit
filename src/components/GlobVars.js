var userPages = 0

export const GetUserVisits = () =>{
    return userPages
}

export const UserPageVisit = () => {
    userPages += 1 
}