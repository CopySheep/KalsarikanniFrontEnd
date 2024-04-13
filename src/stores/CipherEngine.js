import { defineStore } from "pinia";

export const CipherEngine = defineStore(
    'CipherEngine', () => {
        // 定義金鑰
        const key = CryptoJS.enc.Utf8.parse('1234567890123456');
        // 定義初始向量
        const iv = CryptoJS.enc.Utf8.parse('1234567890123456');

        const encryptString = (text) => {
            return CryptoJS.AES.encrypt(text, key, { iv: iv }).toString();
        }
        function decryptString(encryptedText) {
            const decryptedBytes = CryptoJS.AES.decrypt(encryptedText, key, { iv: iv });
            return decryptedBytes.toString(CryptoJS.enc.Utf8);
        }

        return {
            encryptString,
            decryptString
        }
    },
    {
        persist: true
    }
)