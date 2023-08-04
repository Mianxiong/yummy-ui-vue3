import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/SwitchDemo.vue"
import TabsDemo from "./components/TabsDemo.vue"
import ButtonDemo from "./components/ButtonDemo.vue"
import DialogDemo from "./components/DialogDemo.vue"
import DocDemo from "./components/DocDemo.vue"
import Intro from "./views/Intro.vue"
import GetStarted from "./views/GetStarted.vue"
import Install from "./views/Install.vue"
import CarouselDemo from "./components/CarouselDemo.vue"
// import Markdown from "./components/Markdown.vue"
// import {h} from "vue"

// const md = (filename: string) => h(Markdown, {path: `../markdown/${filename}.md`, key: filename})

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: "/", component: Home},
        {
            path: "/doc", component: Doc,
            children: [
                // {path: "", component: DocDemo},
                {path: "", redirect: "/doc/intro"},
                {path: "intro", component: Intro},
                {path: "get-started", component: GetStarted},
                {path: "install", component: Install},
                // {path: "intro", component: md("intro")},
                // {path: "get-started", component: md("get-started")},
                // {path: "install", component: md("install")},
                {path: "switch", component: SwitchDemo},
                {path: "button", component: ButtonDemo},
                {path: "dialog", component: DialogDemo},
                {path: "tabs", component: TabsDemo},
                {path: "carousel", component: CarouselDemo}
            ]
        },
    ]

})