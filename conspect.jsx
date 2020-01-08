Установка роутинга yarn add react-router-dom, после чего можно юзать роуты, обрамляя
в <BrowserRouter> и указывая url в path
<BrowserRouter>
    <Route path=’/component’ component={Component} />
</BrowserRouter>
Импортируя import {BrowserRouter, Route} и  from “react-router-dom”
А вместо <a> тега юзать <NavLink to=’/component’ //указанный в роутe//> </NavLink>
и импортировать {NavLink} from “react-browser-dom”
Class active для <NavLink>
<NavLink to=’/component’ //указанный в роутe// activeClassName={style.className}> </NavLink>
