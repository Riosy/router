import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import { Routes , Route} from "react-router-dom";
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
   ;
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer d-md-none`} 
            onClick={handleShowMenu}
            ></i>        
 <Routes>
    <Route path='/users/*'element={<Users/>} />
    <Route path='/posts'element={<Posts/>} />
    <Route path='/gallery'element={<Gallery/>} />
    <Route path='/todos'element={<Todos/>} />

    <Route path='/adduser'element={<AddUser/>} >
    <Route path=':userId' element={<EditDesc/>}/>
    </Route>

 </Routes>

        </div>
    )

}

export default Content;