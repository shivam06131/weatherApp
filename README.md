### Detailed Description➖

I have used pure JavaScript *functional programming* in this Assignment to *showcase how much understanding i have of pure React and Javascript (that is quite complicated to implement and understand in first go)*. Functional programming is a programming paradigm that emphasizes the use of functions to create programs. In functional programming, functions are treated as first-class citizens, which means that they can be *passed around just like any other value*.

To make my code more modular and maintainable, I have created and *used helper functions*. Helper functions are typically pure functions that perform a specific task, such as formatting the data according to the need and creating the set of data, etc... By *encapsulating complex logic in helper functions*, I have been able to make my ***code more modular, easier to read and maintain***.

Finally, I have used functional programming in conjunction with React by *passing setter functions as arguments to my helper functions*. This allows me to update the state of my React component in a pure and predictable way, without introducing any side effects. By doing all the business logic with helper functions, I have been able to keep my ***React components clean and focused on rendering***.

Using functional programming with React and passing setter functions to helper functions can seem a bit daunting at first, but it's actually an *essential technique for working on complex projects*.

*It might take a little more effort to understand and implement at first*, but by using pure functions and helper functions, you can create a modular, maintainable, and predictable codebase that's *easier to test and debug*  on large, complex projects where code clarity and maintainability are essential.

In the deployed version of the React application, I have *disabled the use of developer tools*, which is considered a good practice in production environments. Additionally, I have written *unit test cases* for both the helper functions and React components, with an overall *coverage of more than 80%* for all criteria. By ensuring comprehensive test coverage and disabling developer tools, *I have improved the stability, security, and performance of the application*, which is critical in a production environment.

Also i’ve added one ***script*** if you don’t have node and npm installed in you local machine you can just *run that script and that will install node and npm* both.

---

How to Use➖ (with link) 

---

Redux Version ➖ (with link)

---

Commands ➖

To start

```graphql
npm start
```

To run test cases.

```jsx
//for over all
npm run test   

//for perticular file
npm run test -- <filename> 
```

To check test Coverage

```jsx
//for over all
npm run test:coverage  

//for perticular file
npm run test:coverage -- <filename> || <file relative path>
```

To run script

```jsx
//To give necessary permission
chmod +x ./scripts/setup.sh

//To run the script
sh ./scripts/setup.sh

**dummy output**
*setting up required softwares/dependencies
log: Node already installed v16.13.2
log: npm already installed -v9.4.1*
```