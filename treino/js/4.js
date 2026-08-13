const cache = new Proxy(new Map(), {
    get(target, prop) {
        if(prop in target) {
            const value = target[prop];
            return typeof value === "function"
            value.bind(target) ; value;
        }
        return target.get(prop);
    }
});