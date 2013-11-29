(ns chatter.chat
  (:require [clojure.core.async :refer [chan go go-loop >! <!]]
            [clojure.edn :as edn]))

;; :in is the client, we send stuff there
;; :out is where we recieve stuff from the client

(def log (atom []))
(def chatters (atom []))

(defn send-log [log]
  (println "sending log:")
  (println log)
  (go (doseq [chatter @chatters]
        (println chatter)
        (>! (:in chatter) (pr-str log)))))

(defn update-log! [user-msg]
  (println (str "updating log with: " user-msg))
  (swap! log conj user-msg)
  (send-log @log))

(defn listen-to-chatter! [chatter]
  (go-loop [i 0 msg (<! (:out chatter))]
    (when msg
      (println (str "chatter-" (:id chatter) " message #" i))
      (update-log! (edn/read-string msg))
      (recur (inc i) (<! (:out chatter))))))

(defn start-chat [handler_chan]
  (go-loop [id 0]
           (let [ws-req (<! handler_chan)
                 chatter (assoc ws-req :id id)]
        (println (str "got client: " id))
        (swap! chatters conj chatter)
        (listen-to-chatter! chatter)
        (>! (:in chatter) (pr-str @log))
        (recur (inc id)))))