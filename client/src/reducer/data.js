export default (data=[],action)=>{
    switch (action.type) {
        case 'GET_ALL':
            return action.payload
            break;
        case "ADD":
            return [...data,action.payload]
            break;
        case 'DELETE':
            return data.filter(item=>item._id !== action.payload)
        default:
            return data;
    }
}