import axios from 'axios'

let API = axios.create({
    baseURL: `http://localhost:7852`
});


const desc = `
apiRegister{
    payload: {
        email
        password
    }

    task: [
        check email valid
        check email exist
        check password match
    ] 
    return {
        status_code [200,400]
        message : string
    }
}
apiLogin{
    payload: {
        email
        password (optional)
    }

    task: [
        check email valid
        check email exist
        check password match (optional)
    ] 
    return {
        status_code [200,400]
        message : string
        response: table user
    }
}
apiAllEvent{
    payload: {

    }

    task: [
        find all event 
    ] 
    return {
        status_code [200,400]
        message : string
        response: table EventGroup join table Event by group_id
    }
}
apiAllBook{
    payload: {
    }

    task: [
        find all book 
    ] 
    return {
        status_code [200,400]
        message : string
        response: table Book 
    }
}
apiProfile{
    payload: {
        user_id
        email: (optional)
    }

    task: [
        find user_id
    ] 
    return {
        status_code [200,400]
        message : string
        response: table User
              
    }
}
apiAllBadge{
    payload: {
        user_id
        email: (optional)
    }

    task: [
        find all badges
    ] 
    return {
        status_code [200,400]
        message : string
        response: table Badge user_id owner via badges.badge_id
              
    }
}
apiAllBook{
    payload: {
        user_id
        email: (optional)
    }

    task: [
        find all book
    ] 
    return {
        status_code [200,400]
        message : string
        response: table Book user_id owner via book.book_id
              
    }
}
`
export const apiRegister = async (data) => {
    let res = await API.post('/register', data)
    return res.data
}
export const apiLogin = async (data) => {
    let res = await API.post('/login', null, { params: data })
    return res.data
}
export const apiEvent = async () => {
    let res = await API.get('/event')
    return res.data
}
export const apiChat = async (data) => {
    console.log(data)
    const formData = new FormData();
    formData.append('name', data.data.name);
    formData.append('context', data.data.context);
    formData.append('question', data.data.question);
    if (data.image) {
        formData.append('image', data.image, 'image.png');
    }
    let res = await API.post('/chat', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return res.data
}
export const apiEventGroup = async () => {
    let res = await API.get('/event/group')
    return res.data
}
export const apiUserInfo = async (userId) => {
    let res = await API.get(`/user/${userId}`)
    return res.data
}
export const apiUpdateUserInfo = async (data) => {
    let res = await API.put(`/user/${data.userId}/update`, data)
    return res.data
}
export const apiGetUserBadges = async (userId) => {
    let res = await API.get(`user/${userId}/badges`)
    return res.data
}
export const apiAllBadges = async () => {
    let res = await API.get(`/badges`)
    return res.data
}
export const apiGetBank = async () => {
    let res = await API.get(`/bank/summary`)
    return res.data
}
export const apiAddEventJoin = async (userId, event_id ) => {
    let res = await API.post(`/user/${userId}/event/join`,  null, { params: {event_id:event_id} })
    return res.data
}
export const apiEventJoined = async (userId) => {
    let res = await API.get(`/user/${userId}/events/joined`)
    return res.data
}
export const apiUserUpdate = async (userId, data) => {
    let res = await API.put(`/user/${userId}/update`, data=data)
    return res.data
}
export const apiUserBook= async () => {
    let res = await API.get(`explore/series`)
    return res.data
}
export const apiExploreSeries= async (userId) => {
    let res = await API.get(`user/${userId}/books`)
    return res.data
}

export const saveQuiz = async (data) => {
    console.log("check", data)
    let res = await API.post('/api/save-quiz', data)
    return res.data
}
export const editQuiz = async (data) => {
    let res = await API.post('/api/edit-quiz', data)
    return res.data
}
export const getAllQuiz = async (id) => {
    let res = await API.post(`/api/get-all-quiz/${id}`)
    return res.data
}

export const getOneQuiz = async (creatorId, id) => {
    let res = await API.post(`/api/get-one-quiz`, { creatorId, id })
    return res.data
}
export const confirmPIN = async (pin) => {
    console.log(pin)
    let res = await API.post(`/api/play_game/${pin}`)
    return res.data
}
// export const handleGetUser = async (email) => {
//     let res = await API.post('/api/get-user-by-email', email)
//     return res.data
// }




