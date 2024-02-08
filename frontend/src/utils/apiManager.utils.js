export function getErrorMsg(error) {
    if(error.response) {
        return error.response.data;
    }
    return "Failed to connect server!";
}