import httpInstance from "@/utils/http";

//宴會場地
export function getHallItem() {
    return httpInstance({
        url: 'api/HallItems',
    });
};

export function getHallById(hallId) {
    return httpInstance({
        url: `api/HallItems/${hallId}`,
    });
};

//餐點
export function getHallMenu() {
    return httpInstance({
        url: 'api/HallMenus/HallMenus',
    });
}

//餐點類別
export function getCategory() {
    return httpInstance({
        url: 'api/HallMenus/Category',
    });
}


export function getHallLogs(hallId){
    return httpInstance({
        url: `api/HallLog/${hallId}`,
    });
}

export function getMenu(Menuid){
    return httpInstance({
        url: `api/HallMenus/Menu/${Menuid}`,
    });
}

export function SearchMenu(params){
    return httpInstance({
        url: `api/HallMenus/SearchMenu`,
        params,
    });
}

export function CreateOrder (Order) { 
    return httpInstance({
        url: `api/HallLog/Create`,
        method: "POST",
        data:Order,

    })
};