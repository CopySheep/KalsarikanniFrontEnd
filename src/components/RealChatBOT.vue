<template>
    <section id="chat-container" ref="ShowBOT">
        <el-tooltip effect="light" placement="right">
            <template #content>
                <div class="custom-tooltip-content">您好!我是客服機器人，很高興能為您服務~</div>
            </template>
            <button class="chatbot-toggler" @click="toggleBTN">
                <span><font-awesome-icon icon="comment-dots" size="xl" /></span>
                <span v-if="ShowBOT"><font-awesome-icon icon="xmark" beat size="xl" /></span>
            </button>
        </el-tooltip>
        <div class="chatbot">
            <div id="boxheader">
                <h2>ChatBot</h2>
                <span class="close-btn" @click="toggleBTN"><font-awesome-icon icon="xmark" beat size="xl" /></span>
            </div>
            <ul class="chatbox" ref="chatbox">
                <li class="chat" :class="message.Type" v-for="(message, index) in chatMessages" :key="index">
                    <span v-if="message.Type === 'incoming'"><font-awesome-icon icon="robot" beat-fade /></span>
                    <span v-if="message.Type === 'incoming thinking'"><font-awesome-icon icon="robot" spin /></span>
                    <p :class="message.pclass">{{ message.content }}
                        <br/>
                        <a v-if="message.href" :href="message.href" target="_blank">
                            Let's GO~
                            <font-awesome-icon icon="rocket" />
                        </a>
                        <RouterLink v-if="message.link" :to="message.link">
                            點我前往~
                            <font-awesome-icon icon="bell-concierge" />
                        </RouterLink>

                    </p>
                </li>
            </ul>
            <div class="chat-input">
                <textarea v-model="userMessages" placeholder="Type a message..." spellcheck="false" required
                    @keydown.enter="sendMessage"></textarea>
                <span id="send-btn" @click="sendMessage(userMessages)"><font-awesome-icon icon="paper-plane" /></span>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';

const ShowBOT = ref(null);
const chatbox = ref(null);

const userMessages = ref("");
const inputStorage = ref(null);

const chatMessages = ref([
    {
        Type: "incoming",
        content:
            `哈囉👋 
我能為您提供什麼幫助？`,
        pclass: "",
        href: "",
        link: "",
    }
]);

const toggleBTN = () => {
    ShowBOT.value.classList.toggle('show-chatbot');
}


const scrollToBottom = () => {
    chatbox.value.scrollTo(0, chatbox.value.scrollHeight);
}


const sendMessage = () => {
    inputStorage.value = userMessages.value.trim();
    if (!inputStorage.value) return;

    chatMessages.value.push({
        Type: "outgoing",
        content: inputStorage.value
    });
    userMessages.value = "";
    Promise.resolve().then(() => scrollToBottom());

    // scrollToBottom();

    const waitResponse = {
        Type: "incoming thinking",
        content: "Thinking..."
    };

    chatMessages.value.push(waitResponse);
    Promise.resolve().then(() => getResponse(inputStorage)).then(scrollToBottom());
}


const getResponse = async () => {
    const API_URL = "http://localhost:5000/dialogflow";

    // console.log(inputStorage.value);

    try {
        const response = await axios.post(API_URL, {
            "queryText": inputStorage.value,
            "sessionId": "user1234",
            "languageCode": "zh-TW"
        });
        console.log(response.data);
        const index = chatMessages.value.findIndex(message => message.content === "Thinking...");
        if (index !== -1) {

            if (response.data === "預設1") {
                chatMessages.value.splice(index, 1, {
                    Type: "incoming",
                    content: "想知道哪裡好玩嘛!!請參考連結喔~",
                    href: "https://www.taiwan.net.tw/m1.aspx?sNo=0042687"
                });

            }
            else if (response.data === "預設2") {
                chatMessages.value.splice(index, 1, {
                    Type: "incoming",
                    content: `歡迎體驗本飯店訂房服務!!
詳情請參考連結喔~`,
                    link: "/room"
                });
            }
            else{
                chatMessages.value.splice(index, 1, {
                    Type: "incoming",
                    content: response.data
                });
            }         

        }
        Promise.resolve().then(() => scrollToBottom());
    }
    catch (err) {
        console.error('Error while fetching response:', err);
        const index = chatMessages.value.findIndex(message => message.content === "Thinking...");
        if (index !== -1) {
            chatMessages.value.splice(index, 1, {
                Type: "incoming",
                content: "Oops! Something went wrong. Please try again.",
                pclass: "error"
            });
        }
        Promise.resolve().then(() => scrollToBottom());
    }
}


</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    z-index: 100;
}

section {
    background: #E3F2FD;
    font-family: 'Poppins', sans-serif;
}

.custom-tooltip-content{
    font-size: 16px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: #9B7C64;
}

.chatbot-toggler {
    position: fixed;
    bottom: 30px;
    left: 35px;
    outline: none;
    border: none;
    height: 50px;
    width: 50px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #9B7C64;
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.24) 1px 4px 15px 0px;
}


@media screen and (max-width: 500px) {
    .chatbot-toggler {
        display: none;
    }
}

section.show-chatbot .chatbot-toggler {
    transform: rotate(90deg);
}

.chatbot-toggler span {
    color: #fff;
    position: absolute;
}

.chatbot-toggler span:last-child,
section.show-chatbot .chatbot-toggler span:first-child {
    opacity: 0;
}

section.show-chatbot .chatbot-toggler span:last-child {
    opacity: 1;
}

.chatbot {
    position: fixed;
    left: 35px;
    bottom: 90px;
    width: 420px;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transform: scale(0.5);
    transform-origin: bottom left;
    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
        0 32px 64px -48px rgba(0, 0, 0, 0.5);
    transition: all 0.1s ease;
}

section.show-chatbot .chatbot {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
}

.chatbot #boxheader {
    padding: 16px 0;
    position: relative;
    text-align: center;
    color: #fff;
    background: #9B7C64;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chatbot #boxheader span {
    position: absolute;
    right: 15px;
    top: 50%;
    display: none;
    cursor: pointer;
    transform: translateY(-50%);
}

#boxheader h2 {
    font-size: 1.4rem;
}

.chatbot .chatbox {
    overflow-y: auto;
    height: 510px;
    padding: 30px 20px 100px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar {
    width: 6px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 25px;
}

.chatbot :where(.chatbox, textarea)::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 25px;
}

.chatbox .chat {
    display: flex;
    list-style: none;
}

.chatbox .outgoing {
    margin: 20px 0;
    justify-content: flex-end;
}

.chatbox .incoming span {
    width: 32px;
    height: 32px;
    color: #fff;
    cursor: default;
    text-align: center;
    line-height: 32px;
    align-self: flex-end;
    background: #9B7C64;
    border-radius: 4px;
    margin: 0 10px 7px 0;
}

.chatbox .chat p {
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 12px 16px;
    border-radius: 10px 10px 0 10px;
    max-width: 75%;
    color: #fff;
    font-size: 0.95rem;
    background: #9B7C64;
}

.chatbox .incoming p {
    border-radius: 10px 10px 10px 0;
}

.chatbox .chat p.error {
    color: #721c24;
    background: #f8d7da;
}

.chatbox .incoming p {
    color: #000;
    background: #f2f2f2;
}

.chatbot .chat-input {
    display: flex;
    gap: 5px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #fff;
    padding: 3px 20px;
    border-top: 1px solid #ddd;
}

.chat-input textarea {
    height: 55px;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
    max-height: 180px;
    padding: 15px 15px 15px 0;
    font-size: 0.95rem;
}

.chat-input span {
    align-self: flex-end;
    color: #9B7C64;
    cursor: pointer;
    height: 55px;
    display: flex;
    align-items: center;
    visibility: hidden;
    font-size: 1.35rem;
}

.chat-input textarea:valid~span {
    visibility: visible;
}

@media (max-width: 500px) {
    .chatbot-toggler {
        right: 20px;
        bottom: 20px;
    }

    .chatbot {
        right: 0;
        left: 0;
        bottom: 0;
        height: 85%;
        border-radius: 0;
        width: 100%;
    }

    .chatbot .chatbox {
        height: 90%;
        padding: 25px 15px 100px;
    }

    .chatbot .chat-input {
        padding: 5px 15px;
    }

    .chatbot #boxheader span {
        display: block;
    }
}
</style>