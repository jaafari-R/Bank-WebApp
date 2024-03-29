import toast from "react-hot-toast";

export function validateAndNotify(res, msg) {
    if(typeof res === "string") {
        toast.error(res);
        return false;
    }
    else if(msg) {
        toast.success(msg);
    }
    return true;
}