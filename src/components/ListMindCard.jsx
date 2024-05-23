
import { CDN_URL,IMG_URL } from '../utils/constants';

const ListMindCard = (props) => {
    const {resData} = props;
    console.log(resData);
    const {id,imageId,action} =resData;
    const filePath = imageId;
    const parts = filePath.split('/');
    const MenuImageFile = parts[parts.length - 1];
    const newFilename = MenuImageFile.replace(/_\d+\./, ".");

    return (
    <div className='flex flex-row'>
        <div className='box w-36'>
            <img
              alt={newFilename}
              src={IMG_URL + newFilename}
              className='object-cover'
            />
        </div>
     </div>
     
    )
}

export default ListMindCard