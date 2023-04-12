import {useParams} from 'react-router-dom';
const Page = () => {
    let params = useParams();
    console.log(params);
    return (
        <>
            <h1>{params.page}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum accusamus provident, voluptate iste in nesciunt facilis, eaque animi aliquid magnam ut soluta quasi? Dignissimos maxime alias vitae velit dicta! Ipsam.</p>
        </>
    );
}

export default Page;