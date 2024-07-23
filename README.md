## React-Journey
# A Repo to document My Journey of learning React Js as part of Frontend Development



## Installation and build a React Project

# Method 1
```cmd
npx create-react-app 01basicreact
```
Using the the create-react-app it is a bundle but its a bulky 

Where in package.json where we can find the scripts and also to find how to build or run the project and the necessary information and is recommended to open it as the first file.


To run (basic command)
```cmd
npm run start
```

# Method 2
```cmd
npm create vite@latest
```

Using the frameworks ,here we are using vite as mention in the official react documentation react.dev and we need to follow the necessary steps there asked during the implenmentation 

To run the vite react we need to install necessay commands
```cmd
npm i
```

then 
```cmd
npm run dev

```

Difference is that 
-vite has strict impositions while creating components only in the .jsx while create-react-app doesnt impose any such impositions ie .js can be used 
-vite will throw an error for functions returning the html their first character should be upper case but create-react-app doesnt but the component will not come into the effect
-the js or jsx is injected into the html page directly in vite and the create react app uses scripts to do it under the hood
