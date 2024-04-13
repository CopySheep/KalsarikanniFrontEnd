import httpInstance from "@/utils/http";

export function getRoomTypeItem(id) {
    return httpInstance({
        url: 'api/RoomTypes/GetRoomTypes',
        params: {
            id: id
        }
    });
};
export function GetRoomDetail(id) {
    return httpInstance({
        url: 'api/RoomTypes/GetRoomTypes',
        params: {
            id: id
        }
    });
};
export function getCheckRoomData(b_date,e_date) {
    return httpInstance({
        url: 'api/RoomTypes/GetCheckRoomDetail',
        params: {
            b_date: b_date,
            e_date:e_date
        }
    });
};