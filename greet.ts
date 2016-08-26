/* @flow */

/*:: declare var greet: (name?: string) => void */

const greet = (name: string = 'World'): void => console.log(`Hello, ${name}!`)
