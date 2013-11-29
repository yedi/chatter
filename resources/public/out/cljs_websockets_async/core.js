// Compiled by ClojureScript 0.0-2080
goog.provide('cljs_websockets_async.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
/**
* Connects to a websocket.
* Options:
* :in  - a fn called w/ no arguments to obtain a core.async channel for input (optional, default: cljs.core.async/chan)
* :out - a fn called w/ no arguments to obtain a core.async channel for output (optional, default: cljs.core.async/chan)
* 
* Returns a channel that, when connected, puts a map with with keys,
* :ws  - Raw Websocket object
* :in  - Channel to write values to socket on
* :out - Channel to recieve socket data on
*/
cljs_websockets_async.core.connect_BANG_ = (function() {
var connect_BANG_ = null;
var connect_BANG___1 = (function (uri){return connect_BANG_.call(null,uri,cljs.core.PersistentArrayMap.EMPTY);
});
var connect_BANG___2 = (function (uri,p__18518){var map__18582 = p__18518;var map__18582__$1 = ((cljs.core.seq_QMARK_.call(null,map__18582))?cljs.core.apply.call(null,cljs.core.hash_map,map__18582):map__18582);var out = cljs.core.get.call(null,map__18582__$1,new cljs.core.Keyword(null,"out","out",1014014656),cljs.core.async.chan);var in$ = cljs.core.get.call(null,map__18582__$1,new cljs.core.Keyword(null,"in","in",1013907607),cljs.core.async.chan);var on_connect = cljs.core.async.chan.call(null);var c__5822__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_18599){var state_val_18600 = (state_18599[1]);if((state_val_18600 === 2))
{var inst_18584 = (state_18599[7]);var inst_18583 = (state_18599[8]);var inst_18585 = (state_18599[9]);var inst_18594 = (state_18599[2]);var inst_18595 = [new cljs.core.Keyword(null,"ws","ws",1013908046),new cljs.core.Keyword(null,"out","out",1014014656),new cljs.core.Keyword(null,"in","in",1013907607)];var inst_18596 = [inst_18585,inst_18583,inst_18584];var inst_18597 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_18595,inst_18596);var state_18599__$1 = (function (){var statearr_18601 = state_18599;(statearr_18601[10] = inst_18594);
return statearr_18601;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18599__$1,inst_18597);
} else
{if((state_val_18600 === 1))
{var inst_18584 = (state_18599[7]);var inst_18583 = (state_18599[8]);var inst_18585 = (state_18599[9]);var inst_18583__$1 = in$.call(null);var inst_18584__$1 = out.call(null);var inst_18585__$1 = (new WebSocket(uri));var inst_18587 = (function (){var G__18586 = inst_18585__$1;var ws = inst_18585__$1;var out__$1 = inst_18584__$1;var in$__$1 = inst_18583__$1;return ((function (G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600){
return (function (){cljs.core.async.close_BANG_.call(null,on_connect);
var c__5822__auto____$1 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5822__auto____$1,G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600){
return (function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = ((function (c__5822__auto____$1,G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600){
return (function (state_18619){var state_val_18620 = (state_18619[1]);if((state_val_18620 === 7))
{var inst_18615 = (state_18619[2]);var state_18619__$1 = state_18619;var statearr_18621_18645 = state_18619__$1;(statearr_18621_18645[2] = inst_18615);
(statearr_18621_18645[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18620 === 6))
{var inst_18612 = cljs.core.async.close_BANG_.call(null,out__$1);var inst_18613 = ws.close();var state_18619__$1 = (function (){var statearr_18622 = state_18619;(statearr_18622[7] = inst_18612);
return statearr_18622;
})();var statearr_18623_18646 = state_18619__$1;(statearr_18623_18646[2] = inst_18613);
(statearr_18623_18646[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18620 === 5))
{var inst_18604 = (state_18619[8]);var inst_18608 = cljs.core.pr_str.call(null,inst_18604);var inst_18609 = ws.send(inst_18608);var state_18619__$1 = (function (){var statearr_18624 = state_18619;(statearr_18624[9] = inst_18609);
return statearr_18624;
})();var statearr_18625_18647 = state_18619__$1;(statearr_18625_18647[2] = null);
(statearr_18625_18647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18620 === 4))
{var inst_18604 = (state_18619[8]);var inst_18604__$1 = (state_18619[2]);var inst_18605 = (inst_18604__$1 == null);var inst_18606 = cljs.core.not.call(null,inst_18605);var state_18619__$1 = (function (){var statearr_18626 = state_18619;(statearr_18626[8] = inst_18604__$1);
return statearr_18626;
})();if(inst_18606)
{var statearr_18627_18648 = state_18619__$1;(statearr_18627_18648[1] = 5);
} else
{var statearr_18628_18649 = state_18619__$1;(statearr_18628_18649[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18620 === 3))
{var inst_18617 = (state_18619[2]);var state_18619__$1 = state_18619;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18619__$1,inst_18617);
} else
{if((state_val_18620 === 2))
{var state_18619__$1 = state_18619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18619__$1,4,in$__$1);
} else
{if((state_val_18620 === 1))
{var state_18619__$1 = state_18619;var statearr_18629_18650 = state_18619__$1;(statearr_18629_18650[2] = null);
(statearr_18629_18650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5822__auto____$1,G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600))
;return ((function (switch__5752__auto__,c__5822__auto____$1,G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_18633 = (new Array(10));(statearr_18633[0] = state_machine__5753__auto__);
(statearr_18633[1] = 1);
return statearr_18633;
});
var state_machine__5753__auto____1 = (function (state_18619){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_18619);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e18634){if((e18634 instanceof Object))
{var ex__5756__auto__ = e18634;var statearr_18635_18651 = state_18619;(statearr_18635_18651[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18619);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18652 = state_18619;
state_18619 = G__18652;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_18619){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_18619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__,c__5822__auto____$1,G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600))
})();var state__5824__auto__ = (function (){var statearr_18636 = f__5823__auto__.call(null);(statearr_18636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto____$1);
return statearr_18636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
});})(c__5822__auto____$1,G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600))
);
return c__5822__auto____$1;
});
;})(G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,state_val_18600))
})();var inst_18588 = (inst_18585__$1["onopen"] = inst_18587);var inst_18589 = (function (){var G__18586 = inst_18585__$1;var ws = inst_18585__$1;var out__$1 = inst_18584__$1;var in$__$1 = inst_18583__$1;return ((function (G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,inst_18587,inst_18588,state_val_18600){
return (function (m){var temp__4092__auto__ = cljs.reader.read_string.call(null,m.data);if(cljs.core.truth_(temp__4092__auto__))
{var data = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,out__$1,data);
} else
{return null;
}
});
;})(G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,inst_18587,inst_18588,state_val_18600))
})();var inst_18590 = (inst_18585__$1["onmessage"] = inst_18589);var inst_18591 = (function (){var G__18586 = inst_18585__$1;var ws = inst_18585__$1;var out__$1 = inst_18584__$1;var in$__$1 = inst_18583__$1;return ((function (G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,inst_18587,inst_18588,inst_18589,inst_18590,state_val_18600){
return (function (){cljs.core.async.close_BANG_.call(null,in$__$1);
return cljs.core.async.close_BANG_.call(null,out__$1);
});
;})(G__18586,ws,out__$1,in$__$1,inst_18584,inst_18583,inst_18585,inst_18583__$1,inst_18584__$1,inst_18585__$1,inst_18587,inst_18588,inst_18589,inst_18590,state_val_18600))
})();var inst_18592 = (inst_18585__$1["onclose"] = inst_18591);var state_18599__$1 = (function (){var statearr_18637 = state_18599;(statearr_18637[11] = inst_18590);
(statearr_18637[12] = inst_18592);
(statearr_18637[13] = inst_18588);
(statearr_18637[7] = inst_18584__$1);
(statearr_18637[8] = inst_18583__$1);
(statearr_18637[9] = inst_18585__$1);
return statearr_18637;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18599__$1,2,on_connect);
} else
{return null;
}
}
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_18641 = (new Array(14));(statearr_18641[0] = state_machine__5753__auto__);
(statearr_18641[1] = 1);
return statearr_18641;
});
var state_machine__5753__auto____1 = (function (state_18599){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_18599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e18642){if((e18642 instanceof Object))
{var ex__5756__auto__ = e18642;var statearr_18643_18653 = state_18599;(statearr_18643_18653[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18654 = state_18599;
state_18599 = G__18654;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_18599){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_18599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_18644 = f__5823__auto__.call(null);(statearr_18644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto__);
return statearr_18644;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return c__5822__auto__;
});
connect_BANG_ = function(uri,p__18518){
switch(arguments.length){
case 1:
return connect_BANG___1.call(this,uri);
case 2:
return connect_BANG___2.call(this,uri,p__18518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connect_BANG_.cljs$core$IFn$_invoke$arity$1 = connect_BANG___1;
connect_BANG_.cljs$core$IFn$_invoke$arity$2 = connect_BANG___2;
return connect_BANG_;
})()
;

//# sourceMappingURL=core.js.map