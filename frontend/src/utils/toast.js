import toast from "react-hot-toast";

export function notify(res, msg) {
    if(typeof res === "string") {
        toast.error(res);
        return false;
    }
    else if(msg) {
        toast.success(msg);
    }
    return true;
}