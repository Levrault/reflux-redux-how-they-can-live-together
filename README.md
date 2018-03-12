# Reflux and Redux how they can live together ?

Reflux is a simple library for unidirectional dataflow architecture inspired by Flux and Redux is a predictable state container for JavaScript apps. Both are use to get/update data in a react context. But since Redux exist, Reflux seems a bit irrelevant and old.

But what happen when you have a old Reflux app and you need to migrate it to Redux ?

You got two options, the first one, you start from scratch with Redux and that's all. The second one, you need to migrate component by component to Redux while maintaining some old reflux component.

The second option seems more plausible in the case the client can't afford a to stop everything to let you migrate the complete application to Redux since this operation can be long.

## My solution

I create a combinedStore component that will help you sync data between a Redux Store and Reflux store. My case is pretty dumb but it can be useful to progressively migrate to a Redux app.

CombinedStore use callback to call Reflux Actions on state change et Redux Actions on props change.

It's a temporary solution since you will get rid of Reflux at the end.