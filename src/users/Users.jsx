import React, { useEffect , useState } from 'react';
import style from '../style.module.css'
import { Link , useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios'

const Users = ()=>{

  const handledelete = (x)=> {
    Swal.fire({
        title: `ایا میخواهید${x}را حذف کنید`,
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "بله",
        cancelButtonText: "خیر"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "حذف شد!",
            text: "",
            icon: "success"
          });
        }
      });
  }

  const [users , setUsers] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{

        setUsers(res.data)

    }).catch(err=>{
        console.log(err)
    })
 }
  ,[])

    const navigate = useNavigate()

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/adduser">
                    <button className="btn btn-success">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                    </Link>
                </div>
            </div>

 {users.length ?(
                <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
{users.map(U=>(
                        <tr key={U.id}>
                        <td>{U.id}</td>
                        <td>{U.name}</td>
                        <td>{U.username}</td>
                        <td>{U.email}</td>
                        <td> 
                            <i className="fas fa-edit text-warning mx-2 pointer" onClick={()=>navigate("/adduser/1")}></i>
                            <i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>handledelete(1)}></i>
                        </td>
                    </tr>
))}
                </tbody>
            </table>)
            :(
                <h4 className='text-center text-info'>لطفا صبر کنید</h4>
            )}

        </div>
    )

}

export default Users;