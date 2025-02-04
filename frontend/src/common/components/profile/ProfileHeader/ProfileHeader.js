import React, { useState } from "react";
import "./ProfileHeader.css";
import Post from "../../Post/Post"
import About from "../../About/About"
import PhotosSection from "../../Photos/Photos";

const ProfileHeader = ({ coverPhoto, profilePicture, name, friendsCount }) => {
    const [activeTab, setActiveTab] = useState("Posts");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const banner = "https://cdn-websites.talentedge.com/CHANDIGARH/public_html/assets/assets/img/chandigarh/Group-7957.png"
    const text = "Chandigarh University (CU) is a leading Indian Institution offering its students a unique amalgamation of professional and academic excellence. The University has been accredited with the prestigious A+ grade by the National Assessment and Accreditation Council (NAAC).\n\n Chandigarh University has become Youngest and the only private university in India to bag an A+ grade in the first cycle of the accreditation process and has also become the only state private university of Punjab to be accredited by NAAC. Also, ranked among Asia’s best and fastest-growing universities, CU has coupled the experience of top industry leaders and renowned academicians to foster a global approach. A wide spectrum of programs paired with flexibility, experiential learning and interdisciplinary orientation emancipate our students to explore their interests and pursue dream careers. At CU we are grooming students to be socially sensitive through intellectually challenging and contemporary diverse culture.";

    const photoUrls = [
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        'https://scontent.fixc1-8.fna.fbcdn.net/v/t1.6435-9/191230189_3739112682862090_9220374159950932563_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=gyUOzbDs2S0Q7kNvgHDSEB4&_nc_zt=23&_nc_ht=scontent.fixc1-8.fna&_nc_gid=AlH2QlcsDfxsAoC92Zc0-eD&oh=00_AYCs3-3EEqa1ifVubtQwrznNDtZ0AP_kZ54Zq1sWrTsghQ&oe=67B5C147',
        'https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1709809421_gGAon1c8t6.jpg',
        'https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/473188211_1015245450639722_7104820200921298569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fHUmiB2UMtEQ7kNvgFkMKPG&_nc_zt=23&_nc_ht=scontent.fixc1-3.fna&_nc_gid=AIhkXmaWTC0NgHnP-OaQAMA&oh=00_AYDKVFqn8uAv6NGA2jZTelivgLG1FEV6YgbMnWW8pOx-hA&oe=67942BBB',
        
      ];
      
    const renderContent = () => {
        switch (activeTab) {
            case "Posts":
                return <div className="tab-content">
                    <Post
                        profilePic="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        image="https://th.bing.com/th/id/OIP.aJ1uZzv6RwE-ywKw_o8wtwHaEo?pid=Api&rs=1"
                        message="message"
                        timestamp="timestamp"
                        username="Akash K"
                    />
                    <Post />
                    <Post />
                </div>;
            case "About":
                return <div className="tab-content"><About banner={banner} text={text} /></div>;
            case "Photos":
                return <div className="tab-content"><PhotosSection photoUrls={photoUrls}/></div>;
            case "Videos":
                return <div className="tab-content">Your videos will be displayed here.</div>;
            case "Reels":
                return <div className="tab-content">Reels content goes here.</div>;
            case "More":
                return <div className="tab-content">Explore more options here.</div>;
            default:
                return <div className="tab-content">Select a tab to view content.</div>;
        }
    };

    return (
        <div className="profile-header">
            {/* Cover Photo */}
            <div className="cover-photo">
                {coverPhoto ? (
                    <img src={coverPhoto} alt="Cover" className="cover-photo-img" />
                ) : (
                    <div className="cover-photo-placeholder"></div>
                )}
            </div>

            {/* Profile Info */}
            <div className="profile-info">
                <div className="profile-pic">
                    {profilePicture ? (
                        <img src={profilePicture} alt="Profile" className="profile-pic-img" />
                    ) : (
                        <div className="profile-pic-placeholder"></div>
                    )}
                </div>
                <div className="profile-details">
                    <span className="college-name">{name || "Your Name"}</span>
                    <span>{friendsCount ? `${friendsCount} friends` : "No friends count available"}</span>
                </div>
                <div className="profile-actions">
                    <span className="badge">
                        <img src="https://puchd.ac.in/asset/logo/pu-naac-logo.png" alt="NAAC Logo" />
                        NAAC A+
                    </span>
                    <span className="badge">A</span>
                    <span className="badge">A</span>
                    <span className="badge">A</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="navigation">
                <ul>
                    {["Posts", "About", "Photos", "Videos", "Reels", "More"].map((tab) => (
                        <li
                            key={tab}
                            className={activeTab === tab ? "active-tab" : ""}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Dynamic Section */}
            <div className="tab-section">{renderContent()}</div>
        </div>
    );
};

export default ProfileHeader;
