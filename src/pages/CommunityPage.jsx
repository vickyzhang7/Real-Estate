import React, { useState }  from 'react'; 
import AnnouncementCard from '../components/listingproperty/announcementCard';


const announcements = [
  {
    commenttype: '🚨 Announcements',
    MemberName: 'Steph',
    commenttime: '04/01/2024 1:55 PM',
    title: '🚀 Project Launch Announcement',
    maxShortTextLength: 200,
    fullText: `
      Dear valued community members,
      
      We are thrilled to share the exciting news of the official launch of our latest real estate project, The Beacon Residences.
      This endeavor represents a significant milestone in our journey together.
      To get an in-depth understanding of the project, we invite you to explore the attached PDF brochure.
    `,
    profileImage: '/listing/CommunityCat1.png', 
  },
  {
    commenttype: '💼 Business Updates',
    MemberName: 'John',
    commenttime: '04/02/2024 10:00 AM',
    title: '💼 New Business Partnerships',
    fullText: `
    We are thrilled to share that we have established new partnerships with local businesses to further support our community. These collaborative efforts are designed to create a robust network that offers a wide range of resources and benefits for our members.
    `,
    profileImage: '/listing/CommunityCat2.png', 
    maxShortTextLength: 200,
  },
  {
    commenttype: '🎉 Events',
    MemberName: 'Sarah',
    commenttime: '04/03/2024 3:00 PM',
    title: '🎉 Community Picnic',
    fullText: `
      Join us for a fun-filled community picnic this weekend!
      There will be games, food, and activities for all ages.
    `,
    profileImage: '/listing/CommunityCat3.png', 
    maxShortTextLength: 200,
  },
  {
    commenttype: '🌱 Environmental Initiatives',
    MemberName: 'Mike',
    commenttime: '04/04/2024 9:30 AM',
    title: '🌱 Tree Planting Event',
    fullText: `
      We are hosting a tree planting event to promote sustainability and environmental awareness.
      Join us to help make our community greener and more eco-friendly.We are excited to invite you to our upcoming tree-planting event, an initiative designed to promote sustainability and raise environmental awareness within our community. By joining us, you'll play a crucial role in making our local environment greener and healthier, contributing to a positive impact on the planet.
    `,
    profileImage: '/listing/CommunityCat4.png', 
    maxShortTextLength: 200,
  },
];

const CommunityPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnnouncements = announcements.filter((announcement) => 
    announcement.commenttype.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.fullText.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-6 mt-10 mr-40 ml-40">
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Search community events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredAnnouncements.length > 0 ? (
        filteredAnnouncements.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            commenttype={announcement.commenttype}
            MemberName={announcement.MemberName}
            commenttime={announcement.commenttime}
            title={announcement.title}
            maxShortTextLength={announcement.maxShortTextLength}
            fullText={announcement.fullText}
            profileImage={announcement.profileImage}
          />
        ))
      ) : (
        <div>No community events found.</div>
      )}
    </div>
  );
};

export default CommunityPage;
