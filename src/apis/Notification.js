import httpInstance from "@/utils/http";

export function sendAllNotification (page) {
    return httpInstance({
        url: `api/Notification/list?page=${page}`,
        method: "POST"
    })
};

export function sendNotification () { 
    return httpInstance({
        url: `api/Notification`,
        method: "POST"
    })
};

