import {Room} from '../../components/Cards/RoomCard';
import RoomCard from '../../components/Cards/RoomCard';

const rooms: Room[] = [
    {
        _id: '1',
        title: 'Room 1',
        anime: 'Avangers: Endgame',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "1"
    },
    {
        _id: '2',
        title: 'Room 2',
        anime: 'Avatar 2',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "20"
    },
    {
        _id: '3',
        title: 'Room 3',
        anime: 'Demon slayer',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "300"
    },
    {
        _id: '4',
        title: 'Room 4',
        anime:"Overlord",
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "12"
    },
    {
        _id: '5',
        title: 'Room 5',
        anime: 'Sword art online',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "3"
    },
    {
        _id: '6',
        title: 'Room 6',
        anime: 'Naruto',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "2"
    },
    {
        _id: '7',
        title: 'Room 7',
        anime: 'One piece',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "1"
    },
    {
        _id: '8',
        title: 'Room 8',
        anime: 'Bleach',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "1"
    },
    {
        _id: '9',
        title: 'Room 9',
        anime: 'Dragon ball',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "20"
    },
    {
        _id: '10',
        title: 'Room 10',
        anime: 'Death note',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "11"
    },
    {
        _id: '11',
        title: 'Room 11',
        anime: 'Fullmetal alchemist',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "13"
    },
    {
        _id: '12',
        title: 'Room 12',
        anime: 'Hunter x hunter',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "14"
    },
    {
        _id: '13',
        title: 'Room 13',
        anime: 'Tokyo ghoul',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/3e3a43a91f0025ed8dbe692da76dd4f7/960x540',
        spectators: "15"
    },




]

const RoomsList: React.FC = () => {
    
    return (
        <div className='px-10 py-5'>
            
            <div className='grid grid-cols-8 gap-4'>
                {rooms.map(room => (
                    <div className='col-span-2' key={room._id} >
                    <RoomCard room={room} />
                    </div>
                ))}
            </div>
    
        </div>
    );
    }


    
export default RoomsList;