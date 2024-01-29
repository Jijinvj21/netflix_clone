import React, { useEffect, useState } from 'react'
import  Youtube  from "react-youtube";
import './RowPost.css'
import { imageUrl,API_KEY} from '../../constants/constants'

import axios from '../../axios'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid ,setUrlId]=useState('')
    /* eslint-disable */
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response)
            setMovies(response.data.results)
        }).catch(error=>{
            console.log(error);
        })
    },[])
    /* eslint-enable */
    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handlemovie=(id)=>{
        console.log(id)

        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
            if(res.data.results.length!==0){
                setUrlId(res.data.results[0]);
            }else{
                console.log(res.data.results.length);
            }
        }).catch(()=>{
            console.log('something went wrong');
        })
      }
    return (
        <div className='row'>
            <h4>{props.title}</h4>
            <div className='posters'>
                {movies.map((obj)=>
                    <img onClick={()=>handlemovie(obj.id )} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
           { urlid && <Youtube opts={opts}  videoId= {urlid.key} />}
        </div>
    )
}

export default RowPost



