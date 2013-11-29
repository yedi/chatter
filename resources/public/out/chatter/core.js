// Compiled by ClojureScript 0.0-2080
goog.provide('chatter.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('goog.events');
goog.require('cljs_websockets_async.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('cljs_websockets_async.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('goog.net.Jsonp');
goog.require('goog.events');
console.log(goog.dom.getElement("msg"));
chatter.core.listen = (function() {
var listen = null;
var listen__2 = (function (el,type){return listen.call(null,el,type,false);
});
var listen__3 = (function (el,type,prevent_QMARK_){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){cljs.core.async.put_BANG_.call(null,out,e);
if(cljs.core.truth_(prevent_QMARK_))
{return e.preventDefault();
} else
{return null;
}
}));
return out;
});
listen = function(el,type,prevent_QMARK_){
switch(arguments.length){
case 2:
return listen__2.call(this,el,type);
case 3:
return listen__3.call(this,el,type,prevent_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen.cljs$core$IFn$_invoke$arity$2 = listen__2;
listen.cljs$core$IFn$_invoke$arity$3 = listen__3;
return listen;
})()
;
chatter.core.clear_BANG_ = (function clear_BANG_(ele){return goog.dom.setTextContent(ele,"");
});
chatter.core.view_msg = (function view_msg(){return goog.dom.getElement("msg").value;
});
chatter.core.view_name = (function view_name(){return goog.dom.getElement("name").value;
});
chatter.core.user_msg = (function user_msg(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),chatter.core.view_name.call(null),new cljs.core.Keyword(null,"msg","msg",1014012659),chatter.core.view_msg.call(null)], null);
});
chatter.core.msg_line = (function msg_line(msg){return [cljs.core.str("<span style=\"display: block;\"><b>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str(":</b> "),cljs.core.str(new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("</span>")].join('');
});
chatter.core.render_msgs = (function render_msgs(msgs){return cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,chatter.core.msg_line,msgs));
});
/**
* @param {...*} var_args
*/
chatter.core.log = (function() { 
var log__delegate = function (msg){return console.log.apply(console,cljs.core.clj__GT_js.call(null,msg));
};
var log = function (var_args){
var msg = null;if (arguments.length > 0) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,msg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__29352){
var msg = cljs.core.seq(arglist__29352);
return log__delegate(msg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
chatter.core.init = (function init(){var c__5830__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5831__auto__ = (function (){var switch__5760__auto__ = (function (state_29501){var state_val_29502 = (state_29501[1]);if((state_val_29502 === 1))
{var inst_29444 = cljs_websockets_async.core.connect_BANG_.call(null,"ws://localhost:3000");var state_29501__$1 = state_29501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29501__$1,2,inst_29444);
} else
{if((state_val_29502 === 2))
{var inst_29446 = (state_29501[2]);var inst_29447 = goog.dom.getElement("send-msg-form");var inst_29448 = chatter.core.listen.call(null,inst_29447,"submit",true);var inst_29449 = goog.dom.getElement("chat-log");var state_29501__$1 = (function (){var statearr_29503 = state_29501;(statearr_29503[7] = inst_29449);
(statearr_29503[8] = inst_29448);
(statearr_29503[9] = inst_29446);
return statearr_29503;
})();var statearr_29504_29535 = state_29501__$1;(statearr_29504_29535[2] = null);
(statearr_29504_29535[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 3))
{var state_29501__$1 = state_29501;if(true)
{var statearr_29505_29536 = state_29501__$1;(statearr_29505_29536[1] = 5);
} else
{var statearr_29506_29537 = state_29501__$1;(statearr_29506_29537[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 4))
{var inst_29499 = (state_29501[2]);var state_29501__$1 = state_29501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29501__$1,inst_29499);
} else
{if((state_val_29502 === 5))
{var inst_29457 = (state_29501[10]);var inst_29448 = (state_29501[8]);var inst_29446 = (state_29501[9]);var inst_29457__$1 = new cljs.core.Keyword(null,"in","in",1013907607).cljs$core$IFn$_invoke$arity$1(inst_29446);var inst_29458 = [inst_29457__$1,inst_29448];var inst_29459 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_29458,null));var state_29501__$1 = (function (){var statearr_29507 = state_29501;(statearr_29507[10] = inst_29457__$1);
return statearr_29507;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29501__$1,8,inst_29459);
} else
{if((state_val_29502 === 6))
{var state_29501__$1 = state_29501;var statearr_29508_29538 = state_29501__$1;(statearr_29508_29538[2] = null);
(statearr_29508_29538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 7))
{var inst_29497 = (state_29501[2]);var state_29501__$1 = state_29501;var statearr_29509_29539 = state_29501__$1;(statearr_29509_29539[2] = inst_29497);
(statearr_29509_29539[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 8))
{var inst_29457 = (state_29501[10]);var inst_29463 = (state_29501[11]);var inst_29461 = (state_29501[12]);var inst_29461__$1 = (state_29501[2]);var inst_29462 = cljs.core.nth.call(null,inst_29461__$1,0,null);var inst_29463__$1 = cljs.core.nth.call(null,inst_29461__$1,1,null);var inst_29464 = cljs.core._EQ_.call(null,inst_29463__$1,inst_29457);var state_29501__$1 = (function (){var statearr_29510 = state_29501;(statearr_29510[11] = inst_29463__$1);
(statearr_29510[13] = inst_29462);
(statearr_29510[12] = inst_29461__$1);
return statearr_29510;
})();if(inst_29464)
{var statearr_29511_29540 = state_29501__$1;(statearr_29511_29540[1] = 9);
} else
{var statearr_29512_29541 = state_29501__$1;(statearr_29512_29541[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 9))
{var inst_29461 = (state_29501[12]);var inst_29449 = (state_29501[7]);var inst_29467 = cljs.core.nth.call(null,inst_29461,0,null);var inst_29468 = chatter.core.log.call(null,"results");var inst_29469 = chatter.core.log.call(null,inst_29467);var inst_29470 = chatter.core.render_msgs.call(null,inst_29467);var inst_29471 = inst_29449.innerHTML = inst_29470;var state_29501__$1 = (function (){var statearr_29513 = state_29501;(statearr_29513[14] = inst_29468);
(statearr_29513[15] = inst_29469);
return statearr_29513;
})();var statearr_29514_29542 = state_29501__$1;(statearr_29514_29542[2] = inst_29471);
(statearr_29514_29542[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 10))
{var inst_29463 = (state_29501[11]);var inst_29448 = (state_29501[8]);var inst_29473 = cljs.core._EQ_.call(null,inst_29463,inst_29448);var state_29501__$1 = state_29501;if(inst_29473)
{var statearr_29515_29543 = state_29501__$1;(statearr_29515_29543[1] = 12);
} else
{var statearr_29516_29544 = state_29501__$1;(statearr_29516_29544[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 11))
{var inst_29493 = (state_29501[2]);var state_29501__$1 = (function (){var statearr_29517 = state_29501;(statearr_29517[16] = inst_29493);
return statearr_29517;
})();var statearr_29518_29545 = state_29501__$1;(statearr_29518_29545[2] = null);
(statearr_29518_29545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 12))
{var inst_29461 = (state_29501[12]);var inst_29446 = (state_29501[9]);var inst_29476 = cljs.core.nth.call(null,inst_29461,0,null);var inst_29477 = chatter.core.log.call(null,"sent");var inst_29478 = new cljs.core.Keyword(null,"out","out",1014014656).cljs$core$IFn$_invoke$arity$1(inst_29446);var inst_29479 = chatter.core.user_msg.call(null);var state_29501__$1 = (function (){var statearr_29519 = state_29501;(statearr_29519[17] = inst_29477);
(statearr_29519[18] = inst_29476);
return statearr_29519;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29501__$1,15,inst_29478,inst_29479);
} else
{if((state_val_29502 === 13))
{var inst_29463 = (state_29501[11]);var inst_29485 = cljs.core._EQ_.call(null,inst_29463,new cljs.core.Keyword(null,"default","default",2558708147));var state_29501__$1 = state_29501;if(inst_29485)
{var statearr_29520_29546 = state_29501__$1;(statearr_29520_29546[1] = 16);
} else
{var statearr_29521_29547 = state_29501__$1;(statearr_29521_29547[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 14))
{var inst_29491 = (state_29501[2]);var state_29501__$1 = state_29501;var statearr_29522_29548 = state_29501__$1;(statearr_29522_29548[2] = inst_29491);
(statearr_29522_29548[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 15))
{var inst_29481 = (state_29501[2]);var inst_29482 = goog.dom.getElement("msg");var inst_29483 = chatter.core.clear_BANG_.call(null,inst_29482);var state_29501__$1 = (function (){var statearr_29523 = state_29501;(statearr_29523[19] = inst_29481);
return statearr_29523;
})();var statearr_29524_29549 = state_29501__$1;(statearr_29524_29549[2] = inst_29483);
(statearr_29524_29549[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 16))
{var inst_29462 = (state_29501[13]);var state_29501__$1 = state_29501;var statearr_29525_29550 = state_29501__$1;(statearr_29525_29550[2] = inst_29462);
(statearr_29525_29550[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 17))
{var state_29501__$1 = state_29501;var statearr_29526_29551 = state_29501__$1;(statearr_29526_29551[2] = null);
(statearr_29526_29551[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29502 === 18))
{var inst_29489 = (state_29501[2]);var state_29501__$1 = state_29501;var statearr_29527_29552 = state_29501__$1;(statearr_29527_29552[2] = inst_29489);
(statearr_29527_29552[1] = 14);
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
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5760__auto__){
return (function() {
var state_machine__5761__auto__ = null;
var state_machine__5761__auto____0 = (function (){var statearr_29531 = (new Array(20));(statearr_29531[0] = state_machine__5761__auto__);
(statearr_29531[1] = 1);
return statearr_29531;
});
var state_machine__5761__auto____1 = (function (state_29501){while(true){
var ret_value__5762__auto__ = (function (){try{while(true){
var result__5763__auto__ = switch__5760__auto__.call(null,state_29501);if(cljs.core.keyword_identical_QMARK_.call(null,result__5763__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5763__auto__;
}
break;
}
}catch (e29532){if((e29532 instanceof Object))
{var ex__5764__auto__ = e29532;var statearr_29533_29553 = state_29501;(statearr_29533_29553[5] = ex__5764__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5762__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29554 = state_29501;
state_29501 = G__29554;
continue;
}
} else
{return ret_value__5762__auto__;
}
break;
}
});
state_machine__5761__auto__ = function(state_29501){
switch(arguments.length){
case 0:
return state_machine__5761__auto____0.call(this);
case 1:
return state_machine__5761__auto____1.call(this,state_29501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5761__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5761__auto____0;
state_machine__5761__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5761__auto____1;
return state_machine__5761__auto__;
})()
;})(switch__5760__auto__))
})();var state__5832__auto__ = (function (){var statearr_29534 = f__5831__auto__.call(null);(statearr_29534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5830__auto__);
return statearr_29534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5832__auto__);
}));
return c__5830__auto__;
});
chatter.core.init.call(null);

//# sourceMappingURL=core.js.map