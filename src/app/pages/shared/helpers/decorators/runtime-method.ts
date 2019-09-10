export function logRuntimeMethods() {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const methodOrigin = descriptor.value;

        descriptor.value = (...args: any[]) => {
            // tslint:disable-next-line: no-console
            console.info(`----------------------------\n
                parametros passados para o método ${propertyKey}: ${JSON.stringify(args)};
            `);
            const t1 = performance.now();
            const data = methodOrigin.apply(this, args);
            const t2 = performance.now();
            // tslint:disable-next-line: no-console
            console.info(`----------------------------\n
                O retorno do método ${propertyKey} é ${JSON.stringify(data)} \n
                O método ${propertyKey} demorou: ${t2 - t1} ms;
            `);
            return data;
        };
    };
}
