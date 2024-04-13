import httpInstance from "@/utils/http";

export function getService(id) {
    return httpInstance({
        url: 'api/ReservationServiceDetails',
        params: {
            id: id
        }
    });
}

export function getServiceType() {
    return httpInstance({
        url: 'api/ReservationServiceType',
    });
}


export const CreateOrderAPI = (data) => {
    return httpInstance({
        url: 'api/ReservationService',
        method: 'POST',
        data,
    })
};



export function CheckTimeAPI(typeId, selectdate){
    return httpInstance({
        url: 'api/ReservationService',
        params: {
            typeId: typeId,
            selectdate: selectdate
        }
    })
};