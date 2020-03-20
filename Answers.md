# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    	React Js is a user interface component library. It is one of the many libraries used  to build large 	scale applications. The library is built in javascript to build out user interfaces/large scale applications.

    React JS helps to keep our code DRY with the use of building custom components, making our code 
    scalable and reusable. 

    React JS also has a virtual DOM that interacts with the actual DOM for us.
    It will update the data(state) being rendered to the actual DOM for us. 
    This helps to offload the state(data) that our apps and browsers need to use from the actual DOM. 



2. What does it mean to think in react?

To think in react means that DOM will be updated accordingly, when the state(data) in our app changes. Components are used to build an application

3. Describe state.

State is simply data that is being used in our app.  

4. Describe props.

Props stands for properties, and it is when you want to pass information held on state from one component to another component. 



5. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is anything that affects something outside the scope of the function being executed. 

We use the useEffect() hook and pass in a dependency array(empty array) as the second argument in the effect hook. 