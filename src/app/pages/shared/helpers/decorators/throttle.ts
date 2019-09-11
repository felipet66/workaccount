export function throttle(ms = 500) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const methodOrigin = descriptor.value;
        let timer: any = 0;
        descriptor.value = (...args: any[]) => {
            clearInterval(timer);
            timer = setTimeout( () => {
                methodOrigin.apply(this, args);
            }, ms)
        };
    };
}
