import React,{useEffect} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export const SliderIndex = ({data}) => {

    const [EntryPosts, setEntryPosts] = React.useState([]);

    useEffect(() => {
        const arr = [];
        for (let i=data.length - 1; i >= 6; i--) {
            arr.push(data[i]);
        }
        setEntryPosts(arr);
    }, [data]);

    return (
        <AwesomeSlider>
            {EntryPosts.map(item => <div key={item.id} data-src={item.jetpack_featured_media_url} />)}
        </AwesomeSlider>
    )
}
