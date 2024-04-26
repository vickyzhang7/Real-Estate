import React from 'react';
import AnnouncementCard from '../components/listingproperty/announcementCard';


const announcements = [
  {
    commenttype: '🚨 Announcements',
    MemberName: 'Steph',
    commenttime: '06/01/2023 1:55 PM',
    title: '🚀 Project Launch Announcement',
    maxShortTextLength: 250,
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
    commenttime: '06/02/2023 10:00 AM',
    title: '💼 New Business Partnerships',
    fullText: `
      We are excited to announce new partnerships with local businesses to support our community.
      These partnerships will provide additional resources and benefits for our members.
    `,
    profileImage: '/listing/CommunityCat2.png', 
  },
  {
    commenttype: '🎉 Events',
    MemberName: 'Sarah',
    commenttime: '06/03/2023 3:00 PM',
    title: '🎉 Community Picnic',
    fullText: `
      Join us for a fun-filled community picnic this weekend!
      There will be games, food, and activities for all ages.
    `,
    profileImage: '/listing/CommunityCat3.png', 
  },
  {
    commenttype: '🌱 Environmental Initiatives',
    MemberName: 'Mike',
    commenttime: '06/04/2023 9:30 AM',
    title: '🌱 Tree Planting Event',
    fullText: `
      We are hosting a tree planting event to promote sustainability and environmental awareness.
      Join us to help make our community greener and more eco-friendly.
    `,
    profileImage: '/listing/CommunityCat4.png', 
  },
];

const CommunityPage = () => {
  return (
    <div className="flex flex-col gap-6 mt-10">
      {announcements.map((announcement, index) => (
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
      ))}
    </div>
  );
};

export default CommunityPage;
