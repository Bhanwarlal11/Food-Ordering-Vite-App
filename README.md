# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## for live
- if you want to live the app 
- first - cd frontend
- then - npm run dev

# setup

- npm create vite@latest
- frontend
- react
- javascript

- cd frontend
- npm install

- npm install react-router-dom

- clear app.jsx >> and >> type {rafce}
- delete app.css
- clear index.css & paste below code
- change index.jsx title


**Provide basic css properties in index.css**
```
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body{
  min-height: 100vh;
}

a{
  text-decoration: none;
  color: inherit;
}
```



**I used react-router**
- we used react-router to adjust multiple pages
- used for navigate multiple pages in react app

*`open main jss`*
- using <browserRouter> we wrap <App/> & remove <strictMode> , now we will get react-router support in our application
```
<BrowserRouter>
    <App/>
  </BrowserRouter>
```

*`open app.jsx`*
- using route we can create multiple pages



## used features
- Navbar clicked marking(home,menu....)
- heading loading animation ( while reloading & refreshing the page) using FadeIn & keyfreames
- exploreMenu - clicked marking on items(salad,rolls,desert,sandwitch....8items)
- used ContextApi (storeContext)



## for demo
- `npm run preview`

## [https://bhanwarlal11.github.io/Food-Ordering-Vite-App/](https://bhanwarlal11.github.io/Food-Ordering-Vite-App/)