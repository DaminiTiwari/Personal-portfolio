import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAllProject } from '../features/projectSlice';
import '../styles/projects.css';

const Project = () => {
    const history = useHistory();

    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);

    useEffect(() => {
       dispatch(fetchAllProject());
    }, [dispatch])

    

  return (
    <div className='project__box'>
    {
        projects?.projects?.map((temp)=>{
            return (<div  className='project__box__grid' key={temp.id}>
            <div className='project__box__projects'  >
            <div className='project__box__projects__details'>
            <h4 onClick={() => history.push(`/projectdetails/${temp.id}`)}>{temp.data.name}</h4>
        </div>
            <div className='project__box__projects__img'>
                <img src={temp.data.image} alt={temp.data.name} />
            </div>
    
       
    
        </div>
    
        </div>)
            
        })
    }


</div>
  )
}

export default Project