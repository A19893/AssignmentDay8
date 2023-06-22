import React,{useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal,Button } from 'antd';
import { removeAuth } from '../../Features/AuthSlice';
import { useDispatch } from 'react-redux';
import Options from '../Templates/Options'
import { addTemplate } from '../../Features/UserSlice';
const Profile = () => {
  const navigate=useNavigate();
  const[data,setData]=useState('');
  const dispatch=useDispatch();
    const logoutBtn=()=>{
      dispatch(addTemplate(1));
      dispatch(removeAuth());
    }
  const getToForm=()=>{
    navigate("/form")
  }
  const viewBtn=(data)=>{
     setData(data)
      if(template==1){
          navigate("/template1",{state:data})
      }
      else if(template==2){
        navigate("/template2",{state:data})
      }
      else{
        navigate("/template3",{state:data})
      }
    }
  const cvData1=useSelector((state)=>state.user.Resumes);
  const number=useSelector((state)=>state.authentication.number);
  const template=useSelector((state)=>state.user.TemplateNo);
  return (
    <>
    <div className="profileContainer">
      <div>
        <Options/>
      </div>
      <div className='proContainer'>
        {
          cvData1?.map((item)=>{
             if(item.CV.phone===number){
            return(
              <>
            <div className='displaying'>
              <div>
             <img src="https://d1bvpoagx8hqbg.cloudfront.net/originals/how-to-take-a-good-photo-for-your-cv-our-top-tips-3d51fa22c6f19bb8fdb13a3834bba98c.jpg" alt="can't"/>
              </div>
             <button onClick={(e)=>viewBtn(item)}>View</button>
            </div>
            </>
            )
            }
          })
        }
      </div>
      <div className="icon">
          <AddCircleIcon onClick={()=>getToForm()}/>
      </div>
      <div>
        <Button type="primary" htmlType="logout" onClick={()=>logoutBtn()}>Logout</Button>
        </div>
    </div>
    </>
  )
}

export default Profile