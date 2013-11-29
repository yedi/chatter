// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15088 = (function (f,fn_handler,meta15089){
this.f = f;
this.fn_handler = fn_handler;
this.meta15089 = meta15089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15088.cljs$lang$type = true;
cljs.core.async.t15088.cljs$lang$ctorStr = "cljs.core.async/t15088";
cljs.core.async.t15088.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15088");
});
cljs.core.async.t15088.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15090){var self__ = this;
var _15090__$1 = this;return self__.meta15089;
});
cljs.core.async.t15088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15090,meta15089__$1){var self__ = this;
var _15090__$1 = this;return (new cljs.core.async.t15088(self__.f,self__.fn_handler,meta15089__$1));
});
cljs.core.async.__GT_t15088 = (function __GT_t15088(f__$1,fn_handler__$1,meta15089){return (new cljs.core.async.t15088(f__$1,fn_handler__$1,meta15089));
});
}
return (new cljs.core.async.t15088(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15092 = buff;if(G__15092)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15092.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15092.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15092);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15092);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15093 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15093);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15093);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___15094 = n;var x_15095 = 0;while(true){
if((x_15095 < n__4114__auto___15094))
{(a[x_15095] = 0);
{
var G__15096 = (x_15095 + 1);
x_15095 = G__15096;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15097 = (i + 1);
i = G__15097;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15101 = (function (flag,alt_flag,meta15102){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15102 = meta15102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15101.cljs$lang$type = true;
cljs.core.async.t15101.cljs$lang$ctorStr = "cljs.core.async/t15101";
cljs.core.async.t15101.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15101");
});
cljs.core.async.t15101.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15103){var self__ = this;
var _15103__$1 = this;return self__.meta15102;
});
cljs.core.async.t15101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15103,meta15102__$1){var self__ = this;
var _15103__$1 = this;return (new cljs.core.async.t15101(self__.flag,self__.alt_flag,meta15102__$1));
});
cljs.core.async.__GT_t15101 = (function __GT_t15101(flag__$1,alt_flag__$1,meta15102){return (new cljs.core.async.t15101(flag__$1,alt_flag__$1,meta15102));
});
}
return (new cljs.core.async.t15101(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15107 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15107 = (function (cb,flag,alt_handler,meta15108){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15108 = meta15108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15107.cljs$lang$type = true;
cljs.core.async.t15107.cljs$lang$ctorStr = "cljs.core.async/t15107";
cljs.core.async.t15107.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15107");
});
cljs.core.async.t15107.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15107.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15107.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15109){var self__ = this;
var _15109__$1 = this;return self__.meta15108;
});
cljs.core.async.t15107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15109,meta15108__$1){var self__ = this;
var _15109__$1 = this;return (new cljs.core.async.t15107(self__.cb,self__.flag,self__.alt_handler,meta15108__$1));
});
cljs.core.async.__GT_t15107 = (function __GT_t15107(cb__$1,flag__$1,alt_handler__$1,meta15108){return (new cljs.core.async.t15107(cb__$1,flag__$1,alt_handler__$1,meta15108));
});
}
return (new cljs.core.async.t15107(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15110_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15110_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15111 = (i + 1);
i = G__15111;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3279__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15112){var map__15114 = p__15112;var map__15114__$1 = ((cljs.core.seq_QMARK_.call(null,map__15114))?cljs.core.apply.call(null,cljs.core.hash_map,map__15114):map__15114);var opts = map__15114__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15112 = null;if (arguments.length > 1) {
  p__15112 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15112);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15115){
var ports = cljs.core.first(arglist__15115);
var p__15112 = cljs.core.rest(arglist__15115);
return alts_BANG___delegate(ports,p__15112);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15123 = (function (ch,f,map_LT_,meta15124){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15124 = meta15124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15123.cljs$lang$type = true;
cljs.core.async.t15123.cljs$lang$ctorStr = "cljs.core.async/t15123";
cljs.core.async.t15123.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15123");
});
cljs.core.async.t15123.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15123.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15126 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15126 = (function (fn1,_,meta15124,ch,f,map_LT_,meta15127){
this.fn1 = fn1;
this._ = _;
this.meta15124 = meta15124;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15127 = meta15127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15126.cljs$lang$type = true;
cljs.core.async.t15126.cljs$lang$ctorStr = "cljs.core.async/t15126";
cljs.core.async.t15126.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15126");
});
cljs.core.async.t15126.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15126.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15116_SHARP_){return f1.call(null,(((p1__15116_SHARP_ == null))?null:self__.f.call(null,p1__15116_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15128){var self__ = this;
var _15128__$1 = this;return self__.meta15127;
});
cljs.core.async.t15126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15128,meta15127__$1){var self__ = this;
var _15128__$1 = this;return (new cljs.core.async.t15126(self__.fn1,self__._,self__.meta15124,self__.ch,self__.f,self__.map_LT_,meta15127__$1));
});
cljs.core.async.__GT_t15126 = (function __GT_t15126(fn1__$1,___$2,meta15124__$1,ch__$2,f__$2,map_LT___$2,meta15127){return (new cljs.core.async.t15126(fn1__$1,___$2,meta15124__$1,ch__$2,f__$2,map_LT___$2,meta15127));
});
}
return (new cljs.core.async.t15126(fn1,___$1,self__.meta15124,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15123.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15125){var self__ = this;
var _15125__$1 = this;return self__.meta15124;
});
cljs.core.async.t15123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15125,meta15124__$1){var self__ = this;
var _15125__$1 = this;return (new cljs.core.async.t15123(self__.ch,self__.f,self__.map_LT_,meta15124__$1));
});
cljs.core.async.__GT_t15123 = (function __GT_t15123(ch__$1,f__$1,map_LT___$1,meta15124){return (new cljs.core.async.t15123(ch__$1,f__$1,map_LT___$1,meta15124));
});
}
return (new cljs.core.async.t15123(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15132 = (function (ch,f,map_GT_,meta15133){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15133 = meta15133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15132.cljs$lang$type = true;
cljs.core.async.t15132.cljs$lang$ctorStr = "cljs.core.async/t15132";
cljs.core.async.t15132.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15132");
});
cljs.core.async.t15132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15134){var self__ = this;
var _15134__$1 = this;return self__.meta15133;
});
cljs.core.async.t15132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15134,meta15133__$1){var self__ = this;
var _15134__$1 = this;return (new cljs.core.async.t15132(self__.ch,self__.f,self__.map_GT_,meta15133__$1));
});
cljs.core.async.__GT_t15132 = (function __GT_t15132(ch__$1,f__$1,map_GT___$1,meta15133){return (new cljs.core.async.t15132(ch__$1,f__$1,map_GT___$1,meta15133));
});
}
return (new cljs.core.async.t15132(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15138 = (function (ch,p,filter_GT_,meta15139){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15139 = meta15139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15138.cljs$lang$type = true;
cljs.core.async.t15138.cljs$lang$ctorStr = "cljs.core.async/t15138";
cljs.core.async.t15138.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15138");
});
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15140){var self__ = this;
var _15140__$1 = this;return self__.meta15139;
});
cljs.core.async.t15138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15140,meta15139__$1){var self__ = this;
var _15140__$1 = this;return (new cljs.core.async.t15138(self__.ch,self__.p,self__.filter_GT_,meta15139__$1));
});
cljs.core.async.__GT_t15138 = (function __GT_t15138(ch__$1,p__$1,filter_GT___$1,meta15139){return (new cljs.core.async.t15138(ch__$1,p__$1,filter_GT___$1,meta15139));
});
}
return (new cljs.core.async.t15138(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5822__auto___15223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_15202){var state_val_15203 = (state_15202[1]);if((state_val_15203 === 1))
{var state_15202__$1 = state_15202;var statearr_15204_15224 = state_15202__$1;(statearr_15204_15224[2] = null);
(statearr_15204_15224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 2))
{var state_15202__$1 = state_15202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15202__$1,4,ch);
} else
{if((state_val_15203 === 3))
{var inst_15200 = (state_15202[2]);var state_15202__$1 = state_15202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15202__$1,inst_15200);
} else
{if((state_val_15203 === 4))
{var inst_15184 = (state_15202[7]);var inst_15184__$1 = (state_15202[2]);var inst_15185 = (inst_15184__$1 == null);var state_15202__$1 = (function (){var statearr_15205 = state_15202;(statearr_15205[7] = inst_15184__$1);
return statearr_15205;
})();if(cljs.core.truth_(inst_15185))
{var statearr_15206_15225 = state_15202__$1;(statearr_15206_15225[1] = 5);
} else
{var statearr_15207_15226 = state_15202__$1;(statearr_15207_15226[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 5))
{var inst_15187 = cljs.core.async.close_BANG_.call(null,out);var state_15202__$1 = state_15202;var statearr_15208_15227 = state_15202__$1;(statearr_15208_15227[2] = inst_15187);
(statearr_15208_15227[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 6))
{var inst_15184 = (state_15202[7]);var inst_15189 = p.call(null,inst_15184);var state_15202__$1 = state_15202;if(cljs.core.truth_(inst_15189))
{var statearr_15209_15228 = state_15202__$1;(statearr_15209_15228[1] = 8);
} else
{var statearr_15210_15229 = state_15202__$1;(statearr_15210_15229[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 7))
{var inst_15198 = (state_15202[2]);var state_15202__$1 = state_15202;var statearr_15211_15230 = state_15202__$1;(statearr_15211_15230[2] = inst_15198);
(statearr_15211_15230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 8))
{var inst_15184 = (state_15202[7]);var state_15202__$1 = state_15202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15202__$1,11,out,inst_15184);
} else
{if((state_val_15203 === 9))
{var state_15202__$1 = state_15202;var statearr_15212_15231 = state_15202__$1;(statearr_15212_15231[2] = null);
(statearr_15212_15231[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 10))
{var inst_15195 = (state_15202[2]);var state_15202__$1 = (function (){var statearr_15213 = state_15202;(statearr_15213[8] = inst_15195);
return statearr_15213;
})();var statearr_15214_15232 = state_15202__$1;(statearr_15214_15232[2] = null);
(statearr_15214_15232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 11))
{var inst_15192 = (state_15202[2]);var state_15202__$1 = state_15202;var statearr_15215_15233 = state_15202__$1;(statearr_15215_15233[2] = inst_15192);
(statearr_15215_15233[1] = 10);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_15219 = (new Array(9));(statearr_15219[0] = state_machine__5753__auto__);
(statearr_15219[1] = 1);
return statearr_15219;
});
var state_machine__5753__auto____1 = (function (state_15202){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_15202);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e15220){if((e15220 instanceof Object))
{var ex__5756__auto__ = e15220;var statearr_15221_15234 = state_15202;(statearr_15221_15234[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15235 = state_15202;
state_15202 = G__15235;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_15202){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_15202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_15222 = f__5823__auto__.call(null);(statearr_15222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___15223);
return statearr_15222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5822__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_15387){var state_val_15388 = (state_15387[1]);if((state_val_15388 === 1))
{var state_15387__$1 = state_15387;var statearr_15389_15426 = state_15387__$1;(statearr_15389_15426[2] = null);
(statearr_15389_15426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 2))
{var state_15387__$1 = state_15387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15387__$1,4,in$);
} else
{if((state_val_15388 === 3))
{var inst_15385 = (state_15387[2]);var state_15387__$1 = state_15387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15387__$1,inst_15385);
} else
{if((state_val_15388 === 4))
{var inst_15333 = (state_15387[7]);var inst_15333__$1 = (state_15387[2]);var inst_15334 = (inst_15333__$1 == null);var state_15387__$1 = (function (){var statearr_15390 = state_15387;(statearr_15390[7] = inst_15333__$1);
return statearr_15390;
})();if(cljs.core.truth_(inst_15334))
{var statearr_15391_15427 = state_15387__$1;(statearr_15391_15427[1] = 5);
} else
{var statearr_15392_15428 = state_15387__$1;(statearr_15392_15428[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 5))
{var inst_15336 = cljs.core.async.close_BANG_.call(null,out);var state_15387__$1 = state_15387;var statearr_15393_15429 = state_15387__$1;(statearr_15393_15429[2] = inst_15336);
(statearr_15393_15429[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 6))
{var inst_15333 = (state_15387[7]);var inst_15338 = f.call(null,inst_15333);var inst_15343 = cljs.core.seq.call(null,inst_15338);var inst_15344 = inst_15343;var inst_15345 = null;var inst_15346 = 0;var inst_15347 = 0;var state_15387__$1 = (function (){var statearr_15394 = state_15387;(statearr_15394[8] = inst_15347);
(statearr_15394[9] = inst_15346);
(statearr_15394[10] = inst_15344);
(statearr_15394[11] = inst_15345);
return statearr_15394;
})();var statearr_15395_15430 = state_15387__$1;(statearr_15395_15430[2] = null);
(statearr_15395_15430[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 7))
{var inst_15383 = (state_15387[2]);var state_15387__$1 = state_15387;var statearr_15396_15431 = state_15387__$1;(statearr_15396_15431[2] = inst_15383);
(statearr_15396_15431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 8))
{var inst_15347 = (state_15387[8]);var inst_15346 = (state_15387[9]);var inst_15349 = (inst_15347 < inst_15346);var inst_15350 = inst_15349;var state_15387__$1 = state_15387;if(cljs.core.truth_(inst_15350))
{var statearr_15397_15432 = state_15387__$1;(statearr_15397_15432[1] = 10);
} else
{var statearr_15398_15433 = state_15387__$1;(statearr_15398_15433[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 9))
{var inst_15380 = (state_15387[2]);var state_15387__$1 = (function (){var statearr_15399 = state_15387;(statearr_15399[12] = inst_15380);
return statearr_15399;
})();var statearr_15400_15434 = state_15387__$1;(statearr_15400_15434[2] = null);
(statearr_15400_15434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 10))
{var inst_15347 = (state_15387[8]);var inst_15345 = (state_15387[11]);var inst_15352 = cljs.core._nth.call(null,inst_15345,inst_15347);var state_15387__$1 = state_15387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15387__$1,13,out,inst_15352);
} else
{if((state_val_15388 === 11))
{var inst_15344 = (state_15387[10]);var inst_15358 = (state_15387[13]);var inst_15358__$1 = cljs.core.seq.call(null,inst_15344);var state_15387__$1 = (function (){var statearr_15404 = state_15387;(statearr_15404[13] = inst_15358__$1);
return statearr_15404;
})();if(inst_15358__$1)
{var statearr_15405_15435 = state_15387__$1;(statearr_15405_15435[1] = 14);
} else
{var statearr_15406_15436 = state_15387__$1;(statearr_15406_15436[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 12))
{var inst_15378 = (state_15387[2]);var state_15387__$1 = state_15387;var statearr_15407_15437 = state_15387__$1;(statearr_15407_15437[2] = inst_15378);
(statearr_15407_15437[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 13))
{var inst_15347 = (state_15387[8]);var inst_15346 = (state_15387[9]);var inst_15344 = (state_15387[10]);var inst_15345 = (state_15387[11]);var inst_15354 = (state_15387[2]);var inst_15355 = (inst_15347 + 1);var tmp15401 = inst_15346;var tmp15402 = inst_15344;var tmp15403 = inst_15345;var inst_15344__$1 = tmp15402;var inst_15345__$1 = tmp15403;var inst_15346__$1 = tmp15401;var inst_15347__$1 = inst_15355;var state_15387__$1 = (function (){var statearr_15408 = state_15387;(statearr_15408[8] = inst_15347__$1);
(statearr_15408[9] = inst_15346__$1);
(statearr_15408[10] = inst_15344__$1);
(statearr_15408[11] = inst_15345__$1);
(statearr_15408[14] = inst_15354);
return statearr_15408;
})();var statearr_15409_15438 = state_15387__$1;(statearr_15409_15438[2] = null);
(statearr_15409_15438[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 14))
{var inst_15358 = (state_15387[13]);var inst_15360 = cljs.core.chunked_seq_QMARK_.call(null,inst_15358);var state_15387__$1 = state_15387;if(inst_15360)
{var statearr_15410_15439 = state_15387__$1;(statearr_15410_15439[1] = 17);
} else
{var statearr_15411_15440 = state_15387__$1;(statearr_15411_15440[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 15))
{var state_15387__$1 = state_15387;var statearr_15412_15441 = state_15387__$1;(statearr_15412_15441[2] = null);
(statearr_15412_15441[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 16))
{var inst_15376 = (state_15387[2]);var state_15387__$1 = state_15387;var statearr_15413_15442 = state_15387__$1;(statearr_15413_15442[2] = inst_15376);
(statearr_15413_15442[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 17))
{var inst_15358 = (state_15387[13]);var inst_15362 = cljs.core.chunk_first.call(null,inst_15358);var inst_15363 = cljs.core.chunk_rest.call(null,inst_15358);var inst_15364 = cljs.core.count.call(null,inst_15362);var inst_15344 = inst_15363;var inst_15345 = inst_15362;var inst_15346 = inst_15364;var inst_15347 = 0;var state_15387__$1 = (function (){var statearr_15414 = state_15387;(statearr_15414[8] = inst_15347);
(statearr_15414[9] = inst_15346);
(statearr_15414[10] = inst_15344);
(statearr_15414[11] = inst_15345);
return statearr_15414;
})();var statearr_15415_15443 = state_15387__$1;(statearr_15415_15443[2] = null);
(statearr_15415_15443[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 18))
{var inst_15358 = (state_15387[13]);var inst_15367 = cljs.core.first.call(null,inst_15358);var state_15387__$1 = state_15387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15387__$1,20,out,inst_15367);
} else
{if((state_val_15388 === 19))
{var inst_15373 = (state_15387[2]);var state_15387__$1 = state_15387;var statearr_15416_15444 = state_15387__$1;(statearr_15416_15444[2] = inst_15373);
(statearr_15416_15444[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 20))
{var inst_15358 = (state_15387[13]);var inst_15369 = (state_15387[2]);var inst_15370 = cljs.core.next.call(null,inst_15358);var inst_15344 = inst_15370;var inst_15345 = null;var inst_15346 = 0;var inst_15347 = 0;var state_15387__$1 = (function (){var statearr_15417 = state_15387;(statearr_15417[8] = inst_15347);
(statearr_15417[9] = inst_15346);
(statearr_15417[10] = inst_15344);
(statearr_15417[11] = inst_15345);
(statearr_15417[15] = inst_15369);
return statearr_15417;
})();var statearr_15418_15445 = state_15387__$1;(statearr_15418_15445[2] = null);
(statearr_15418_15445[1] = 8);
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
}
}
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_15422 = (new Array(16));(statearr_15422[0] = state_machine__5753__auto__);
(statearr_15422[1] = 1);
return statearr_15422;
});
var state_machine__5753__auto____1 = (function (state_15387){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_15387);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e15423){if((e15423 instanceof Object))
{var ex__5756__auto__ = e15423;var statearr_15424_15446 = state_15387;(statearr_15424_15446[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15423;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15447 = state_15387;
state_15387 = G__15447;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_15387){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_15387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_15425 = f__5823__auto__.call(null);(statearr_15425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto__);
return statearr_15425;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return c__5822__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5822__auto___15528 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_15507){var state_val_15508 = (state_15507[1]);if((state_val_15508 === 1))
{var state_15507__$1 = state_15507;var statearr_15509_15529 = state_15507__$1;(statearr_15509_15529[2] = null);
(statearr_15509_15529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15508 === 2))
{var state_15507__$1 = state_15507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15507__$1,4,from);
} else
{if((state_val_15508 === 3))
{var inst_15505 = (state_15507[2]);var state_15507__$1 = state_15507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15507__$1,inst_15505);
} else
{if((state_val_15508 === 4))
{var inst_15490 = (state_15507[7]);var inst_15490__$1 = (state_15507[2]);var inst_15491 = (inst_15490__$1 == null);var state_15507__$1 = (function (){var statearr_15510 = state_15507;(statearr_15510[7] = inst_15490__$1);
return statearr_15510;
})();if(cljs.core.truth_(inst_15491))
{var statearr_15511_15530 = state_15507__$1;(statearr_15511_15530[1] = 5);
} else
{var statearr_15512_15531 = state_15507__$1;(statearr_15512_15531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15508 === 5))
{var state_15507__$1 = state_15507;if(cljs.core.truth_(close_QMARK_))
{var statearr_15513_15532 = state_15507__$1;(statearr_15513_15532[1] = 8);
} else
{var statearr_15514_15533 = state_15507__$1;(statearr_15514_15533[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15508 === 6))
{var inst_15490 = (state_15507[7]);var state_15507__$1 = state_15507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15507__$1,11,to,inst_15490);
} else
{if((state_val_15508 === 7))
{var inst_15503 = (state_15507[2]);var state_15507__$1 = state_15507;var statearr_15515_15534 = state_15507__$1;(statearr_15515_15534[2] = inst_15503);
(statearr_15515_15534[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15508 === 8))
{var inst_15494 = cljs.core.async.close_BANG_.call(null,to);var state_15507__$1 = state_15507;var statearr_15516_15535 = state_15507__$1;(statearr_15516_15535[2] = inst_15494);
(statearr_15516_15535[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15508 === 9))
{var state_15507__$1 = state_15507;var statearr_15517_15536 = state_15507__$1;(statearr_15517_15536[2] = null);
(statearr_15517_15536[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15508 === 10))
{var inst_15497 = (state_15507[2]);var state_15507__$1 = state_15507;var statearr_15518_15537 = state_15507__$1;(statearr_15518_15537[2] = inst_15497);
(statearr_15518_15537[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15508 === 11))
{var inst_15500 = (state_15507[2]);var state_15507__$1 = (function (){var statearr_15519 = state_15507;(statearr_15519[8] = inst_15500);
return statearr_15519;
})();var statearr_15520_15538 = state_15507__$1;(statearr_15520_15538[2] = null);
(statearr_15520_15538[1] = 2);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_15524 = (new Array(9));(statearr_15524[0] = state_machine__5753__auto__);
(statearr_15524[1] = 1);
return statearr_15524;
});
var state_machine__5753__auto____1 = (function (state_15507){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_15507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e15525){if((e15525 instanceof Object))
{var ex__5756__auto__ = e15525;var statearr_15526_15539 = state_15507;(statearr_15526_15539[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15525;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15540 = state_15507;
state_15507 = G__15540;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_15507){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_15507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_15527 = f__5823__auto__.call(null);(statearr_15527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___15528);
return statearr_15527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5822__auto___15627 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_15605){var state_val_15606 = (state_15605[1]);if((state_val_15606 === 1))
{var state_15605__$1 = state_15605;var statearr_15607_15628 = state_15605__$1;(statearr_15607_15628[2] = null);
(statearr_15607_15628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 2))
{var state_15605__$1 = state_15605;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15605__$1,4,ch);
} else
{if((state_val_15606 === 3))
{var inst_15603 = (state_15605[2]);var state_15605__$1 = state_15605;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15605__$1,inst_15603);
} else
{if((state_val_15606 === 4))
{var inst_15586 = (state_15605[7]);var inst_15586__$1 = (state_15605[2]);var inst_15587 = (inst_15586__$1 == null);var state_15605__$1 = (function (){var statearr_15608 = state_15605;(statearr_15608[7] = inst_15586__$1);
return statearr_15608;
})();if(cljs.core.truth_(inst_15587))
{var statearr_15609_15629 = state_15605__$1;(statearr_15609_15629[1] = 5);
} else
{var statearr_15610_15630 = state_15605__$1;(statearr_15610_15630[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 5))
{var inst_15589 = cljs.core.async.close_BANG_.call(null,tc);var inst_15590 = cljs.core.async.close_BANG_.call(null,fc);var state_15605__$1 = (function (){var statearr_15611 = state_15605;(statearr_15611[8] = inst_15589);
return statearr_15611;
})();var statearr_15612_15631 = state_15605__$1;(statearr_15612_15631[2] = inst_15590);
(statearr_15612_15631[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 6))
{var inst_15586 = (state_15605[7]);var inst_15592 = p.call(null,inst_15586);var state_15605__$1 = state_15605;if(cljs.core.truth_(inst_15592))
{var statearr_15613_15632 = state_15605__$1;(statearr_15613_15632[1] = 9);
} else
{var statearr_15614_15633 = state_15605__$1;(statearr_15614_15633[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 7))
{var inst_15601 = (state_15605[2]);var state_15605__$1 = state_15605;var statearr_15615_15634 = state_15605__$1;(statearr_15615_15634[2] = inst_15601);
(statearr_15615_15634[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 8))
{var inst_15598 = (state_15605[2]);var state_15605__$1 = (function (){var statearr_15616 = state_15605;(statearr_15616[9] = inst_15598);
return statearr_15616;
})();var statearr_15617_15635 = state_15605__$1;(statearr_15617_15635[2] = null);
(statearr_15617_15635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 9))
{var state_15605__$1 = state_15605;var statearr_15618_15636 = state_15605__$1;(statearr_15618_15636[2] = tc);
(statearr_15618_15636[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 10))
{var state_15605__$1 = state_15605;var statearr_15619_15637 = state_15605__$1;(statearr_15619_15637[2] = fc);
(statearr_15619_15637[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15606 === 11))
{var inst_15586 = (state_15605[7]);var inst_15596 = (state_15605[2]);var state_15605__$1 = state_15605;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15605__$1,8,inst_15596,inst_15586);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_15623 = (new Array(10));(statearr_15623[0] = state_machine__5753__auto__);
(statearr_15623[1] = 1);
return statearr_15623;
});
var state_machine__5753__auto____1 = (function (state_15605){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_15605);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e15624){if((e15624 instanceof Object))
{var ex__5756__auto__ = e15624;var statearr_15625_15638 = state_15605;(statearr_15625_15638[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15605);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15639 = state_15605;
state_15605 = G__15639;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_15605){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_15605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_15626 = f__5823__auto__.call(null);(statearr_15626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___15627);
return statearr_15626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5822__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_15686){var state_val_15687 = (state_15686[1]);if((state_val_15687 === 7))
{var inst_15682 = (state_15686[2]);var state_15686__$1 = state_15686;var statearr_15688_15704 = state_15686__$1;(statearr_15688_15704[2] = inst_15682);
(statearr_15688_15704[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 6))
{var inst_15675 = (state_15686[7]);var inst_15672 = (state_15686[8]);var inst_15679 = f.call(null,inst_15672,inst_15675);var inst_15672__$1 = inst_15679;var state_15686__$1 = (function (){var statearr_15689 = state_15686;(statearr_15689[8] = inst_15672__$1);
return statearr_15689;
})();var statearr_15690_15705 = state_15686__$1;(statearr_15690_15705[2] = null);
(statearr_15690_15705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 5))
{var inst_15672 = (state_15686[8]);var state_15686__$1 = state_15686;var statearr_15691_15706 = state_15686__$1;(statearr_15691_15706[2] = inst_15672);
(statearr_15691_15706[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 4))
{var inst_15675 = (state_15686[7]);var inst_15675__$1 = (state_15686[2]);var inst_15676 = (inst_15675__$1 == null);var state_15686__$1 = (function (){var statearr_15692 = state_15686;(statearr_15692[7] = inst_15675__$1);
return statearr_15692;
})();if(cljs.core.truth_(inst_15676))
{var statearr_15693_15707 = state_15686__$1;(statearr_15693_15707[1] = 5);
} else
{var statearr_15694_15708 = state_15686__$1;(statearr_15694_15708[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15687 === 3))
{var inst_15684 = (state_15686[2]);var state_15686__$1 = state_15686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15686__$1,inst_15684);
} else
{if((state_val_15687 === 2))
{var state_15686__$1 = state_15686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15686__$1,4,ch);
} else
{if((state_val_15687 === 1))
{var inst_15672 = init;var state_15686__$1 = (function (){var statearr_15695 = state_15686;(statearr_15695[8] = inst_15672);
return statearr_15695;
})();var statearr_15696_15709 = state_15686__$1;(statearr_15696_15709[2] = null);
(statearr_15696_15709[1] = 2);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_15700 = (new Array(9));(statearr_15700[0] = state_machine__5753__auto__);
(statearr_15700[1] = 1);
return statearr_15700;
});
var state_machine__5753__auto____1 = (function (state_15686){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_15686);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e15701){if((e15701 instanceof Object))
{var ex__5756__auto__ = e15701;var statearr_15702_15710 = state_15686;(statearr_15702_15710[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15686);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15701;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15711 = state_15686;
state_15686 = G__15711;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_15686){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_15686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_15703 = f__5823__auto__.call(null);(statearr_15703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto__);
return statearr_15703;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return c__5822__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5822__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_15773){var state_val_15774 = (state_15773[1]);if((state_val_15774 === 1))
{var inst_15753 = cljs.core.seq.call(null,coll);var inst_15754 = inst_15753;var state_15773__$1 = (function (){var statearr_15775 = state_15773;(statearr_15775[7] = inst_15754);
return statearr_15775;
})();var statearr_15776_15794 = state_15773__$1;(statearr_15776_15794[2] = null);
(statearr_15776_15794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 2))
{var inst_15754 = (state_15773[7]);var state_15773__$1 = state_15773;if(cljs.core.truth_(inst_15754))
{var statearr_15777_15795 = state_15773__$1;(statearr_15777_15795[1] = 4);
} else
{var statearr_15778_15796 = state_15773__$1;(statearr_15778_15796[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 3))
{var inst_15771 = (state_15773[2]);var state_15773__$1 = state_15773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15773__$1,inst_15771);
} else
{if((state_val_15774 === 4))
{var inst_15754 = (state_15773[7]);var inst_15757 = cljs.core.first.call(null,inst_15754);var state_15773__$1 = state_15773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15773__$1,7,ch,inst_15757);
} else
{if((state_val_15774 === 5))
{var state_15773__$1 = state_15773;if(cljs.core.truth_(close_QMARK_))
{var statearr_15779_15797 = state_15773__$1;(statearr_15779_15797[1] = 8);
} else
{var statearr_15780_15798 = state_15773__$1;(statearr_15780_15798[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 6))
{var inst_15769 = (state_15773[2]);var state_15773__$1 = state_15773;var statearr_15781_15799 = state_15773__$1;(statearr_15781_15799[2] = inst_15769);
(statearr_15781_15799[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 7))
{var inst_15754 = (state_15773[7]);var inst_15759 = (state_15773[2]);var inst_15760 = cljs.core.next.call(null,inst_15754);var inst_15754__$1 = inst_15760;var state_15773__$1 = (function (){var statearr_15782 = state_15773;(statearr_15782[8] = inst_15759);
(statearr_15782[7] = inst_15754__$1);
return statearr_15782;
})();var statearr_15783_15800 = state_15773__$1;(statearr_15783_15800[2] = null);
(statearr_15783_15800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 8))
{var inst_15764 = cljs.core.async.close_BANG_.call(null,ch);var state_15773__$1 = state_15773;var statearr_15784_15801 = state_15773__$1;(statearr_15784_15801[2] = inst_15764);
(statearr_15784_15801[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 9))
{var state_15773__$1 = state_15773;var statearr_15785_15802 = state_15773__$1;(statearr_15785_15802[2] = null);
(statearr_15785_15802[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 10))
{var inst_15767 = (state_15773[2]);var state_15773__$1 = state_15773;var statearr_15786_15803 = state_15773__$1;(statearr_15786_15803[2] = inst_15767);
(statearr_15786_15803[1] = 6);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_15790 = (new Array(9));(statearr_15790[0] = state_machine__5753__auto__);
(statearr_15790[1] = 1);
return statearr_15790;
});
var state_machine__5753__auto____1 = (function (state_15773){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_15773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e15791){if((e15791 instanceof Object))
{var ex__5756__auto__ = e15791;var statearr_15792_15804 = state_15773;(statearr_15792_15804[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15805 = state_15773;
state_15773 = G__15805;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_15773){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_15773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_15793 = f__5823__auto__.call(null);(statearr_15793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto__);
return statearr_15793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return c__5822__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15807 = {};return obj15807;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15809 = {};return obj15809;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16024 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16024 = (function (cs,ch,mult,meta16025){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16025 = meta16025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16024.cljs$lang$type = true;
cljs.core.async.t16024.cljs$lang$ctorStr = "cljs.core.async/t16024";
cljs.core.async.t16024.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16024");
});})(cs))
;
cljs.core.async.t16024.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16024.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16024.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16024.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16024.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16026){var self__ = this;
var _16026__$1 = this;return self__.meta16025;
});})(cs))
;
cljs.core.async.t16024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16026,meta16025__$1){var self__ = this;
var _16026__$1 = this;return (new cljs.core.async.t16024(self__.cs,self__.ch,self__.mult,meta16025__$1));
});})(cs))
;
cljs.core.async.__GT_t16024 = ((function (cs){
return (function __GT_t16024(cs__$1,ch__$1,mult__$1,meta16025){return (new cljs.core.async.t16024(cs__$1,ch__$1,mult__$1,meta16025));
});})(cs))
;
}
return (new cljs.core.async.t16024(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5822__auto___16238 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_16156){var state_val_16157 = (state_16156[1]);if((state_val_16157 === 32))
{var inst_16029 = (state_16156[7]);var inst_16105 = (state_16156[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16156,31,Object,null,30);var inst_16112 = cljs.core.async.put_BANG_.call(null,inst_16105,inst_16029,done);var state_16156__$1 = state_16156;var statearr_16158_16239 = state_16156__$1;(statearr_16158_16239[2] = inst_16112);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 1))
{var state_16156__$1 = state_16156;var statearr_16159_16240 = state_16156__$1;(statearr_16159_16240[2] = null);
(statearr_16159_16240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 33))
{var inst_16118 = (state_16156[9]);var inst_16120 = cljs.core.chunked_seq_QMARK_.call(null,inst_16118);var state_16156__$1 = state_16156;if(inst_16120)
{var statearr_16160_16241 = state_16156__$1;(statearr_16160_16241[1] = 36);
} else
{var statearr_16161_16242 = state_16156__$1;(statearr_16161_16242[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 2))
{var state_16156__$1 = state_16156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16156__$1,4,ch);
} else
{if((state_val_16157 === 34))
{var state_16156__$1 = state_16156;var statearr_16162_16243 = state_16156__$1;(statearr_16162_16243[2] = null);
(statearr_16162_16243[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 3))
{var inst_16154 = (state_16156[2]);var state_16156__$1 = state_16156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16156__$1,inst_16154);
} else
{if((state_val_16157 === 35))
{var inst_16143 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16163_16244 = state_16156__$1;(statearr_16163_16244[2] = inst_16143);
(statearr_16163_16244[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 4))
{var inst_16029 = (state_16156[7]);var inst_16029__$1 = (state_16156[2]);var inst_16030 = (inst_16029__$1 == null);var state_16156__$1 = (function (){var statearr_16164 = state_16156;(statearr_16164[7] = inst_16029__$1);
return statearr_16164;
})();if(cljs.core.truth_(inst_16030))
{var statearr_16165_16245 = state_16156__$1;(statearr_16165_16245[1] = 5);
} else
{var statearr_16166_16246 = state_16156__$1;(statearr_16166_16246[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 36))
{var inst_16118 = (state_16156[9]);var inst_16122 = cljs.core.chunk_first.call(null,inst_16118);var inst_16123 = cljs.core.chunk_rest.call(null,inst_16118);var inst_16124 = cljs.core.count.call(null,inst_16122);var inst_16097 = inst_16123;var inst_16098 = inst_16122;var inst_16099 = inst_16124;var inst_16100 = 0;var state_16156__$1 = (function (){var statearr_16167 = state_16156;(statearr_16167[10] = inst_16100);
(statearr_16167[11] = inst_16098);
(statearr_16167[12] = inst_16097);
(statearr_16167[13] = inst_16099);
return statearr_16167;
})();var statearr_16168_16247 = state_16156__$1;(statearr_16168_16247[2] = null);
(statearr_16168_16247[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 5))
{var inst_16036 = cljs.core.deref.call(null,cs);var inst_16037 = cljs.core.seq.call(null,inst_16036);var inst_16038 = inst_16037;var inst_16039 = null;var inst_16040 = 0;var inst_16041 = 0;var state_16156__$1 = (function (){var statearr_16169 = state_16156;(statearr_16169[14] = inst_16039);
(statearr_16169[15] = inst_16038);
(statearr_16169[16] = inst_16040);
(statearr_16169[17] = inst_16041);
return statearr_16169;
})();var statearr_16170_16248 = state_16156__$1;(statearr_16170_16248[2] = null);
(statearr_16170_16248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 37))
{var inst_16118 = (state_16156[9]);var inst_16127 = cljs.core.first.call(null,inst_16118);var state_16156__$1 = (function (){var statearr_16171 = state_16156;(statearr_16171[18] = inst_16127);
return statearr_16171;
})();var statearr_16172_16249 = state_16156__$1;(statearr_16172_16249[2] = null);
(statearr_16172_16249[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 6))
{var inst_16088 = cljs.core.deref.call(null,cs);var inst_16089 = cljs.core.keys.call(null,inst_16088);var inst_16090 = cljs.core.count.call(null,inst_16089);var inst_16091 = cljs.core.reset_BANG_.call(null,dctr,inst_16090);var inst_16096 = cljs.core.seq.call(null,inst_16089);var inst_16097 = inst_16096;var inst_16098 = null;var inst_16099 = 0;var inst_16100 = 0;var state_16156__$1 = (function (){var statearr_16173 = state_16156;(statearr_16173[19] = inst_16091);
(statearr_16173[10] = inst_16100);
(statearr_16173[11] = inst_16098);
(statearr_16173[12] = inst_16097);
(statearr_16173[13] = inst_16099);
return statearr_16173;
})();var statearr_16174_16250 = state_16156__$1;(statearr_16174_16250[2] = null);
(statearr_16174_16250[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 38))
{var inst_16140 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16175_16251 = state_16156__$1;(statearr_16175_16251[2] = inst_16140);
(statearr_16175_16251[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 7))
{var inst_16152 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16176_16252 = state_16156__$1;(statearr_16176_16252[2] = inst_16152);
(statearr_16176_16252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 39))
{var inst_16118 = (state_16156[9]);var inst_16136 = (state_16156[2]);var inst_16137 = cljs.core.next.call(null,inst_16118);var inst_16097 = inst_16137;var inst_16098 = null;var inst_16099 = 0;var inst_16100 = 0;var state_16156__$1 = (function (){var statearr_16177 = state_16156;(statearr_16177[10] = inst_16100);
(statearr_16177[20] = inst_16136);
(statearr_16177[11] = inst_16098);
(statearr_16177[12] = inst_16097);
(statearr_16177[13] = inst_16099);
return statearr_16177;
})();var statearr_16178_16253 = state_16156__$1;(statearr_16178_16253[2] = null);
(statearr_16178_16253[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 8))
{var inst_16040 = (state_16156[16]);var inst_16041 = (state_16156[17]);var inst_16043 = (inst_16041 < inst_16040);var inst_16044 = inst_16043;var state_16156__$1 = state_16156;if(cljs.core.truth_(inst_16044))
{var statearr_16179_16254 = state_16156__$1;(statearr_16179_16254[1] = 10);
} else
{var statearr_16180_16255 = state_16156__$1;(statearr_16180_16255[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 40))
{var inst_16127 = (state_16156[18]);var inst_16128 = (state_16156[2]);var inst_16129 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16130 = cljs.core.async.untap_STAR_.call(null,m,inst_16127);var state_16156__$1 = (function (){var statearr_16181 = state_16156;(statearr_16181[21] = inst_16129);
(statearr_16181[22] = inst_16128);
return statearr_16181;
})();var statearr_16182_16256 = state_16156__$1;(statearr_16182_16256[2] = inst_16130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 9))
{var inst_16086 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16183_16257 = state_16156__$1;(statearr_16183_16257[2] = inst_16086);
(statearr_16183_16257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 41))
{var inst_16029 = (state_16156[7]);var inst_16127 = (state_16156[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16156,40,Object,null,39);var inst_16134 = cljs.core.async.put_BANG_.call(null,inst_16127,inst_16029,done);var state_16156__$1 = state_16156;var statearr_16184_16258 = state_16156__$1;(statearr_16184_16258[2] = inst_16134);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16156__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 10))
{var inst_16039 = (state_16156[14]);var inst_16041 = (state_16156[17]);var inst_16047 = cljs.core._nth.call(null,inst_16039,inst_16041);var inst_16048 = cljs.core.nth.call(null,inst_16047,0,null);var inst_16049 = cljs.core.nth.call(null,inst_16047,1,null);var state_16156__$1 = (function (){var statearr_16185 = state_16156;(statearr_16185[23] = inst_16048);
return statearr_16185;
})();if(cljs.core.truth_(inst_16049))
{var statearr_16186_16259 = state_16156__$1;(statearr_16186_16259[1] = 13);
} else
{var statearr_16187_16260 = state_16156__$1;(statearr_16187_16260[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 42))
{var inst_16149 = (state_16156[2]);var state_16156__$1 = (function (){var statearr_16188 = state_16156;(statearr_16188[24] = inst_16149);
return statearr_16188;
})();var statearr_16189_16261 = state_16156__$1;(statearr_16189_16261[2] = null);
(statearr_16189_16261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 11))
{var inst_16038 = (state_16156[15]);var inst_16058 = (state_16156[25]);var inst_16058__$1 = cljs.core.seq.call(null,inst_16038);var state_16156__$1 = (function (){var statearr_16190 = state_16156;(statearr_16190[25] = inst_16058__$1);
return statearr_16190;
})();if(inst_16058__$1)
{var statearr_16191_16262 = state_16156__$1;(statearr_16191_16262[1] = 16);
} else
{var statearr_16192_16263 = state_16156__$1;(statearr_16192_16263[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 12))
{var inst_16084 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16193_16264 = state_16156__$1;(statearr_16193_16264[2] = inst_16084);
(statearr_16193_16264[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 13))
{var inst_16048 = (state_16156[23]);var inst_16051 = cljs.core.async.close_BANG_.call(null,inst_16048);var state_16156__$1 = state_16156;var statearr_16197_16265 = state_16156__$1;(statearr_16197_16265[2] = inst_16051);
(statearr_16197_16265[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 14))
{var state_16156__$1 = state_16156;var statearr_16198_16266 = state_16156__$1;(statearr_16198_16266[2] = null);
(statearr_16198_16266[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 15))
{var inst_16039 = (state_16156[14]);var inst_16038 = (state_16156[15]);var inst_16040 = (state_16156[16]);var inst_16041 = (state_16156[17]);var inst_16054 = (state_16156[2]);var inst_16055 = (inst_16041 + 1);var tmp16194 = inst_16039;var tmp16195 = inst_16038;var tmp16196 = inst_16040;var inst_16038__$1 = tmp16195;var inst_16039__$1 = tmp16194;var inst_16040__$1 = tmp16196;var inst_16041__$1 = inst_16055;var state_16156__$1 = (function (){var statearr_16199 = state_16156;(statearr_16199[14] = inst_16039__$1);
(statearr_16199[15] = inst_16038__$1);
(statearr_16199[16] = inst_16040__$1);
(statearr_16199[17] = inst_16041__$1);
(statearr_16199[26] = inst_16054);
return statearr_16199;
})();var statearr_16200_16267 = state_16156__$1;(statearr_16200_16267[2] = null);
(statearr_16200_16267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 16))
{var inst_16058 = (state_16156[25]);var inst_16060 = cljs.core.chunked_seq_QMARK_.call(null,inst_16058);var state_16156__$1 = state_16156;if(inst_16060)
{var statearr_16201_16268 = state_16156__$1;(statearr_16201_16268[1] = 19);
} else
{var statearr_16202_16269 = state_16156__$1;(statearr_16202_16269[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 17))
{var state_16156__$1 = state_16156;var statearr_16203_16270 = state_16156__$1;(statearr_16203_16270[2] = null);
(statearr_16203_16270[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 18))
{var inst_16082 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16204_16271 = state_16156__$1;(statearr_16204_16271[2] = inst_16082);
(statearr_16204_16271[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 19))
{var inst_16058 = (state_16156[25]);var inst_16062 = cljs.core.chunk_first.call(null,inst_16058);var inst_16063 = cljs.core.chunk_rest.call(null,inst_16058);var inst_16064 = cljs.core.count.call(null,inst_16062);var inst_16038 = inst_16063;var inst_16039 = inst_16062;var inst_16040 = inst_16064;var inst_16041 = 0;var state_16156__$1 = (function (){var statearr_16205 = state_16156;(statearr_16205[14] = inst_16039);
(statearr_16205[15] = inst_16038);
(statearr_16205[16] = inst_16040);
(statearr_16205[17] = inst_16041);
return statearr_16205;
})();var statearr_16206_16272 = state_16156__$1;(statearr_16206_16272[2] = null);
(statearr_16206_16272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 20))
{var inst_16058 = (state_16156[25]);var inst_16068 = cljs.core.first.call(null,inst_16058);var inst_16069 = cljs.core.nth.call(null,inst_16068,0,null);var inst_16070 = cljs.core.nth.call(null,inst_16068,1,null);var state_16156__$1 = (function (){var statearr_16207 = state_16156;(statearr_16207[27] = inst_16069);
return statearr_16207;
})();if(cljs.core.truth_(inst_16070))
{var statearr_16208_16273 = state_16156__$1;(statearr_16208_16273[1] = 22);
} else
{var statearr_16209_16274 = state_16156__$1;(statearr_16209_16274[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 21))
{var inst_16079 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16210_16275 = state_16156__$1;(statearr_16210_16275[2] = inst_16079);
(statearr_16210_16275[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 22))
{var inst_16069 = (state_16156[27]);var inst_16072 = cljs.core.async.close_BANG_.call(null,inst_16069);var state_16156__$1 = state_16156;var statearr_16211_16276 = state_16156__$1;(statearr_16211_16276[2] = inst_16072);
(statearr_16211_16276[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 23))
{var state_16156__$1 = state_16156;var statearr_16212_16277 = state_16156__$1;(statearr_16212_16277[2] = null);
(statearr_16212_16277[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 24))
{var inst_16058 = (state_16156[25]);var inst_16075 = (state_16156[2]);var inst_16076 = cljs.core.next.call(null,inst_16058);var inst_16038 = inst_16076;var inst_16039 = null;var inst_16040 = 0;var inst_16041 = 0;var state_16156__$1 = (function (){var statearr_16213 = state_16156;(statearr_16213[14] = inst_16039);
(statearr_16213[15] = inst_16038);
(statearr_16213[16] = inst_16040);
(statearr_16213[17] = inst_16041);
(statearr_16213[28] = inst_16075);
return statearr_16213;
})();var statearr_16214_16278 = state_16156__$1;(statearr_16214_16278[2] = null);
(statearr_16214_16278[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 25))
{var inst_16100 = (state_16156[10]);var inst_16099 = (state_16156[13]);var inst_16102 = (inst_16100 < inst_16099);var inst_16103 = inst_16102;var state_16156__$1 = state_16156;if(cljs.core.truth_(inst_16103))
{var statearr_16215_16279 = state_16156__$1;(statearr_16215_16279[1] = 27);
} else
{var statearr_16216_16280 = state_16156__$1;(statearr_16216_16280[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 26))
{var inst_16147 = (state_16156[2]);var state_16156__$1 = (function (){var statearr_16217 = state_16156;(statearr_16217[29] = inst_16147);
return statearr_16217;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16156__$1,42,dchan);
} else
{if((state_val_16157 === 27))
{var inst_16100 = (state_16156[10]);var inst_16098 = (state_16156[11]);var inst_16105 = cljs.core._nth.call(null,inst_16098,inst_16100);var state_16156__$1 = (function (){var statearr_16218 = state_16156;(statearr_16218[8] = inst_16105);
return statearr_16218;
})();var statearr_16219_16281 = state_16156__$1;(statearr_16219_16281[2] = null);
(statearr_16219_16281[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 28))
{var inst_16118 = (state_16156[9]);var inst_16097 = (state_16156[12]);var inst_16118__$1 = cljs.core.seq.call(null,inst_16097);var state_16156__$1 = (function (){var statearr_16223 = state_16156;(statearr_16223[9] = inst_16118__$1);
return statearr_16223;
})();if(inst_16118__$1)
{var statearr_16224_16282 = state_16156__$1;(statearr_16224_16282[1] = 33);
} else
{var statearr_16225_16283 = state_16156__$1;(statearr_16225_16283[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 29))
{var inst_16145 = (state_16156[2]);var state_16156__$1 = state_16156;var statearr_16226_16284 = state_16156__$1;(statearr_16226_16284[2] = inst_16145);
(statearr_16226_16284[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 30))
{var inst_16100 = (state_16156[10]);var inst_16098 = (state_16156[11]);var inst_16097 = (state_16156[12]);var inst_16099 = (state_16156[13]);var inst_16114 = (state_16156[2]);var inst_16115 = (inst_16100 + 1);var tmp16220 = inst_16098;var tmp16221 = inst_16097;var tmp16222 = inst_16099;var inst_16097__$1 = tmp16221;var inst_16098__$1 = tmp16220;var inst_16099__$1 = tmp16222;var inst_16100__$1 = inst_16115;var state_16156__$1 = (function (){var statearr_16227 = state_16156;(statearr_16227[10] = inst_16100__$1);
(statearr_16227[30] = inst_16114);
(statearr_16227[11] = inst_16098__$1);
(statearr_16227[12] = inst_16097__$1);
(statearr_16227[13] = inst_16099__$1);
return statearr_16227;
})();var statearr_16228_16285 = state_16156__$1;(statearr_16228_16285[2] = null);
(statearr_16228_16285[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16157 === 31))
{var inst_16105 = (state_16156[8]);var inst_16106 = (state_16156[2]);var inst_16107 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16108 = cljs.core.async.untap_STAR_.call(null,m,inst_16105);var state_16156__$1 = (function (){var statearr_16229 = state_16156;(statearr_16229[31] = inst_16107);
(statearr_16229[32] = inst_16106);
return statearr_16229;
})();var statearr_16230_16286 = state_16156__$1;(statearr_16230_16286[2] = inst_16108);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16156__$1);
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
}
}
}
}
}
}
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_16234 = (new Array(33));(statearr_16234[0] = state_machine__5753__auto__);
(statearr_16234[1] = 1);
return statearr_16234;
});
var state_machine__5753__auto____1 = (function (state_16156){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_16156);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e16235){if((e16235 instanceof Object))
{var ex__5756__auto__ = e16235;var statearr_16236_16287 = state_16156;(statearr_16236_16287[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16156);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16288 = state_16156;
state_16156 = G__16288;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_16156){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_16156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_16237 = f__5823__auto__.call(null);(statearr_16237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___16238);
return statearr_16237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16290 = {};return obj16290;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16400 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16401){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta16401 = meta16401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16400.cljs$lang$type = true;
cljs.core.async.t16400.cljs$lang$ctorStr = "cljs.core.async/t16400";
cljs.core.async.t16400.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16400");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16400.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16402){var self__ = this;
var _16402__$1 = this;return self__.meta16401;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16402,meta16401__$1){var self__ = this;
var _16402__$1 = this;return (new cljs.core.async.t16400(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16401__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16400 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16400(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16401){return (new cljs.core.async.t16400(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16401));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16400(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5822__auto___16509 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_16467){var state_val_16468 = (state_16467[1]);if((state_val_16468 === 1))
{var inst_16406 = (state_16467[7]);var inst_16406__$1 = calc_state.call(null);var inst_16407 = cljs.core.seq_QMARK_.call(null,inst_16406__$1);var state_16467__$1 = (function (){var statearr_16469 = state_16467;(statearr_16469[7] = inst_16406__$1);
return statearr_16469;
})();if(inst_16407)
{var statearr_16470_16510 = state_16467__$1;(statearr_16470_16510[1] = 2);
} else
{var statearr_16471_16511 = state_16467__$1;(statearr_16471_16511[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 2))
{var inst_16406 = (state_16467[7]);var inst_16409 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16406);var state_16467__$1 = state_16467;var statearr_16472_16512 = state_16467__$1;(statearr_16472_16512[2] = inst_16409);
(statearr_16472_16512[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 3))
{var inst_16406 = (state_16467[7]);var state_16467__$1 = state_16467;var statearr_16473_16513 = state_16467__$1;(statearr_16473_16513[2] = inst_16406);
(statearr_16473_16513[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 4))
{var inst_16406 = (state_16467[7]);var inst_16412 = (state_16467[2]);var inst_16413 = cljs.core.get.call(null,inst_16412,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16414 = cljs.core.get.call(null,inst_16412,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16415 = cljs.core.get.call(null,inst_16412,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16416 = inst_16406;var state_16467__$1 = (function (){var statearr_16474 = state_16467;(statearr_16474[8] = inst_16416);
(statearr_16474[9] = inst_16415);
(statearr_16474[10] = inst_16414);
(statearr_16474[11] = inst_16413);
return statearr_16474;
})();var statearr_16475_16514 = state_16467__$1;(statearr_16475_16514[2] = null);
(statearr_16475_16514[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 5))
{var inst_16416 = (state_16467[8]);var inst_16419 = cljs.core.seq_QMARK_.call(null,inst_16416);var state_16467__$1 = state_16467;if(inst_16419)
{var statearr_16476_16515 = state_16467__$1;(statearr_16476_16515[1] = 7);
} else
{var statearr_16477_16516 = state_16467__$1;(statearr_16477_16516[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 6))
{var inst_16465 = (state_16467[2]);var state_16467__$1 = state_16467;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16467__$1,inst_16465);
} else
{if((state_val_16468 === 7))
{var inst_16416 = (state_16467[8]);var inst_16421 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16416);var state_16467__$1 = state_16467;var statearr_16478_16517 = state_16467__$1;(statearr_16478_16517[2] = inst_16421);
(statearr_16478_16517[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 8))
{var inst_16416 = (state_16467[8]);var state_16467__$1 = state_16467;var statearr_16479_16518 = state_16467__$1;(statearr_16479_16518[2] = inst_16416);
(statearr_16479_16518[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 9))
{var inst_16424 = (state_16467[12]);var inst_16424__$1 = (state_16467[2]);var inst_16425 = cljs.core.get.call(null,inst_16424__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16426 = cljs.core.get.call(null,inst_16424__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16427 = cljs.core.get.call(null,inst_16424__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16467__$1 = (function (){var statearr_16480 = state_16467;(statearr_16480[13] = inst_16427);
(statearr_16480[14] = inst_16426);
(statearr_16480[12] = inst_16424__$1);
return statearr_16480;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16467__$1,10,inst_16425);
} else
{if((state_val_16468 === 10))
{var inst_16431 = (state_16467[15]);var inst_16432 = (state_16467[16]);var inst_16430 = (state_16467[2]);var inst_16431__$1 = cljs.core.nth.call(null,inst_16430,0,null);var inst_16432__$1 = cljs.core.nth.call(null,inst_16430,1,null);var inst_16433 = (inst_16431__$1 == null);var inst_16434 = cljs.core._EQ_.call(null,inst_16432__$1,change);var inst_16435 = (inst_16433) || (inst_16434);var state_16467__$1 = (function (){var statearr_16481 = state_16467;(statearr_16481[15] = inst_16431__$1);
(statearr_16481[16] = inst_16432__$1);
return statearr_16481;
})();if(cljs.core.truth_(inst_16435))
{var statearr_16482_16519 = state_16467__$1;(statearr_16482_16519[1] = 11);
} else
{var statearr_16483_16520 = state_16467__$1;(statearr_16483_16520[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 11))
{var inst_16431 = (state_16467[15]);var inst_16437 = (inst_16431 == null);var state_16467__$1 = state_16467;if(cljs.core.truth_(inst_16437))
{var statearr_16484_16521 = state_16467__$1;(statearr_16484_16521[1] = 14);
} else
{var statearr_16485_16522 = state_16467__$1;(statearr_16485_16522[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 12))
{var inst_16432 = (state_16467[16]);var inst_16427 = (state_16467[13]);var inst_16446 = (state_16467[17]);var inst_16446__$1 = inst_16427.call(null,inst_16432);var state_16467__$1 = (function (){var statearr_16486 = state_16467;(statearr_16486[17] = inst_16446__$1);
return statearr_16486;
})();if(cljs.core.truth_(inst_16446__$1))
{var statearr_16487_16523 = state_16467__$1;(statearr_16487_16523[1] = 17);
} else
{var statearr_16488_16524 = state_16467__$1;(statearr_16488_16524[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 13))
{var inst_16463 = (state_16467[2]);var state_16467__$1 = state_16467;var statearr_16489_16525 = state_16467__$1;(statearr_16489_16525[2] = inst_16463);
(statearr_16489_16525[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 14))
{var inst_16432 = (state_16467[16]);var inst_16439 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16432);var state_16467__$1 = state_16467;var statearr_16490_16526 = state_16467__$1;(statearr_16490_16526[2] = inst_16439);
(statearr_16490_16526[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 15))
{var state_16467__$1 = state_16467;var statearr_16491_16527 = state_16467__$1;(statearr_16491_16527[2] = null);
(statearr_16491_16527[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 16))
{var inst_16442 = (state_16467[2]);var inst_16443 = calc_state.call(null);var inst_16416 = inst_16443;var state_16467__$1 = (function (){var statearr_16492 = state_16467;(statearr_16492[18] = inst_16442);
(statearr_16492[8] = inst_16416);
return statearr_16492;
})();var statearr_16493_16528 = state_16467__$1;(statearr_16493_16528[2] = null);
(statearr_16493_16528[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 17))
{var inst_16446 = (state_16467[17]);var state_16467__$1 = state_16467;var statearr_16494_16529 = state_16467__$1;(statearr_16494_16529[2] = inst_16446);
(statearr_16494_16529[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 18))
{var inst_16432 = (state_16467[16]);var inst_16427 = (state_16467[13]);var inst_16426 = (state_16467[14]);var inst_16449 = cljs.core.empty_QMARK_.call(null,inst_16427);var inst_16450 = inst_16426.call(null,inst_16432);var inst_16451 = cljs.core.not.call(null,inst_16450);var inst_16452 = (inst_16449) && (inst_16451);var state_16467__$1 = state_16467;var statearr_16495_16530 = state_16467__$1;(statearr_16495_16530[2] = inst_16452);
(statearr_16495_16530[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 19))
{var inst_16454 = (state_16467[2]);var state_16467__$1 = state_16467;if(cljs.core.truth_(inst_16454))
{var statearr_16496_16531 = state_16467__$1;(statearr_16496_16531[1] = 20);
} else
{var statearr_16497_16532 = state_16467__$1;(statearr_16497_16532[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 20))
{var inst_16431 = (state_16467[15]);var state_16467__$1 = state_16467;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16467__$1,23,out,inst_16431);
} else
{if((state_val_16468 === 21))
{var state_16467__$1 = state_16467;var statearr_16498_16533 = state_16467__$1;(statearr_16498_16533[2] = null);
(statearr_16498_16533[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 22))
{var inst_16424 = (state_16467[12]);var inst_16460 = (state_16467[2]);var inst_16416 = inst_16424;var state_16467__$1 = (function (){var statearr_16499 = state_16467;(statearr_16499[19] = inst_16460);
(statearr_16499[8] = inst_16416);
return statearr_16499;
})();var statearr_16500_16534 = state_16467__$1;(statearr_16500_16534[2] = null);
(statearr_16500_16534[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16468 === 23))
{var inst_16457 = (state_16467[2]);var state_16467__$1 = state_16467;var statearr_16501_16535 = state_16467__$1;(statearr_16501_16535[2] = inst_16457);
(statearr_16501_16535[1] = 22);
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
}
}
}
}
}
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_16505 = (new Array(20));(statearr_16505[0] = state_machine__5753__auto__);
(statearr_16505[1] = 1);
return statearr_16505;
});
var state_machine__5753__auto____1 = (function (state_16467){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_16467);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e16506){if((e16506 instanceof Object))
{var ex__5756__auto__ = e16506;var statearr_16507_16536 = state_16467;(statearr_16507_16536[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16467);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16537 = state_16467;
state_16467 = G__16537;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_16467){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_16467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_16508 = f__5823__auto__.call(null);(statearr_16508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___16509);
return statearr_16508;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16539 = {};return obj16539;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3291__auto__,mults){
return (function (p1__16540_SHARP_){if(cljs.core.truth_(p1__16540_SHARP_.call(null,topic)))
{return p1__16540_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16540_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16665 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16665 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16666){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16666 = meta16666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16665.cljs$lang$type = true;
cljs.core.async.t16665.cljs$lang$ctorStr = "cljs.core.async/t16665";
cljs.core.async.t16665.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16665");
});})(mults,ensure_mult))
;
cljs.core.async.t16665.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16665.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16665.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16665.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16665.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16665.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16667){var self__ = this;
var _16667__$1 = this;return self__.meta16666;
});})(mults,ensure_mult))
;
cljs.core.async.t16665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16667,meta16666__$1){var self__ = this;
var _16667__$1 = this;return (new cljs.core.async.t16665(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16666__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16665 = ((function (mults,ensure_mult){
return (function __GT_t16665(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16666){return (new cljs.core.async.t16665(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16666));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16665(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5822__auto___16789 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_16741){var state_val_16742 = (state_16741[1]);if((state_val_16742 === 1))
{var state_16741__$1 = state_16741;var statearr_16743_16790 = state_16741__$1;(statearr_16743_16790[2] = null);
(statearr_16743_16790[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 2))
{var state_16741__$1 = state_16741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16741__$1,4,ch);
} else
{if((state_val_16742 === 3))
{var inst_16739 = (state_16741[2]);var state_16741__$1 = state_16741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16741__$1,inst_16739);
} else
{if((state_val_16742 === 4))
{var inst_16670 = (state_16741[7]);var inst_16670__$1 = (state_16741[2]);var inst_16671 = (inst_16670__$1 == null);var state_16741__$1 = (function (){var statearr_16744 = state_16741;(statearr_16744[7] = inst_16670__$1);
return statearr_16744;
})();if(cljs.core.truth_(inst_16671))
{var statearr_16745_16791 = state_16741__$1;(statearr_16745_16791[1] = 5);
} else
{var statearr_16746_16792 = state_16741__$1;(statearr_16746_16792[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 5))
{var inst_16677 = cljs.core.deref.call(null,mults);var inst_16678 = cljs.core.vals.call(null,inst_16677);var inst_16679 = cljs.core.seq.call(null,inst_16678);var inst_16680 = inst_16679;var inst_16681 = null;var inst_16682 = 0;var inst_16683 = 0;var state_16741__$1 = (function (){var statearr_16747 = state_16741;(statearr_16747[8] = inst_16681);
(statearr_16747[9] = inst_16680);
(statearr_16747[10] = inst_16683);
(statearr_16747[11] = inst_16682);
return statearr_16747;
})();var statearr_16748_16793 = state_16741__$1;(statearr_16748_16793[2] = null);
(statearr_16748_16793[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 6))
{var inst_16718 = (state_16741[12]);var inst_16670 = (state_16741[7]);var inst_16720 = (state_16741[13]);var inst_16718__$1 = topic_fn.call(null,inst_16670);var inst_16719 = cljs.core.deref.call(null,mults);var inst_16720__$1 = cljs.core.get.call(null,inst_16719,inst_16718__$1);var state_16741__$1 = (function (){var statearr_16749 = state_16741;(statearr_16749[12] = inst_16718__$1);
(statearr_16749[13] = inst_16720__$1);
return statearr_16749;
})();if(cljs.core.truth_(inst_16720__$1))
{var statearr_16750_16794 = state_16741__$1;(statearr_16750_16794[1] = 19);
} else
{var statearr_16751_16795 = state_16741__$1;(statearr_16751_16795[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 7))
{var inst_16737 = (state_16741[2]);var state_16741__$1 = state_16741;var statearr_16752_16796 = state_16741__$1;(statearr_16752_16796[2] = inst_16737);
(statearr_16752_16796[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 8))
{var inst_16683 = (state_16741[10]);var inst_16682 = (state_16741[11]);var inst_16685 = (inst_16683 < inst_16682);var inst_16686 = inst_16685;var state_16741__$1 = state_16741;if(cljs.core.truth_(inst_16686))
{var statearr_16756_16797 = state_16741__$1;(statearr_16756_16797[1] = 10);
} else
{var statearr_16757_16798 = state_16741__$1;(statearr_16757_16798[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 9))
{var inst_16716 = (state_16741[2]);var state_16741__$1 = state_16741;var statearr_16758_16799 = state_16741__$1;(statearr_16758_16799[2] = inst_16716);
(statearr_16758_16799[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 10))
{var inst_16681 = (state_16741[8]);var inst_16680 = (state_16741[9]);var inst_16683 = (state_16741[10]);var inst_16682 = (state_16741[11]);var inst_16688 = cljs.core._nth.call(null,inst_16681,inst_16683);var inst_16689 = cljs.core.async.muxch_STAR_.call(null,inst_16688);var inst_16690 = cljs.core.async.close_BANG_.call(null,inst_16689);var inst_16691 = (inst_16683 + 1);var tmp16753 = inst_16681;var tmp16754 = inst_16680;var tmp16755 = inst_16682;var inst_16680__$1 = tmp16754;var inst_16681__$1 = tmp16753;var inst_16682__$1 = tmp16755;var inst_16683__$1 = inst_16691;var state_16741__$1 = (function (){var statearr_16759 = state_16741;(statearr_16759[14] = inst_16690);
(statearr_16759[8] = inst_16681__$1);
(statearr_16759[9] = inst_16680__$1);
(statearr_16759[10] = inst_16683__$1);
(statearr_16759[11] = inst_16682__$1);
return statearr_16759;
})();var statearr_16760_16800 = state_16741__$1;(statearr_16760_16800[2] = null);
(statearr_16760_16800[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 11))
{var inst_16680 = (state_16741[9]);var inst_16694 = (state_16741[15]);var inst_16694__$1 = cljs.core.seq.call(null,inst_16680);var state_16741__$1 = (function (){var statearr_16761 = state_16741;(statearr_16761[15] = inst_16694__$1);
return statearr_16761;
})();if(inst_16694__$1)
{var statearr_16762_16801 = state_16741__$1;(statearr_16762_16801[1] = 13);
} else
{var statearr_16763_16802 = state_16741__$1;(statearr_16763_16802[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 12))
{var inst_16714 = (state_16741[2]);var state_16741__$1 = state_16741;var statearr_16764_16803 = state_16741__$1;(statearr_16764_16803[2] = inst_16714);
(statearr_16764_16803[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 13))
{var inst_16694 = (state_16741[15]);var inst_16696 = cljs.core.chunked_seq_QMARK_.call(null,inst_16694);var state_16741__$1 = state_16741;if(inst_16696)
{var statearr_16765_16804 = state_16741__$1;(statearr_16765_16804[1] = 16);
} else
{var statearr_16766_16805 = state_16741__$1;(statearr_16766_16805[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 14))
{var state_16741__$1 = state_16741;var statearr_16767_16806 = state_16741__$1;(statearr_16767_16806[2] = null);
(statearr_16767_16806[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 15))
{var inst_16712 = (state_16741[2]);var state_16741__$1 = state_16741;var statearr_16768_16807 = state_16741__$1;(statearr_16768_16807[2] = inst_16712);
(statearr_16768_16807[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 16))
{var inst_16694 = (state_16741[15]);var inst_16698 = cljs.core.chunk_first.call(null,inst_16694);var inst_16699 = cljs.core.chunk_rest.call(null,inst_16694);var inst_16700 = cljs.core.count.call(null,inst_16698);var inst_16680 = inst_16699;var inst_16681 = inst_16698;var inst_16682 = inst_16700;var inst_16683 = 0;var state_16741__$1 = (function (){var statearr_16769 = state_16741;(statearr_16769[8] = inst_16681);
(statearr_16769[9] = inst_16680);
(statearr_16769[10] = inst_16683);
(statearr_16769[11] = inst_16682);
return statearr_16769;
})();var statearr_16770_16808 = state_16741__$1;(statearr_16770_16808[2] = null);
(statearr_16770_16808[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 17))
{var inst_16694 = (state_16741[15]);var inst_16703 = cljs.core.first.call(null,inst_16694);var inst_16704 = cljs.core.async.muxch_STAR_.call(null,inst_16703);var inst_16705 = cljs.core.async.close_BANG_.call(null,inst_16704);var inst_16706 = cljs.core.next.call(null,inst_16694);var inst_16680 = inst_16706;var inst_16681 = null;var inst_16682 = 0;var inst_16683 = 0;var state_16741__$1 = (function (){var statearr_16771 = state_16741;(statearr_16771[16] = inst_16705);
(statearr_16771[8] = inst_16681);
(statearr_16771[9] = inst_16680);
(statearr_16771[10] = inst_16683);
(statearr_16771[11] = inst_16682);
return statearr_16771;
})();var statearr_16772_16809 = state_16741__$1;(statearr_16772_16809[2] = null);
(statearr_16772_16809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 18))
{var inst_16709 = (state_16741[2]);var state_16741__$1 = state_16741;var statearr_16773_16810 = state_16741__$1;(statearr_16773_16810[2] = inst_16709);
(statearr_16773_16810[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 19))
{var state_16741__$1 = state_16741;var statearr_16774_16811 = state_16741__$1;(statearr_16774_16811[2] = null);
(statearr_16774_16811[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 20))
{var state_16741__$1 = state_16741;var statearr_16775_16812 = state_16741__$1;(statearr_16775_16812[2] = null);
(statearr_16775_16812[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 21))
{var inst_16734 = (state_16741[2]);var state_16741__$1 = (function (){var statearr_16776 = state_16741;(statearr_16776[17] = inst_16734);
return statearr_16776;
})();var statearr_16777_16813 = state_16741__$1;(statearr_16777_16813[2] = null);
(statearr_16777_16813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 22))
{var inst_16731 = (state_16741[2]);var state_16741__$1 = state_16741;var statearr_16778_16814 = state_16741__$1;(statearr_16778_16814[2] = inst_16731);
(statearr_16778_16814[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 23))
{var inst_16718 = (state_16741[12]);var inst_16722 = (state_16741[2]);var inst_16723 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16718);var state_16741__$1 = (function (){var statearr_16779 = state_16741;(statearr_16779[18] = inst_16722);
return statearr_16779;
})();var statearr_16780_16815 = state_16741__$1;(statearr_16780_16815[2] = inst_16723);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16741__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16742 === 24))
{var inst_16670 = (state_16741[7]);var inst_16720 = (state_16741[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16741,23,Object,null,22);var inst_16727 = cljs.core.async.muxch_STAR_.call(null,inst_16720);var state_16741__$1 = state_16741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16741__$1,25,inst_16727,inst_16670);
} else
{if((state_val_16742 === 25))
{var inst_16729 = (state_16741[2]);var state_16741__$1 = state_16741;var statearr_16781_16816 = state_16741__$1;(statearr_16781_16816[2] = inst_16729);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16741__$1);
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
}
}
}
}
}
}
}
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_16785 = (new Array(19));(statearr_16785[0] = state_machine__5753__auto__);
(statearr_16785[1] = 1);
return statearr_16785;
});
var state_machine__5753__auto____1 = (function (state_16741){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_16741);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e16786){if((e16786 instanceof Object))
{var ex__5756__auto__ = e16786;var statearr_16787_16817 = state_16741;(statearr_16787_16817[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16786;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16818 = state_16741;
state_16741 = G__16818;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_16741){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_16741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_16788 = f__5823__auto__.call(null);(statearr_16788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___16789);
return statearr_16788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5822__auto___16955 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_16925){var state_val_16926 = (state_16925[1]);if((state_val_16926 === 1))
{var state_16925__$1 = state_16925;var statearr_16927_16956 = state_16925__$1;(statearr_16927_16956[2] = null);
(statearr_16927_16956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 2))
{var inst_16888 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16889 = 0;var state_16925__$1 = (function (){var statearr_16928 = state_16925;(statearr_16928[7] = inst_16889);
(statearr_16928[8] = inst_16888);
return statearr_16928;
})();var statearr_16929_16957 = state_16925__$1;(statearr_16929_16957[2] = null);
(statearr_16929_16957[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 3))
{var inst_16923 = (state_16925[2]);var state_16925__$1 = state_16925;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16925__$1,inst_16923);
} else
{if((state_val_16926 === 4))
{var inst_16889 = (state_16925[7]);var inst_16891 = (inst_16889 < cnt);var state_16925__$1 = state_16925;if(cljs.core.truth_(inst_16891))
{var statearr_16930_16958 = state_16925__$1;(statearr_16930_16958[1] = 6);
} else
{var statearr_16931_16959 = state_16925__$1;(statearr_16931_16959[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 5))
{var inst_16909 = (state_16925[2]);var state_16925__$1 = (function (){var statearr_16932 = state_16925;(statearr_16932[9] = inst_16909);
return statearr_16932;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16925__$1,12,dchan);
} else
{if((state_val_16926 === 6))
{var state_16925__$1 = state_16925;var statearr_16933_16960 = state_16925__$1;(statearr_16933_16960[2] = null);
(statearr_16933_16960[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 7))
{var state_16925__$1 = state_16925;var statearr_16934_16961 = state_16925__$1;(statearr_16934_16961[2] = null);
(statearr_16934_16961[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 8))
{var inst_16907 = (state_16925[2]);var state_16925__$1 = state_16925;var statearr_16935_16962 = state_16925__$1;(statearr_16935_16962[2] = inst_16907);
(statearr_16935_16962[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 9))
{var inst_16889 = (state_16925[7]);var inst_16902 = (state_16925[2]);var inst_16903 = (inst_16889 + 1);var inst_16889__$1 = inst_16903;var state_16925__$1 = (function (){var statearr_16936 = state_16925;(statearr_16936[10] = inst_16902);
(statearr_16936[7] = inst_16889__$1);
return statearr_16936;
})();var statearr_16937_16963 = state_16925__$1;(statearr_16937_16963[2] = null);
(statearr_16937_16963[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 10))
{var inst_16893 = (state_16925[2]);var inst_16894 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16925__$1 = (function (){var statearr_16938 = state_16925;(statearr_16938[11] = inst_16893);
return statearr_16938;
})();var statearr_16939_16964 = state_16925__$1;(statearr_16939_16964[2] = inst_16894);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 11))
{var inst_16889 = (state_16925[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16925,10,Object,null,9);var inst_16898 = chs__$1.call(null,inst_16889);var inst_16899 = done.call(null,inst_16889);var inst_16900 = cljs.core.async.take_BANG_.call(null,inst_16898,inst_16899);var state_16925__$1 = state_16925;var statearr_16940_16965 = state_16925__$1;(statearr_16940_16965[2] = inst_16900);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16925__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 12))
{var inst_16911 = (state_16925[12]);var inst_16911__$1 = (state_16925[2]);var inst_16912 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16911__$1);var state_16925__$1 = (function (){var statearr_16941 = state_16925;(statearr_16941[12] = inst_16911__$1);
return statearr_16941;
})();if(cljs.core.truth_(inst_16912))
{var statearr_16942_16966 = state_16925__$1;(statearr_16942_16966[1] = 13);
} else
{var statearr_16943_16967 = state_16925__$1;(statearr_16943_16967[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 13))
{var inst_16914 = cljs.core.async.close_BANG_.call(null,out);var state_16925__$1 = state_16925;var statearr_16944_16968 = state_16925__$1;(statearr_16944_16968[2] = inst_16914);
(statearr_16944_16968[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 14))
{var inst_16911 = (state_16925[12]);var inst_16916 = cljs.core.apply.call(null,f,inst_16911);var state_16925__$1 = state_16925;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16925__$1,16,out,inst_16916);
} else
{if((state_val_16926 === 15))
{var inst_16921 = (state_16925[2]);var state_16925__$1 = state_16925;var statearr_16945_16969 = state_16925__$1;(statearr_16945_16969[2] = inst_16921);
(statearr_16945_16969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16926 === 16))
{var inst_16918 = (state_16925[2]);var state_16925__$1 = (function (){var statearr_16946 = state_16925;(statearr_16946[13] = inst_16918);
return statearr_16946;
})();var statearr_16947_16970 = state_16925__$1;(statearr_16947_16970[2] = null);
(statearr_16947_16970[1] = 2);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_16951 = (new Array(14));(statearr_16951[0] = state_machine__5753__auto__);
(statearr_16951[1] = 1);
return statearr_16951;
});
var state_machine__5753__auto____1 = (function (state_16925){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_16925);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e16952){if((e16952 instanceof Object))
{var ex__5756__auto__ = e16952;var statearr_16953_16971 = state_16925;(statearr_16953_16971[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16925);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16952;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16972 = state_16925;
state_16925 = G__16972;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_16925){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_16925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_16954 = f__5823__auto__.call(null);(statearr_16954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___16955);
return statearr_16954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5822__auto___17080 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_17056){var state_val_17057 = (state_17056[1]);if((state_val_17057 === 1))
{var inst_17027 = cljs.core.vec.call(null,chs);var inst_17028 = inst_17027;var state_17056__$1 = (function (){var statearr_17058 = state_17056;(statearr_17058[7] = inst_17028);
return statearr_17058;
})();var statearr_17059_17081 = state_17056__$1;(statearr_17059_17081[2] = null);
(statearr_17059_17081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 2))
{var inst_17028 = (state_17056[7]);var inst_17030 = cljs.core.count.call(null,inst_17028);var inst_17031 = (inst_17030 > 0);var state_17056__$1 = state_17056;if(cljs.core.truth_(inst_17031))
{var statearr_17060_17082 = state_17056__$1;(statearr_17060_17082[1] = 4);
} else
{var statearr_17061_17083 = state_17056__$1;(statearr_17061_17083[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 3))
{var inst_17054 = (state_17056[2]);var state_17056__$1 = state_17056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17056__$1,inst_17054);
} else
{if((state_val_17057 === 4))
{var inst_17028 = (state_17056[7]);var state_17056__$1 = state_17056;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17056__$1,7,inst_17028);
} else
{if((state_val_17057 === 5))
{var inst_17050 = cljs.core.async.close_BANG_.call(null,out);var state_17056__$1 = state_17056;var statearr_17062_17084 = state_17056__$1;(statearr_17062_17084[2] = inst_17050);
(statearr_17062_17084[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 6))
{var inst_17052 = (state_17056[2]);var state_17056__$1 = state_17056;var statearr_17063_17085 = state_17056__$1;(statearr_17063_17085[2] = inst_17052);
(statearr_17063_17085[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 7))
{var inst_17036 = (state_17056[8]);var inst_17035 = (state_17056[9]);var inst_17035__$1 = (state_17056[2]);var inst_17036__$1 = cljs.core.nth.call(null,inst_17035__$1,0,null);var inst_17037 = cljs.core.nth.call(null,inst_17035__$1,1,null);var inst_17038 = (inst_17036__$1 == null);var state_17056__$1 = (function (){var statearr_17064 = state_17056;(statearr_17064[8] = inst_17036__$1);
(statearr_17064[10] = inst_17037);
(statearr_17064[9] = inst_17035__$1);
return statearr_17064;
})();if(cljs.core.truth_(inst_17038))
{var statearr_17065_17086 = state_17056__$1;(statearr_17065_17086[1] = 8);
} else
{var statearr_17066_17087 = state_17056__$1;(statearr_17066_17087[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 8))
{var inst_17036 = (state_17056[8]);var inst_17037 = (state_17056[10]);var inst_17035 = (state_17056[9]);var inst_17028 = (state_17056[7]);var inst_17040 = (function (){var c = inst_17037;var v = inst_17036;var vec__17033 = inst_17035;var cs = inst_17028;return ((function (c,v,vec__17033,cs,inst_17036,inst_17037,inst_17035,inst_17028,state_val_17057){
return (function (p1__16973_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16973_SHARP_);
});
;})(c,v,vec__17033,cs,inst_17036,inst_17037,inst_17035,inst_17028,state_val_17057))
})();var inst_17041 = cljs.core.filterv.call(null,inst_17040,inst_17028);var inst_17028__$1 = inst_17041;var state_17056__$1 = (function (){var statearr_17067 = state_17056;(statearr_17067[7] = inst_17028__$1);
return statearr_17067;
})();var statearr_17068_17088 = state_17056__$1;(statearr_17068_17088[2] = null);
(statearr_17068_17088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 9))
{var inst_17036 = (state_17056[8]);var state_17056__$1 = state_17056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17056__$1,11,out,inst_17036);
} else
{if((state_val_17057 === 10))
{var inst_17048 = (state_17056[2]);var state_17056__$1 = state_17056;var statearr_17070_17089 = state_17056__$1;(statearr_17070_17089[2] = inst_17048);
(statearr_17070_17089[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 11))
{var inst_17028 = (state_17056[7]);var inst_17045 = (state_17056[2]);var tmp17069 = inst_17028;var inst_17028__$1 = tmp17069;var state_17056__$1 = (function (){var statearr_17071 = state_17056;(statearr_17071[11] = inst_17045);
(statearr_17071[7] = inst_17028__$1);
return statearr_17071;
})();var statearr_17072_17090 = state_17056__$1;(statearr_17072_17090[2] = null);
(statearr_17072_17090[1] = 2);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_17076 = (new Array(12));(statearr_17076[0] = state_machine__5753__auto__);
(statearr_17076[1] = 1);
return statearr_17076;
});
var state_machine__5753__auto____1 = (function (state_17056){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_17056);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e17077){if((e17077 instanceof Object))
{var ex__5756__auto__ = e17077;var statearr_17078_17091 = state_17056;(statearr_17078_17091[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17092 = state_17056;
state_17056 = G__17092;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_17056){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_17056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_17079 = f__5823__auto__.call(null);(statearr_17079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___17080);
return statearr_17079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5822__auto___17185 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_17162){var state_val_17163 = (state_17162[1]);if((state_val_17163 === 1))
{var inst_17139 = 0;var state_17162__$1 = (function (){var statearr_17164 = state_17162;(statearr_17164[7] = inst_17139);
return statearr_17164;
})();var statearr_17165_17186 = state_17162__$1;(statearr_17165_17186[2] = null);
(statearr_17165_17186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 2))
{var inst_17139 = (state_17162[7]);var inst_17141 = (inst_17139 < n);var state_17162__$1 = state_17162;if(cljs.core.truth_(inst_17141))
{var statearr_17166_17187 = state_17162__$1;(statearr_17166_17187[1] = 4);
} else
{var statearr_17167_17188 = state_17162__$1;(statearr_17167_17188[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 3))
{var inst_17159 = (state_17162[2]);var inst_17160 = cljs.core.async.close_BANG_.call(null,out);var state_17162__$1 = (function (){var statearr_17168 = state_17162;(statearr_17168[8] = inst_17159);
return statearr_17168;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17162__$1,inst_17160);
} else
{if((state_val_17163 === 4))
{var state_17162__$1 = state_17162;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17162__$1,7,ch);
} else
{if((state_val_17163 === 5))
{var state_17162__$1 = state_17162;var statearr_17169_17189 = state_17162__$1;(statearr_17169_17189[2] = null);
(statearr_17169_17189[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 6))
{var inst_17157 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17170_17190 = state_17162__$1;(statearr_17170_17190[2] = inst_17157);
(statearr_17170_17190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 7))
{var inst_17144 = (state_17162[9]);var inst_17144__$1 = (state_17162[2]);var inst_17145 = (inst_17144__$1 == null);var inst_17146 = cljs.core.not.call(null,inst_17145);var state_17162__$1 = (function (){var statearr_17171 = state_17162;(statearr_17171[9] = inst_17144__$1);
return statearr_17171;
})();if(inst_17146)
{var statearr_17172_17191 = state_17162__$1;(statearr_17172_17191[1] = 8);
} else
{var statearr_17173_17192 = state_17162__$1;(statearr_17173_17192[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 8))
{var inst_17144 = (state_17162[9]);var state_17162__$1 = state_17162;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17162__$1,11,out,inst_17144);
} else
{if((state_val_17163 === 9))
{var state_17162__$1 = state_17162;var statearr_17174_17193 = state_17162__$1;(statearr_17174_17193[2] = null);
(statearr_17174_17193[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 10))
{var inst_17154 = (state_17162[2]);var state_17162__$1 = state_17162;var statearr_17175_17194 = state_17162__$1;(statearr_17175_17194[2] = inst_17154);
(statearr_17175_17194[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17163 === 11))
{var inst_17139 = (state_17162[7]);var inst_17149 = (state_17162[2]);var inst_17150 = (inst_17139 + 1);var inst_17139__$1 = inst_17150;var state_17162__$1 = (function (){var statearr_17176 = state_17162;(statearr_17176[10] = inst_17149);
(statearr_17176[7] = inst_17139__$1);
return statearr_17176;
})();var statearr_17177_17195 = state_17162__$1;(statearr_17177_17195[2] = null);
(statearr_17177_17195[1] = 2);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_17181 = (new Array(11));(statearr_17181[0] = state_machine__5753__auto__);
(statearr_17181[1] = 1);
return statearr_17181;
});
var state_machine__5753__auto____1 = (function (state_17162){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_17162);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e17182){if((e17182 instanceof Object))
{var ex__5756__auto__ = e17182;var statearr_17183_17196 = state_17162;(statearr_17183_17196[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17162);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17197 = state_17162;
state_17162 = G__17197;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_17162){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_17162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_17184 = f__5823__auto__.call(null);(statearr_17184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___17185);
return statearr_17184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5822__auto___17294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_17269){var state_val_17270 = (state_17269[1]);if((state_val_17270 === 1))
{var inst_17246 = null;var state_17269__$1 = (function (){var statearr_17271 = state_17269;(statearr_17271[7] = inst_17246);
return statearr_17271;
})();var statearr_17272_17295 = state_17269__$1;(statearr_17272_17295[2] = null);
(statearr_17272_17295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 2))
{var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17269__$1,4,ch);
} else
{if((state_val_17270 === 3))
{var inst_17266 = (state_17269[2]);var inst_17267 = cljs.core.async.close_BANG_.call(null,out);var state_17269__$1 = (function (){var statearr_17273 = state_17269;(statearr_17273[8] = inst_17266);
return statearr_17273;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17269__$1,inst_17267);
} else
{if((state_val_17270 === 4))
{var inst_17249 = (state_17269[9]);var inst_17249__$1 = (state_17269[2]);var inst_17250 = (inst_17249__$1 == null);var inst_17251 = cljs.core.not.call(null,inst_17250);var state_17269__$1 = (function (){var statearr_17274 = state_17269;(statearr_17274[9] = inst_17249__$1);
return statearr_17274;
})();if(inst_17251)
{var statearr_17275_17296 = state_17269__$1;(statearr_17275_17296[1] = 5);
} else
{var statearr_17276_17297 = state_17269__$1;(statearr_17276_17297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 5))
{var inst_17249 = (state_17269[9]);var inst_17246 = (state_17269[7]);var inst_17253 = cljs.core._EQ_.call(null,inst_17249,inst_17246);var state_17269__$1 = state_17269;if(inst_17253)
{var statearr_17277_17298 = state_17269__$1;(statearr_17277_17298[1] = 8);
} else
{var statearr_17278_17299 = state_17269__$1;(statearr_17278_17299[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 6))
{var state_17269__$1 = state_17269;var statearr_17280_17300 = state_17269__$1;(statearr_17280_17300[2] = null);
(statearr_17280_17300[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 7))
{var inst_17264 = (state_17269[2]);var state_17269__$1 = state_17269;var statearr_17281_17301 = state_17269__$1;(statearr_17281_17301[2] = inst_17264);
(statearr_17281_17301[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 8))
{var inst_17246 = (state_17269[7]);var tmp17279 = inst_17246;var inst_17246__$1 = tmp17279;var state_17269__$1 = (function (){var statearr_17282 = state_17269;(statearr_17282[7] = inst_17246__$1);
return statearr_17282;
})();var statearr_17283_17302 = state_17269__$1;(statearr_17283_17302[2] = null);
(statearr_17283_17302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 9))
{var inst_17249 = (state_17269[9]);var state_17269__$1 = state_17269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17269__$1,11,out,inst_17249);
} else
{if((state_val_17270 === 10))
{var inst_17261 = (state_17269[2]);var state_17269__$1 = state_17269;var statearr_17284_17303 = state_17269__$1;(statearr_17284_17303[2] = inst_17261);
(statearr_17284_17303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17270 === 11))
{var inst_17249 = (state_17269[9]);var inst_17258 = (state_17269[2]);var inst_17246 = inst_17249;var state_17269__$1 = (function (){var statearr_17285 = state_17269;(statearr_17285[7] = inst_17246);
(statearr_17285[10] = inst_17258);
return statearr_17285;
})();var statearr_17286_17304 = state_17269__$1;(statearr_17286_17304[2] = null);
(statearr_17286_17304[1] = 2);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_17290 = (new Array(11));(statearr_17290[0] = state_machine__5753__auto__);
(statearr_17290[1] = 1);
return statearr_17290;
});
var state_machine__5753__auto____1 = (function (state_17269){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_17269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e17291){if((e17291 instanceof Object))
{var ex__5756__auto__ = e17291;var statearr_17292_17305 = state_17269;(statearr_17292_17305[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17306 = state_17269;
state_17269 = G__17306;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_17269){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_17269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_17293 = f__5823__auto__.call(null);(statearr_17293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___17294);
return statearr_17293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5822__auto___17441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_17411){var state_val_17412 = (state_17411[1]);if((state_val_17412 === 1))
{var inst_17374 = (new Array(n));var inst_17375 = inst_17374;var inst_17376 = 0;var state_17411__$1 = (function (){var statearr_17413 = state_17411;(statearr_17413[7] = inst_17376);
(statearr_17413[8] = inst_17375);
return statearr_17413;
})();var statearr_17414_17442 = state_17411__$1;(statearr_17414_17442[2] = null);
(statearr_17414_17442[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 2))
{var state_17411__$1 = state_17411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17411__$1,4,ch);
} else
{if((state_val_17412 === 3))
{var inst_17409 = (state_17411[2]);var state_17411__$1 = state_17411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17411__$1,inst_17409);
} else
{if((state_val_17412 === 4))
{var inst_17379 = (state_17411[9]);var inst_17379__$1 = (state_17411[2]);var inst_17380 = (inst_17379__$1 == null);var inst_17381 = cljs.core.not.call(null,inst_17380);var state_17411__$1 = (function (){var statearr_17415 = state_17411;(statearr_17415[9] = inst_17379__$1);
return statearr_17415;
})();if(inst_17381)
{var statearr_17416_17443 = state_17411__$1;(statearr_17416_17443[1] = 5);
} else
{var statearr_17417_17444 = state_17411__$1;(statearr_17417_17444[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 5))
{var inst_17379 = (state_17411[9]);var inst_17376 = (state_17411[7]);var inst_17375 = (state_17411[8]);var inst_17384 = (state_17411[10]);var inst_17383 = (inst_17375[inst_17376] = inst_17379);var inst_17384__$1 = (inst_17376 + 1);var inst_17385 = (inst_17384__$1 < n);var state_17411__$1 = (function (){var statearr_17418 = state_17411;(statearr_17418[11] = inst_17383);
(statearr_17418[10] = inst_17384__$1);
return statearr_17418;
})();if(cljs.core.truth_(inst_17385))
{var statearr_17419_17445 = state_17411__$1;(statearr_17419_17445[1] = 8);
} else
{var statearr_17420_17446 = state_17411__$1;(statearr_17420_17446[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 6))
{var inst_17376 = (state_17411[7]);var inst_17397 = (inst_17376 > 0);var state_17411__$1 = state_17411;if(cljs.core.truth_(inst_17397))
{var statearr_17422_17447 = state_17411__$1;(statearr_17422_17447[1] = 12);
} else
{var statearr_17423_17448 = state_17411__$1;(statearr_17423_17448[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 7))
{var inst_17407 = (state_17411[2]);var state_17411__$1 = state_17411;var statearr_17424_17449 = state_17411__$1;(statearr_17424_17449[2] = inst_17407);
(statearr_17424_17449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 8))
{var inst_17375 = (state_17411[8]);var inst_17384 = (state_17411[10]);var tmp17421 = inst_17375;var inst_17375__$1 = tmp17421;var inst_17376 = inst_17384;var state_17411__$1 = (function (){var statearr_17425 = state_17411;(statearr_17425[7] = inst_17376);
(statearr_17425[8] = inst_17375__$1);
return statearr_17425;
})();var statearr_17426_17450 = state_17411__$1;(statearr_17426_17450[2] = null);
(statearr_17426_17450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 9))
{var inst_17375 = (state_17411[8]);var inst_17389 = cljs.core.vec.call(null,inst_17375);var state_17411__$1 = state_17411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17411__$1,11,out,inst_17389);
} else
{if((state_val_17412 === 10))
{var inst_17395 = (state_17411[2]);var state_17411__$1 = state_17411;var statearr_17427_17451 = state_17411__$1;(statearr_17427_17451[2] = inst_17395);
(statearr_17427_17451[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 11))
{var inst_17391 = (state_17411[2]);var inst_17392 = (new Array(n));var inst_17375 = inst_17392;var inst_17376 = 0;var state_17411__$1 = (function (){var statearr_17428 = state_17411;(statearr_17428[7] = inst_17376);
(statearr_17428[8] = inst_17375);
(statearr_17428[12] = inst_17391);
return statearr_17428;
})();var statearr_17429_17452 = state_17411__$1;(statearr_17429_17452[2] = null);
(statearr_17429_17452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 12))
{var inst_17375 = (state_17411[8]);var inst_17399 = cljs.core.vec.call(null,inst_17375);var state_17411__$1 = state_17411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17411__$1,15,out,inst_17399);
} else
{if((state_val_17412 === 13))
{var state_17411__$1 = state_17411;var statearr_17430_17453 = state_17411__$1;(statearr_17430_17453[2] = null);
(statearr_17430_17453[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 14))
{var inst_17404 = (state_17411[2]);var inst_17405 = cljs.core.async.close_BANG_.call(null,out);var state_17411__$1 = (function (){var statearr_17431 = state_17411;(statearr_17431[13] = inst_17404);
return statearr_17431;
})();var statearr_17432_17454 = state_17411__$1;(statearr_17432_17454[2] = inst_17405);
(statearr_17432_17454[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17412 === 15))
{var inst_17401 = (state_17411[2]);var state_17411__$1 = state_17411;var statearr_17433_17455 = state_17411__$1;(statearr_17433_17455[2] = inst_17401);
(statearr_17433_17455[1] = 14);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_17437 = (new Array(14));(statearr_17437[0] = state_machine__5753__auto__);
(statearr_17437[1] = 1);
return statearr_17437;
});
var state_machine__5753__auto____1 = (function (state_17411){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_17411);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e17438){if((e17438 instanceof Object))
{var ex__5756__auto__ = e17438;var statearr_17439_17456 = state_17411;(statearr_17439_17456[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17457 = state_17411;
state_17411 = G__17457;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_17411){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_17411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_17440 = f__5823__auto__.call(null);(statearr_17440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___17441);
return statearr_17440;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5822__auto___17600 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5823__auto__ = (function (){var switch__5752__auto__ = (function (state_17570){var state_val_17571 = (state_17570[1]);if((state_val_17571 === 1))
{var inst_17529 = (new Array(0));var inst_17530 = inst_17529;var inst_17531 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17570__$1 = (function (){var statearr_17572 = state_17570;(statearr_17572[7] = inst_17531);
(statearr_17572[8] = inst_17530);
return statearr_17572;
})();var statearr_17573_17601 = state_17570__$1;(statearr_17573_17601[2] = null);
(statearr_17573_17601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 2))
{var state_17570__$1 = state_17570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17570__$1,4,ch);
} else
{if((state_val_17571 === 3))
{var inst_17568 = (state_17570[2]);var state_17570__$1 = state_17570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17570__$1,inst_17568);
} else
{if((state_val_17571 === 4))
{var inst_17534 = (state_17570[9]);var inst_17534__$1 = (state_17570[2]);var inst_17535 = (inst_17534__$1 == null);var inst_17536 = cljs.core.not.call(null,inst_17535);var state_17570__$1 = (function (){var statearr_17574 = state_17570;(statearr_17574[9] = inst_17534__$1);
return statearr_17574;
})();if(inst_17536)
{var statearr_17575_17602 = state_17570__$1;(statearr_17575_17602[1] = 5);
} else
{var statearr_17576_17603 = state_17570__$1;(statearr_17576_17603[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 5))
{var inst_17534 = (state_17570[9]);var inst_17531 = (state_17570[7]);var inst_17538 = (state_17570[10]);var inst_17538__$1 = f.call(null,inst_17534);var inst_17539 = cljs.core._EQ_.call(null,inst_17538__$1,inst_17531);var inst_17540 = cljs.core.keyword_identical_QMARK_.call(null,inst_17531,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17541 = (inst_17539) || (inst_17540);var state_17570__$1 = (function (){var statearr_17577 = state_17570;(statearr_17577[10] = inst_17538__$1);
return statearr_17577;
})();if(cljs.core.truth_(inst_17541))
{var statearr_17578_17604 = state_17570__$1;(statearr_17578_17604[1] = 8);
} else
{var statearr_17579_17605 = state_17570__$1;(statearr_17579_17605[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 6))
{var inst_17530 = (state_17570[8]);var inst_17555 = inst_17530.length;var inst_17556 = (inst_17555 > 0);var state_17570__$1 = state_17570;if(cljs.core.truth_(inst_17556))
{var statearr_17581_17606 = state_17570__$1;(statearr_17581_17606[1] = 12);
} else
{var statearr_17582_17607 = state_17570__$1;(statearr_17582_17607[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 7))
{var inst_17566 = (state_17570[2]);var state_17570__$1 = state_17570;var statearr_17583_17608 = state_17570__$1;(statearr_17583_17608[2] = inst_17566);
(statearr_17583_17608[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 8))
{var inst_17534 = (state_17570[9]);var inst_17530 = (state_17570[8]);var inst_17538 = (state_17570[10]);var inst_17543 = inst_17530.push(inst_17534);var tmp17580 = inst_17530;var inst_17530__$1 = tmp17580;var inst_17531 = inst_17538;var state_17570__$1 = (function (){var statearr_17584 = state_17570;(statearr_17584[7] = inst_17531);
(statearr_17584[8] = inst_17530__$1);
(statearr_17584[11] = inst_17543);
return statearr_17584;
})();var statearr_17585_17609 = state_17570__$1;(statearr_17585_17609[2] = null);
(statearr_17585_17609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 9))
{var inst_17530 = (state_17570[8]);var inst_17546 = cljs.core.vec.call(null,inst_17530);var state_17570__$1 = state_17570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17570__$1,11,out,inst_17546);
} else
{if((state_val_17571 === 10))
{var inst_17553 = (state_17570[2]);var state_17570__$1 = state_17570;var statearr_17586_17610 = state_17570__$1;(statearr_17586_17610[2] = inst_17553);
(statearr_17586_17610[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 11))
{var inst_17534 = (state_17570[9]);var inst_17538 = (state_17570[10]);var inst_17548 = (state_17570[2]);var inst_17549 = (new Array(0));var inst_17550 = inst_17549.push(inst_17534);var inst_17530 = inst_17549;var inst_17531 = inst_17538;var state_17570__$1 = (function (){var statearr_17587 = state_17570;(statearr_17587[12] = inst_17550);
(statearr_17587[7] = inst_17531);
(statearr_17587[13] = inst_17548);
(statearr_17587[8] = inst_17530);
return statearr_17587;
})();var statearr_17588_17611 = state_17570__$1;(statearr_17588_17611[2] = null);
(statearr_17588_17611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 12))
{var inst_17530 = (state_17570[8]);var inst_17558 = cljs.core.vec.call(null,inst_17530);var state_17570__$1 = state_17570;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17570__$1,15,out,inst_17558);
} else
{if((state_val_17571 === 13))
{var state_17570__$1 = state_17570;var statearr_17589_17612 = state_17570__$1;(statearr_17589_17612[2] = null);
(statearr_17589_17612[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 14))
{var inst_17563 = (state_17570[2]);var inst_17564 = cljs.core.async.close_BANG_.call(null,out);var state_17570__$1 = (function (){var statearr_17590 = state_17570;(statearr_17590[14] = inst_17563);
return statearr_17590;
})();var statearr_17591_17613 = state_17570__$1;(statearr_17591_17613[2] = inst_17564);
(statearr_17591_17613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17571 === 15))
{var inst_17560 = (state_17570[2]);var state_17570__$1 = state_17570;var statearr_17592_17614 = state_17570__$1;(statearr_17592_17614[2] = inst_17560);
(statearr_17592_17614[1] = 14);
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
});return ((function (switch__5752__auto__){
return (function() {
var state_machine__5753__auto__ = null;
var state_machine__5753__auto____0 = (function (){var statearr_17596 = (new Array(15));(statearr_17596[0] = state_machine__5753__auto__);
(statearr_17596[1] = 1);
return statearr_17596;
});
var state_machine__5753__auto____1 = (function (state_17570){while(true){
var ret_value__5754__auto__ = (function (){try{while(true){
var result__5755__auto__ = switch__5752__auto__.call(null,state_17570);if(cljs.core.keyword_identical_QMARK_.call(null,result__5755__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5755__auto__;
}
break;
}
}catch (e17597){if((e17597 instanceof Object))
{var ex__5756__auto__ = e17597;var statearr_17598_17615 = state_17570;(statearr_17598_17615[5] = ex__5756__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17570);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5754__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17616 = state_17570;
state_17570 = G__17616;
continue;
}
} else
{return ret_value__5754__auto__;
}
break;
}
});
state_machine__5753__auto__ = function(state_17570){
switch(arguments.length){
case 0:
return state_machine__5753__auto____0.call(this);
case 1:
return state_machine__5753__auto____1.call(this,state_17570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5753__auto____0;
state_machine__5753__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5753__auto____1;
return state_machine__5753__auto__;
})()
;})(switch__5752__auto__))
})();var state__5824__auto__ = (function (){var statearr_17599 = f__5823__auto__.call(null);(statearr_17599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5822__auto___17600);
return statearr_17599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5824__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map