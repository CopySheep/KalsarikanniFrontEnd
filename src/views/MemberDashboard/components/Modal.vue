<template>
    <a v-if="Type == 'a'" type="button" class="editpwd" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {{ Title }}
    </a>
    <button v-if="Type == 'button'" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {{ Title }}
    </button>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ Title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">確認</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        Title: String,
        Type: {
            type: String,
            default: "button"
        }
    }
}
</script>

<style>
.editpwd {
    font-size: 15px;
    text-decoration: underline;
    color: blue;
}
</style>