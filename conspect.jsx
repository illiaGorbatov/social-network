/*Установка роутинга yarn add react-router-dom, после чего можно юзать роуты, обрамляя
в <BrowserRouter> и указывая url в path*/
<BrowserRouter>
    <Route path=’/component’ component={Component} />
</BrowserRouter>
/*Импортируя import {BrowserRouter, Route} и  from “react-router-dom”
А вместо <a> тега юзать <NavLink to=’/component’ //указанный в роутe//> </NavLink>
и импортировать {NavLink} from “react-browser-dom”
Class active для <NavLink>*/
<NavLink to=’/component’ //указанный в роутe// activeClassName={style.className}> </NavLink>
/_________/
/*разбивка messages тоже NavLink и отдельный компонент, создающий путь
и путь, выходящий из роута, должен совпадать до косой черты, если хотим из этого же компонента вызывать*/
const DialogItem= () => {
    let path = "/dialogs/" + props.id;//props.id = "1"

    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
<DialogItem name={name} id={id} />
// сообщения также инкапсулируем, иными словами, готовим компоненты к приёму пропсов
// и мапим их, как на семинарчике))
//Route для передачи пропсов
        <Route path=’/component’ render={() => <Component />} />