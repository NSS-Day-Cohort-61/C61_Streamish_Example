import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVideo } from '../modules/videoManager';

const VideoForm = ({getVideos}) => {
    const navigate = useNavigate(); 
    const [video, setVideo] = useState(
        {
            title: "",
            description: "",
            url: ""
        }
    )

    const handleSaveButtonClick = (e) => {
        e.preventDefault()

        addVideo(video).then(window.alert('Video added!'))
        .then((p) => {
            navigate("/")
        });
    }
    
    return (
        <>
            <h4>Add A Video</h4>
            <form>
                <div>
                    <input
                        value={video.title}
                        placeholder="Enter Title..."
                        onChange={
                            (evt) => {
                                const copy = {...video}
                                copy.title = evt.target.value
                                setVideo(copy)
                            }
                        }>
                    </input>
                    <input
                        value={video.description}
                        placeholder="Enter Video Description..."
                        onChange={
                            (evt) => {
                                const copy = {...video}
                                copy.description = evt.target.value
                                setVideo(copy)
                            }
                        }>
                    </input>
                    <input
                        value={video.url}
                        placeholder="Enter YouTube URL..."
                        onChange={
                            (evt) => {
                                const copy = {...video}
                                copy.url = evt.target.value
                                setVideo(copy)
                            }
                        }>
                    </input>
                </div>
                <div>
                    <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>
                    Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default VideoForm