//var theme = {
export default theme = {
    init: function () {
        theme.bgImage(),
            theme.bgImageMobile(),
            theme.scrollTop(),
            theme.headerSticked(),
            theme.navbarNav(),
            theme.switchMode(),
            theme.changeAvatar(),
            theme.countdown(),
            theme.roomSlide(),
            theme.plyrPlayer(),
            theme.scrollCue(),
            theme.dSelect(),
            theme.selectGuest(),
            theme.hotelDatePicker(),
            theme.datePicker(),
            theme.swiperSlider(),
            theme.gLightbox(),
            theme.bsValidation(),
            theme.highlight(),
            theme.codeSnippet(),
            theme.preloader()
    },
    bgImage() {
        let e = document.querySelectorAll(".bg-image");
        for (let t = 0; t < e.length; t++) {
            let i = e[t].getAttribute("data-image-src");
            e[t].style.backgroundImage = "url('" + i + "')"
        }
    },
    bgImageMobile() {
        let e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|MacIntel/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
        if (e) {
            let t = document.querySelectorAll(".image-wrapper");
            t.forEach(e => {
                e.classList.add("mobile")
            }
            )
        }
    },
    scrollTop() {
        let e = document.querySelector(".scroll-top");
        if (e) {
            let t = () => e.classList.toggle("active", window.scrollY > 150)
                , i = () => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            window.addEventListener("load", t),
                document.addEventListener("scroll", t),
                e.addEventListener("click", i)
        }
    },
    headerSticked() {
        let e = document.querySelector(".header-navbar");
        e && window.addEventListener("scroll", () => {
            let t = window.scrollY > 150;
            e.classList.toggle("bg-opacity-100", t),
                e.classList.toggle("header-navbar-sticky", t),
                e.classList.toggle("bg-opacity-0", !t)
        }
        )
    },
    navbarNav() {
        let e = document.querySelectorAll(".offcanvas.offcanvas-navbar");
        e.forEach(e => {
            let t, i = e.querySelectorAll(".nav-item.dropdown"), r = e.querySelectorAll(".dropdown-toggle-icon");
            i.forEach(i => {
                let r = i.querySelector(".dropdown-toggle-hover")
                    , l = i.querySelector(".dropdown-menu");
                r && l && ([r, l].forEach(i => i.addEventListener("mouseenter", () => {
                    e.classList.contains("show") || (clearTimeout(t),
                        e.querySelectorAll(".dropdown-menu.show").forEach(e => e.classList.remove("show")),
                        l.classList.add("show"),
                        l.classList.add("animate", "slideIn"))
                }
                )),
                    [r, l].forEach(i => i.addEventListener("mouseleave", () => {
                        e.classList.contains("show") || (t = setTimeout(() => {
                            l.classList.remove("show"),
                                l.classList.remove("animate", "slideIn")
                        }
                            , 500))
                    }
                    )))
            }
            ),
                e.addEventListener("show.bs.offcanvas", () => {
                    r.forEach(e => {
                        e.classList.replace("hicon-thin-arrow-down", "hicon-plus-thin")
                    }
                    )
                }
                ),
                e.addEventListener("hide.bs.offcanvas", () => {
                    r.forEach(e => {
                        e.classList.replace("hicon-plus-thin", "hicon-thin-arrow-down"),
                            e.classList.replace("hicon-minus-thin", "hicon-thin-arrow-down")
                    }
                    )
                }
                ),
                r.forEach(t => {
                    t.addEventListener("click", function (i) {
                        if (e.classList.contains("show")) {
                            i.preventDefault();
                            let r = this.parentNode;
                            r.classList.toggle("active");
                            let l = r.nextElementSibling;
                            l.classList.toggle("show"),
                                t.classList.toggle("hicon-plus-thin"),
                                t.classList.toggle("hicon-minus-thin")
                        }
                    })
                }
                )
        }
        )
    },
    selectGuest() {
        document.querySelectorAll("[data-total-guest]").forEach(function (e) {
            let t = e.querySelector('input[data-input-adults=""]')
                , i = e.querySelector('input[data-input-children=""]')
                , r = e.querySelector('span[data-total-adults=""]')
                , l = e.querySelector('span[data-total-children=""]')
                , a = e.querySelector('button[data-minus-adults=""]')
                , o = e.querySelector('button[data-plus-adults=""]')
                , s = e.querySelector('button[data-minus-children=""]')
                , n = e.querySelector('button[data-plus-children=""]');
            if (t && i) {
                function d(e) {
                    e.addEventListener("keypress", function (e) {
                        let t = e.keyCode || e.which
                            , i = String.fromCharCode(t);
                        /^\d*$/.test(i) || e.preventDefault()
                    })
                }
                "" === t.value.trim() && (t.value = 1),
                    "" === i.value.trim() && (i.value = 0),
                    r.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`,
                    l.innerText = `${i.value} ${i.value > 1 ? "Children" : "Child"}`,
                    t.addEventListener("input", () => {
                        let e = parseInt(t.dataset.adultsMax);
                        t.value > e && (t.value = e),
                            t.value < 1 && (t.value = 1),
                            r.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`
                    }
                    ),
                    i.addEventListener("input", () => {
                        let e = parseInt(i.dataset.childrenMax);
                        i.value > e && (i.value = e),
                            l.innerText = `${i.value} ${i.value > 1 ? "Children" : "Child"}`
                    }
                    ),
                    a.addEventListener("click", () => {
                        let e = parseInt(t.value);
                        e > 1 && (t.value = e - 1,
                            r.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`)
                    }
                    ),
                    o.addEventListener("click", () => {
                        let e = parseInt(t.value)
                            , i = parseInt(t.dataset.adultsMax);
                        e < i && (t.value = e + 1,
                            r.innerText = `${t.value} ${t.value > 1 ? "Adults" : "Adult"}`)
                    }
                    ),
                    s.addEventListener("click", () => {
                        let e = parseInt(i.value);
                        e > 0 && (i.value = e - 1,
                            l.innerText = `${i.value} ${i.value > 1 ? "Children" : "Child"}`)
                    }
                    ),
                    n.addEventListener("click", () => {
                        let e = parseInt(i.value)
                            , t = parseInt(i.dataset.childrenMax);
                        e < t && (i.value = e + 1,
                            l.innerText = `${i.value} ${i.value > 1 ? "Children" : "Child"}`)
                    }
                    ),
                    d(t),
                    d(i)
            }
        })
    },
    changeAvatar() {
        let e = document.querySelectorAll("[data-user-avatar]");
        e.forEach(e => {
            let t = e.querySelector("[data-input-avatar]")
                , i = e.querySelector("[data-update-avatar]")
                , r = e.querySelector("[data-show-avatar]");
            t && i && r && t.addEventListener("change", () => {
                if (t.files && t.files[0]) {
                    let e = t.files[0].name.split(".").pop().toLowerCase();
                    if (["jpg", "gif", "png"].includes(e)) {
                        i.classList.remove("d-none");
                        let l = new FileReader;
                        l.addEventListener("load", () => {
                            r.src = l.result,
                                r.srcset = l.result
                        }
                        ),
                            l.readAsDataURL(t.files[0])
                    } else
                        i.classList.add("d-none")
                } else
                    i.classList.add("d-none")
            }
            )
        }
        )
    },
    countdown() {
        let e = document.querySelector(".countdown");
        e && new countdown({
            target: ".countdown",
            dayWord: "days",
            hourWord: "hours",
            minWord: "mins",
            secWord: "secs"
        })
    },
    roomSlide() {
        document.addEventListener("DOMContentLoaded", function () {
            let e = document.querySelector(".room-slide");
            if (e) {
                let t = e.querySelectorAll(".room-slide-item");
                e.addEventListener("mouseover", function (e) {
                    let i = e.target.closest(".room-slide-item");
                    i && (t.forEach(e => e.classList.remove("active")),
                        i.classList.add("active"))
                });
                let i = e.querySelector(".room-slide-item.active");
                i || t[0].classList.add("active")
            }
        })
    },
    scrollCue() {
        scrollCue.init({
            interval: -200,
            duration: 600,
            percentage: .8
        }),
            scrollCue.update()
    },
    dSelect() {
        for (let e of document.querySelectorAll(".dselect"))
            dselect(e)
    },
    hotelDatePicker() {
        document.querySelectorAll(".check-date").forEach(e => {
            let t = new Date
                , i = t.toString();
            t.setDate(t.getDate() + 1);
            let r = t.toString();
            e.value = i.slice(4, 15) + " - " + r.slice(4, 15),
                new HotelDatepicker(e, {
                    format: "MMM DD YYYY"
                })
        }
        )
    },
    datePicker() {
        let e = document.querySelector(".date-of-birth");
        e && new flatpickr(e, {
            allowInput: !1,
            minDate: "today",
            static: !0,
            position: "right center",
            wrap: !0,
            disableMobile: "true",
            dateFormat: "M d Y"
        });
        let t = document.querySelector(".departure-date");
        if (t) {
            let i = new Date;
            new flatpickr(t, {
                defaultDate: i.toString(),
                allowInput: !1,
                minDate: "today",
                static: !0,
                position: "right center",
                wrap: !0,
                disableMobile: "true",
                dateFormat: "M d Y"
            })
        }
    },
    swiperSlider() {
        document.querySelector(".room-slider") && new Swiper(".room-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 600,
            centeredSlides: !0,
            loop: !0,
            grabCursor: !0,
            navigation: {
                nextEl: ".room-next",
                prevEl: ".room-prev"
            },
            pagination: {
                el: ".room-pagination",
                type: "fraction"
            },
            breakpoints: {
                960: {
                    slidesPerView: 2,
                    spaceBetween: 24
                }
            }
        }),
            document.querySelector(".room-photo-slider-1") && new Swiper(".room-photo-slider-1", {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 600,
                slidesOffsetBefore: 0,
                grabCursor: !0,
                navigation: {
                    nextEl: ".room-photo-next-1",
                    prevEl: ".room-photo-prev-1"
                },
                pagination: {
                    el: ".room-photo-pagination-1",
                    type: "fraction"
                },
                breakpoints: {
                    720: {
                        slidesPerView: 2,
                        slidesOffsetBefore: 208
                    },
                    960: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 198
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 229
                    },
                    1400: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 254
                    }
                }
            }),
            document.querySelector(".room-photo-slider-2") && new Swiper(".room-photo-slider-2", {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 600,
                loop: !0,
                slidesOffsetBefore: 0,
                grabCursor: !0,
                navigation: {
                    nextEl: ".room-photo-next-2",
                    prevEl: ".room-photo-prev-2"
                },
                pagination: {
                    el: ".room-photo-pagination-2",
                    type: "fraction"
                },
                breakpoints: {
                    720: {
                        slidesPerView: 2,
                        slidesOffsetBefore: 208
                    },
                    960: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 198
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 229
                    },
                    1400: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 254
                    }
                }
            }),
            document.querySelector(".related-rooms-slider") && new Swiper(".related-rooms-slider", {
                slidesPerView: 1,
                spaceBetween: 14,
                speed: 600,
                loop: !0,
                grabCursor: !0,
                navigation: {
                    nextEl: ".related-rooms-next",
                    prevEl: ".related-rooms-prev"
                },
                pagination: {
                    el: ".related-rooms-pagination",
                    type: "fraction"
                },
                breakpoints: {
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 14
                    }
                }
            }),
            document.querySelector(".client-say-slider") && new Swiper(".client-say-slider", {
                slidesPerView: 1,
                spaceBetween: 24,
                speed: 600,
                loop: !0,
                grabCursor: !0,
                navigation: {
                    nextEl: ".client-say-next",
                    prevEl: ".client-say-prev"
                },
                pagination: {
                    el: ".client-say-pagination",
                    type: "fraction"
                }
            }),
            document.querySelector(".service-slider") && new Swiper(".service-slider", {
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 600,
                loop: !0,
                navigation: {
                    nextEl: ".service-next",
                    prevEl: ".service-prev"
                },
                pagination: {
                    el: ".service-pagination",
                    type: "fraction"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    }
                }
            }),
            document.querySelector(".spa-photo-slider") && new Swiper(".spa-photo-slider", {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 600,
                slidesOffsetBefore: 0,
                grabCursor: !0,
                navigation: {
                    nextEl: ".spa-photo-next",
                    prevEl: ".spa-photo-prev"
                },
                pagination: {
                    el: ".spa-photo-pagination",
                    type: "fraction"
                },
                breakpoints: {
                    720: {
                        slidesPerView: 2,
                        slidesOffsetBefore: 208
                    },
                    960: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 198
                    },
                    1200: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 229
                    },
                    1400: {
                        slidesPerView: 3,
                        slidesOffsetBefore: 254
                    }
                }
            }),
            document.querySelector(".offer-slider-1") && new Swiper(".offer-slider-1", {
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 600,
                loop: !0,
                navigation: {
                    nextEl: ".offer-next-1",
                    prevEl: ".offer-prev-1"
                },
                pagination: {
                    el: ".offer-pagination-1",
                    type: "fraction"
                },
                breakpoints: {
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 17
                    }
                }
            }),
            document.querySelector(".offer-slider-2") && new Swiper(".offer-slider-2", {
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 600,
                loop: !0,
                navigation: {
                    nextEl: ".offer-next-2",
                    prevEl: ".offer-prev-2"
                },
                pagination: {
                    el: ".offer-pagination-2",
                    type: "fraction"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 17
                    },
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 17
                    }
                }
            }),
            document.querySelector(".news-slider") && new Swiper(".news-slider", {
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 600,
                loop: !0,
                navigation: {
                    nextEl: ".news-next",
                    prevEl: ".news-prev"
                },
                pagination: {
                    el: ".news-pagination",
                    type: "fraction"
                },
                breakpoints: {
                    1240: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 24
                    }
                }
            }),
            document.querySelector(".team-slider") && new Swiper(".team-slider", {
                slidesPerView: 1,
                spaceBetween: 14,
                speed: 600,
                loop: !0,
                grabCursor: !0,
                navigation: {
                    nextEl: ".team-next",
                    prevEl: ".team-prev"
                },
                pagination: {
                    el: ".team-pagination",
                    type: "fraction"
                },
                breakpoints: {
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 24
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    960: {
                        slidesPerView: 2,
                        spaceBetween: 14
                    },
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 14
                    }
                }
            })
    },
    plyrPlayer() {
        new Plyr(".html5-player"),
            new Plyr(".vimeo-player"),
            new Plyr(".youtube-player")
    },
    gLightbox() {
        GLightbox({
            selector: ".glightbox"
        }),
            GLightbox({
                selector: ".media-glightbox",
                touchNavigation: !0,
                loop: !1,
                zoomable: !1,
                autoplayVideos: !0,
                moreLength: 0,
                slideExtraAttributes: {
                    poster: ""
                },
                plyr: {
                    config: {
                        ratio: "16:9",
                        muted: !1,
                        hideControls: !0,
                        youtube: {
                            noCookie: !1,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3
                        },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            speed: !0,
                            transparent: !1
                        }
                    }
                }
            })
    },
    switchMode() {
        let e = localStorage.getItem("theme")
            , t = () => e || document.documentElement.getAttribute("data-bs-theme")
            , i = function (e) {
                "dark" === e ? document.documentElement.setAttribute("data-bs-theme", "dark") : document.documentElement.setAttribute("data-bs-theme", "light")
            };
        i(t());
        let r = document.getElementById("toggle-theme");
        if (r) {
            let l = e => {
                if (r.innerHTML = "",
                    "dark" === e) {
                    r.setAttribute("data-bs-theme-value", "light");
                    let t = document.createElement("i");
                    t.className = "hicon hicon-bold hicon-free-night-stay",
                        r.appendChild(t)
                } else {
                    r.setAttribute("data-bs-theme-value", "dark");
                    let i = document.createElement("i");
                    i.className = "hicon hicon-bold hicon-sunny",
                        r.appendChild(i)
                }
            }
                ;
            l(t()),
                r.addEventListener("click", () => {
                    let e = r.getAttribute("data-bs-theme-value");
                    localStorage.setItem("theme", e),
                        i(e),
                        l(e)
                }
                )
        }
    },
    bsValidation() {
        let e = document.querySelectorAll(".needs-validation");
        e.forEach(function (e) {
            e.addEventListener("submit", function (t) {
                e.checkValidity() || (t.preventDefault(),
                    t.stopPropagation()),
                    e.classList.add("was-validated")
            }, !1)
        })
    },
    highlight() {
        hljs.highlightAll()
    },
    codeSnippet() {
        document.querySelectorAll(".code-wrapper-inner").forEach(function (e) {
            e.insertAdjacentHTML("beforebegin", '<button type="button" class="btn btn-sm btn-light btn-clipboard">Copy</button>')
        }),
            new ClipboardJS(".btn-clipboard", {
                target: function (e) {
                    return e.nextElementSibling
                }
            }).on("success", e => {
                e.trigger.textContent = "Copied!",
                    e.clearSelection(),
                    setTimeout(function () {
                        e.trigger.textContent = "Copy"
                    }, 2e3)
            }
            ),
            new ClipboardJS(".btn-copy-icon").on("success", function (e) {
                e.clearSelection(),
                    e.trigger.textContent = "Copied!",
                    window.setTimeout(function () {
                        e.trigger.textContent = "Copy"
                    }, 2300)
            })
    },
    preloader() {
        let e = document.querySelector("#preloader");
        e && (window.onload = function () {
            if ("complete" === document.readyState) {
                function t() {
                    e.remove(),
                        document.body.classList.remove("vh-100", "vw-100", "overflow-hidden")
                }
                setTimeout(() => {
                    window.requestAnimationFrame(t)
                }
                    , 350)
            }
        }
        )
    }
};