import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProjectById, removeSelectedProject } from '../features/projectSlice';
import '../styles/projectDetails.css';


const ProjectDetail = () => {
    const { projectId } = useParams();
    const dispatch = useDispatch();
    // const singleProject = useSelector((state) => state.projects);
    const projects = useSelector((state) => state.projects.singleProject);
  

    useEffect(() => {
        // if (authUser.status === "fulfilled" && productId && productId !== "" ) {
        dispatch(fetchProjectById(projectId));
        //    }
        // if (productId && productId !== "") 
        // dispatch(selectedProductDetail(productId));
        return () => {
            dispatch(removeSelectedProject());
        }
    }, [projectId, dispatch]);


    return (
        <div className='project__box'>

            <div  className='project__box__grid' >

                <div className='project__box__projects__single'  >
                    <div className='project__box__projects__img'>
                        <img src={projects.image} alt={projects.name} />
                    </div>

                    <div className='project__box__projects__details__single'>
                        <table>
                        <tbody>
                            <tr>
                                <th>Project</th>
                                <td>{projects.name}</td>

                            </tr>
                            <tr>
                                <th>Description</th>
                                <td> {projects.description}</td>

                            </tr>

                            <tr>
                                <th>Techs</th>
                                <td>
                                    {
                                        projects?.tech?.map((techs, index) => {
                                            return <span key={index}> {techs}</span>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <th>Git</th>
                                <td> <a href={projects.git}>{projects.git}</a></td>

                            </tr>
                            <tr>
                                <th>Live</th>
                                <td> <a href={projects.live}>{projects.live}</a></td>

                            </tr>
                            </tbody>
                        </table>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectDetail;