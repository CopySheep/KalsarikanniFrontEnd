import httpInstance from "@/utils/http";

export const generalEmailApi = (subject, title, content, toEmail) => {
    return httpInstance ({
        url: `api/SendEmail?subject=${subject}&title=${title}&content=${content}&toEmail=${toEmail}`,
        method: "POST",
    })
};

export const validationEmailApi = (toEmail, url) => {
    return httpInstance ({
        url: `api/SendValidationEmail?toEmail=${toEmail}&url=${url}`,
        method: "POST",
    })
};

export const resetPwdEmailApi = (toEmail, url) => {
    return httpInstance ({
        url: `api/SendResetPwdEmail?toEmail=${toEmail}&url=${url}`,
        method: "POST",
    })
};