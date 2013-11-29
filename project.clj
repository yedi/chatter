(defproject chatter "0.1.0-SNAPSHOT"
  :description "Websockets Chat App"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2080"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [ring "1.1.6"]
                 [compojure "1.1.5"]
                 [hiccup "1.0.0"]
                 [com.keminglabs/jetty7-websockets-async "0.1.0-SNAPSHOT"]
                 [cljs-websockets-async "0.1.0-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.0"]
            [lein-ring "0.8.2"]]

  :keep-non-project-classes true

  :source-paths ["src-clj"]

  :cljsbuild { 
    :builds [{:id "chatter"
              :source-paths ["src-cljs"]
              :compiler {
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/out"
                :optimizations :none
                         :source-map true}}]}

  :main chatter.handler
  :aot [chatter.handler]

  :ring {:handler chatter.handler/app
         :auto-reload? true
         :auto-refresh true})
