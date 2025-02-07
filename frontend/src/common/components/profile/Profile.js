import React from 'react';
import './Profile.css';

const Profile = () => {
    const [selectedButton, setSelectedButton] = React.useState('All');
    const coverPhoto = "https://images.shiksha.com/mediadata/images/1724403408php19ReYs.jpeg"; // Replace with actual URL or leave empty
    const profilePicture = "https://images.shiksha.com/mediadata/images/1610694069phpYY6cff.jpeg"; // Replace with actual URL or leave empty
    const name = "Chandigarh University";
    const friendsCount = "Best Private University in Punjab (India)";
    const NAACLogo = "https://puchd.ac.in/asset/logo/pu-naac-logo.png";

    // Updated dummy data to match button categories
    const dummyData = {
        All: [
            {
                type: 'post',
                title: "Latest Achievement",
                description: "CU ranked among top universities in India!",
                date: "2 days ago",
                likes: 234,
                comments: 45
            },
            {
                type: 'photo',
                title: "Campus Life",
                imageUrl: "https://images.shiksha.com/mediadata/images/1610694069phpYY6cff.jpeg",
                description: "Beautiful view of our main campus building",
                date: "1 week ago",
                likes: 567,
                comments: 89
            },
            {
                type: 'video',
                title: "Campus Tour 2024",
                thumbnailUrl: "https://images.shiksha.com/mediadata/images/1724403408php19ReYs.jpeg",
                duration: "5:30",
                views: "10K",
                date: "3 days ago"
            }
        ],
        Posts: [
            {
                title: "Latest Achievement",
                description: "CU ranked among top universities in India!",
                date: "2 days ago",
                likes: 234,
                comments: 45
            },
            {
                title: "Upcoming Tech Fest",
                description: "Join us for the biggest tech festival of the year",
                date: "1 day ago",
                likes: 189,
                comments: 23
            },
            {
                title: "Placement Success",
                description: "Over 500 students placed in top companies",
                date: "5 days ago",
                likes: 756,
                comments: 112
            }
        ],
        Photos: [
            {
                title: "Campus Life",
                imageUrl: "https://images.shiksha.com/mediadata/images/1610694069phpYY6cff.jpeg",
                description: "Beautiful view of our main campus building",
                date: "1 week ago",
                likes: 567
            },
            {
                title: "Sports Complex",
                imageUrl: "https://images.shiksha.com/mediadata/images/1724403408php19ReYs.jpeg",
                description: "State-of-the-art sports facilities",
                date: "5 days ago",
                likes: 342
            },
            {
                title: "Library",
                imageUrl: "https://images.shiksha.com/mediadata/images/1610694069phpYY6cff.jpeg",
                description: "Modern library with vast collection",
                date: "3 days ago",
                likes: 289
            }
        ],
        Videos: [
            {
                title: "Campus Tour 2024",
                thumbnailUrl: "https://images.shiksha.com/mediadata/images/1724403408php19ReYs.jpeg",
                duration: "5:30",
                views: "10K",
                date: "3 days ago"
            },
            {
                title: "Student Life at CU",
                thumbnailUrl: "https://images.shiksha.com/mediadata/images/1610694069phpYY6cff.jpeg",
                duration: "8:45",
                views: "15K",
                date: "1 week ago"
            },
            {
                title: "Research Facilities",
                thumbnailUrl: "https://images.shiksha.com/mediadata/images/1724403408php19ReYs.jpeg",
                duration: "4:20",
                views: "8K",
                date: "2 days ago"
            }
        ]
    };

    return (
        <div className='profile'>
            <div className='personal-details'>
                <div >
                    <img className='profile-picture' src={profilePicture} alt='Profile' />
                </div>
                <h1>Chandigarh University</h1>
                <p>Best Private University in Punjab (India)</p>
            </div>
            <div className='services'>
                <div className='nav-buttons'>
                    <button 
                        className={`nav-button ${selectedButton === 'All' ? 'selected' : ''}`}
                        onClick={() => setSelectedButton('All')}
                    >
                        All
                    </button>
                    <button 
                        className={`nav-button ${selectedButton === 'Posts' ? 'selected' : ''}`}
                        onClick={() => setSelectedButton('Posts')}
                    >
                        Posts
                    </button>
                    <button 
                        className={`nav-button ${selectedButton === 'Photos' ? 'selected' : ''}`}
                        onClick={() => setSelectedButton('Photos')}
                    >
                        Photos
                    </button>
                    <button 
                        className={`nav-button ${selectedButton === 'Videos' ? 'selected' : ''}`}
                        onClick={() => setSelectedButton('Videos')}
                    >
                        Videos
                    </button>
                </div>

                <div className='content-section'>
                    {dummyData[selectedButton]?.map((item, index) => (
                        <div key={index} className='content-item'>
                            {item.type === 'photo' || item.imageUrl ? (
                                <img src={item.imageUrl} alt={item.title} className="content-image" />
                            ) : item.type === 'video' || item.thumbnailUrl ? (
                                <div className="video-thumbnail">
                                    <img src={item.thumbnailUrl} alt={item.title} />
                                    <span className="duration">{item.duration}</span>
                                </div>
                            ) : null}
                            <h3 className='item-title'>{item.title}</h3>
                            <p className='item-description'>{item.description}</p>
                            <div className='item-footer'>
                                <span className="date">{item.date}</span>
                                {item.likes && <span className="likes">👍 {item.likes}</span>}
                                {item.comments && <span className="comments">💬 {item.comments}</span>}
                                {item.views && <span className="views">👁️ {item.views}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;
