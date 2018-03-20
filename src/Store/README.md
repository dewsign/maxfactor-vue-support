# AJAX Vuex Store

A namespaced Vuex store module that makes use of AJAX to get and update the store's data from the given API end-point.

## Usage

1. To use the AJAX Vuex store in your application, start by extending the `AjaxStore` class from your own store class, such as below:

```js
import AjaxStore from 'maxfactor-vue-support'

class ExampleStore extends AjaxStore {
    constructor() {
        super({
            action: 'https://example.com',
            method: 'GET', // Default
        })
    }
}

export default ExampleStore
```

You can specify the AJAX request 'action' and 'method' when calling the parent class' constructor.

2. Import your newly created namespaced store module into your Vuex store, for example:

```js
import Vue from 'vue'
import Vuex from 'vuex'

import ExampleStore from './ExampleStore'

Vue.use(Vuex)

const VuexStore = new Vuex.Store({
    modules: {
        example: new ExampleStore(),
    },
})

export default VuexStore
```

3. To get data from the namespaced Vuex store (or to update it) in your Vue component, you can make use of the Vuex `mapGetters` and `mapActions` helper methods. Below is an example implementation of a Vue component that checks if the namespaced Vuex store contains any items during the `created` lifecycle hook. If the store contains no items, then the `updateItems` action is dispatched to get the items from the given API end-point specified in your namespaced store module using AJAX.

```js
import { mapGetters, mapActions } from 'vuex'

created() {
    if (!this.hasItems) this.updateItems()
},

computed: {
    ...mapGetters('example', [
        'items',
        'hasItems',
    ]),
},

methods: {
    ...mapActions('example', [
        'updateItems',
    ]),
},
```
