(ns chatter.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [<! >! put! chan]]
            [cljs.reader :refer [read-string]]
            [cljs-websockets-async.core :as ws])
  (:import [goog.net Jsonp]
           [goog Uri]))

;; :in is where we recieve stuff from the server
;; :out is server, we send stuff there

(.log js/console (dom/getElement "msg"))

(defn listen
  ([el type] (listen el type false))
  ([el type prevent?]
     (let [out (chan)]
       (events/listen el type
         (fn [e] (put! out e)
           (cond prevent? (.preventDefault e))))
       out)))

(defn clear! [ele]
  (dom/setTextContent ele ""))

(defn view-msg []
  (.-value (dom/getElement "msg")))

(defn view-name []
  (.-value (dom/getElement "name")))

(defn user-msg []
  {:name (view-name) :msg (view-msg)})

(defn msg-line [msg]
  (str "<span style=\"display: block;\"><b>" (:name msg) ":</b> " (:msg msg) "</span>"))

(defn render-msgs [msgs]
  (reduce str "" (map msg-line msgs)))

(defn log [& msg] 
  (.apply (.-log js/console) js/console (clj->js msg)))

(defn init []
  (go
   (let [socket (<! (ws/connect! "ws://localhost:3000"))
         submits (listen (dom/getElement "send-msg-form") "submit" true)
         results-view (dom/getElement "chat-log")]
     (while true
       (alt!
        (:in socket) ([msgs] (log "results") (log msgs)
                        (set! (.-innerHTML results-view)
                              (render-msgs msgs)))
        submits ([_] (log "sent")
                   (>! (:out socket) (user-msg))
                   (clear! (dom/getElement "msg"))))))))

(init)