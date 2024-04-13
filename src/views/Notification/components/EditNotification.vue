<script setup>
import { onMounted, ref } from 'vue';

const levels = ref([]);
const types = ref([]);

const loadLevels = async () => {
    const response = await fetch("https://localhost:7245/api/Notification/GetLevels");

    const datas = await response.json();

    levels.value = datas;
};

const loadTypes = async () => {
    const response = await fetch("https://localhost:7245/api/Notification/GetTypes");

    const datas = await response.json();

    types.value = datas;
}

const editNotification = async () => {
    try {
        const response = await fetch("https://localhost:7245/api/Notification/Edit", {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editFormData.value),
            method: "PUT"
        });

        const datas = response.text()

        return datas;
    }
    catch (err) {
        return "編輯失敗";
    }
};

const notifications = ref([]);
const thePage = ref(1);
const totalPages = ref(1);

const loadNotification = async () => {
    const response = await fetch(`https://localhost:7245/api/Notification?page=${thePage.value}`);

    const datas = await response.json();

    notifications.value = datas.notifications.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        pushTime: item.pushTime,
        levelName: item.levelName != null ? item.levelName : "全體會員",
        typeId: item.typeId,
        typeName: item.typeName,
        isEdited: false
    }));

    totalPages.value = datas.totalPages
};

const pageClicker = (page) => {
    thePage.value = page
    loadNotification();
};

const editClicker = async (index) => {
    editFormData.value = notifications.value[index];
    notifications.value[index].isEdited = !notifications.value[index].isEdited;
};

const cancelButton = (index) => {
    editFormData.value = {};
    notifications.value[index].isEdited = !notifications.value[index].isEdited;
};

const editComplete = (index) => {
    editNotification();
    notifications.value[index].isEdited = !notifications.value[index].isEdited;
    loadNotification();
};

const editFormData = ref({

});

onMounted(async () => {
    loadLevels();
    loadTypes();
    loadNotification();
});
</script>
<template>
    <section id="facilities" class="pt-12 pb-11">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-12">
                    <!-- Group -->
                    <div class="accordion" id="accordion">
                        <div class="accordion-item " v-for="(value, index) in notifications">
                            <div v-if="!value.isEdited">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        v-bind:data-bs-target="'#collapse' + index" aria-expanded="true"
                                        v-bind:aria-controls="'collapse' + index">
                                        {{ value.name }}
                                    </button>
                                </h2>
                                <div v-bind:id="'collapse' + index" class="accordion-collapse collapse"
                                    data-bs-parent="#accordion">
                                    <div class="row gx-4">
                                        <div class="row">
                                            <div class="col-12 mt-6">
                                                <ul>
                                                    <span class="me-1">
                                                        通知類型：{{ value.typeName }}
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <div>推播內容：</div>
                                                    <span class="me-1">
                                                        {{ value.description }}
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <span class=" d-flex align-items-center ps-0 ps-0">
                                                        推播時間：{{ new Date(value.pushTime).toLocaleString() }}
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <span class=" d-flex align-items-center ps-0 ps-0">
                                                        推播對象：{{ value.levelName }}
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <div class="col-12 text-end">
                                                        <a class="btn btn-primary shadow-sm"
                                                            v-on:click="editClicker(index)">
                                                            <i class="hicon hicon-ycs-generic"></i>
                                                            <span> 修改通知</span>
                                                        </a>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <h2 class="accordion-header">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            v-bind:data-bs-target="'#collapse' + index" aria-expanded="true"
                                            v-bind:aria-controls="'collapse' + index">
                                            {{ value.name }}
                                        </button>
                                    </h2>
                                </h2>
                                <div v-bind:id="'collapse' + index" class="accordion-collapse collapse show"
                                    data-bs-parent="#accordion">
                                    <div class="row gx-4">
                                        <div class="row">
                                            <div class="col-12 mt-6">
                                                <ul>
                                                    <div>推播標題：</div>
                                                    <input id="title" type="text" name="title"
                                                        class="form-control shadow-sm col-12"
                                                        v-model="editFormData.name">
                                                </ul>
                                                <ul>
                                                    <div>推播內容：</div>
                                                    <div class="form-floating mb-5">
                                                        <textarea id="content" name="content"
                                                            class="form-control shadow-sm"
                                                            style="height: 150px;resize: none;"
                                                            v-model="editFormData.description"></textarea>
                                                        <label for="content">內容 *</label>
                                                    </div>
                                                </ul>

                                                <ul>
                                                    <span class="me-1">以下欄位不得修改</span>
                                                </ul>
                                                <ul>
                                                    <span class="me-1">
                                                        推播時間：{{ value.pushTime }}
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <span class="me-1">
                                                        通知類型：{{ value.typeName }}
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <span class=" d-flex align-items-center ps-0 ps-0">
                                                        推播對象：{{ value.levelName }}
                                                    </span>
                                                </ul>
                                                <ul>
                                                    <div class="col-12 text-end">
                                                        <button class="btn btn-primary shadow-sm mx-3"
                                                            v-on:click="editComplete(index)">
                                                            <i class="hicon hicon-ycs-generic"></i>
                                                            <span> 修改完成</span>
                                                        </button>
                                                        <button class="btn btn-danger shadow-sm "
                                                            v-on:click="cancelButton(index)">
                                                            <i class="hicon hicon-ycs-generic"></i>
                                                            <span> 取消</span>
                                                        </button>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- /Group -->
                </div>
                <nav aria-label="Page navigation">
                    <ul class="pagination d-flex justify-content-between">
                        <div>{{ thePage }}/{{ totalPages }}</div>
                        <a href="#facilities" class="d-flex">
                            <ul class="page-item position-relative" v-for="( value, index ) in totalPages  "
                                v-bind:key="index" v-on:click="pageClicker(value)">
                                <a class="position-absolute top-50 start-50 translate-middle"
                                    v-bind:class="{ 'current': thePage == value, 'page-link': true }">
                                    {{ value }}
                                </a>
                            </ul>
                        </a>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pagination ul {
    cursor: pointer;
}
</style>