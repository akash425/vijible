import React from 'react';
import './Profile.css';

const Profile = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
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

    const expertsData = [
        {
            name: "Abhishek Singh",
            title: "LinkedIn Top Voice'23 | Moody's | NITI Aayog, EAC-PM",
            company: "Moody's",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Prayank Madan",
            title: "Product | Swiggy | InMobi | Classplus | ISB Currently on",
            company: "Zepto",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Karuna Kak",
            title: "Results-Driven Project Manager & Business Analyst",
            company: "Bajaj Finance Ltd",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Kushal Agrawal",
            title: "SDE-2 at Rippling, India",
            company: "Rippling",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Venkatesh Bellam",
            title: "Business System Analyst | Solution Architect |US",
            company: "Optum",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Dr. Sarah Chen",
            title: "Senior Research Scientist | AI Ethics Lead",
            company: "Google AI",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Dr. Raj Patel",
            title: "Chief of Cardiology | Research Lead",
            company: "Mayo Clinic",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Maya Rodriguez",
            title: "VP of Investment Banking | M&A Specialist",
            company: "Goldman Sachs",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Alex Thompson",
            title: "Blockchain Lead | Web3 Architecture",
            company: "Coinbase",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Dr. Emily Wong",
            title: "Head of Oncology Research",
            company: "Memorial Sloan Kettering",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "James Mitchell",
            title: "Senior Investment Strategist | Portfolio Manager",
            company: "BlackRock",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        },
        {
            name: "Priya Sharma",
            title: "ML Engineering Lead | Former Meta",
            company: "DeepMind",
            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }
    ];

    // Updated categories with more comprehensive filtering
    const categories = {
        'All': expertsData,
        'Technology': expertsData.filter(expert => 
            ['Rippling', 'Swiggy', 'InMobi', 'Google AI', 'Coinbase', 'DeepMind'].includes(expert.company)),
        'Finance': expertsData.filter(expert => 
            ['Moody\'s', 'Bajaj Finance Ltd', 'Goldman Sachs', 'BlackRock'].includes(expert.company)),
        'Healthcare': expertsData.filter(expert => 
            ['Optum', 'Mayo Clinic', 'Memorial Sloan Kettering'].includes(expert.company))
    };

    return (
        <div className='profile'>
            <div className='personal-details'>
                <div >
                    <img className='profile-picture' src={profilePicture} alt='Profile' />
                </div>
                <h1>Chandigarh University</h1>
                <p>Best Private University in Punjab (India)</p>
                <div className="profile-actions">
                    <button className="edit-profile-btn">Edit Profile</button>
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
            <div className='services'>
                <div className='nav-buttons'>
                    {Object.keys(categories).map(category => (
                        <button 
                            key={category}
                            className={`nav-button ${selectedCategory === category ? 'selected' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="experts-grid">
                    {categories[selectedCategory].map((expert, index) => (
                        <div key={index} className="expert-card">
                            <img 
                                src={expert.image} 
                                alt={expert.name} 
                                className="expert-image"
                            />
                            <div className="expert-company">{expert.company}</div>
                            <div className="expert-name">{expert.name}</div>
                            <div className="expert-title">{expert.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;
