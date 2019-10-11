1. What problem does the context API help solve?

    You no longer have to pass props down from component to component. You can store data on a context object and retrieve it that way.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions are patterns that are dispatched to the reducer which is a function that takes the previous state and returns the next state. Store is where the current state is located. Single source of truth refers to the master state, what you start off with.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Component state is stored locally within the component and only accessible to other components by passing props. While App state is global.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk is a middleware that lets you call action creators that return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Im more comfortable using Redux since the last couple of days i've been in deep with the struggle to learn it and i've been studying it all night.
