# rocketseat-goreact-modulo-1

Project developed while studying 1st ReactJS module classes

- prop-types (helps defining types to the component's props and defining if they are required or not)
- @babel/plugin-proposal-class-properties (allow to declare static properties inside de component)

Notes:

- Everytime a component changes its properties or the state, the render method is called
- The setState method is asynchronous. If you wanna run synchronously you can pass a callback function as the second parameter or you can pass a function to the setState instead of the object containing the property you wanna override in the state to garantee that you will be always reading the last value of the state
