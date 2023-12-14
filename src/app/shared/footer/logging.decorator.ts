export function consoleLogDecorator (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`decorator called ${target.constructor.name} to ${propertyKey}`);
    return descriptor;
};