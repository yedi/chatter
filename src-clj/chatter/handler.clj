(ns chatter.handler
  (:use compojure.core
        [hiccup.middleware :only (wrap-base-url)])
  (:require [compojure.route :as route]
            [compojure.handler :as handler]
            [compojure.response :as response]
            [ring.util.response :as resp]
            [ring.adapter.jetty :refer [run-jetty]]
            [chatter.chat :refer [start-chat]]
            [com.keminglabs.jetty7-websockets-async.core :refer [configurator]]
            [clojure.core.async :refer [chan]]))

(defroutes main-routes
  (GET "/" [] (resp/redirect "/index.html"))
  (route/resources "/")
  (route/not-found "Page not found"))

(defn wrap-dir-index [handler]
  (fn [req]
    (handler
     (update-in req [:uri]
                #(if (= "/" %) "/index.html" %)))))

(def app
  (-> main-routes
      handler/site
      (wrap-base-url)
      (wrap-dir-index)))

(def c (chan))

(def ws-configurator
  (configurator c {:path "/"}))

(defn start-server [port]
  (run-jetty app {:port port :join? false
                  :configurator ws-configurator}))

(defn -main [& args]
  (let [port (Integer. (or (first args) "3000"))]
    (start-server port)))

(start-chat c)
