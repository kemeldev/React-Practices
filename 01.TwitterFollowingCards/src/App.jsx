
import "./App.css";
import TwitterCard from "./twitterCard"

export default function App() {  
    const users = [
    {
      name: "Miguel Angel Duran",
      userName: "midudev",
      profilePictureUrl: "https://randomuser.me/api/portraits/med/men/29.jpg",
      isFollowing: true
    },
    {
      name: "Mr Vitan Danchuck",
      userName: "Vitanies",
      profilePictureUrl: "https://randomuser.me/api/portraits/med/men/41.jpg",
      isFollowing: true
    },
    {
      name: "Melissa Bowman",
      userName: "BowmnasFem",
      profilePictureUrl: "https://randomuser.me/api/portraits/med/women/85.jpg",
      isFollowing: false
    },
  ];
  
  return (
    <div className="card-container">

      
      {users.map(({name, userName, profilePictureUrl, isFollowing}) => (      
        
        <TwitterCard          
          key={name}
          name={name}
          userName={userName}
          profilePictureUrl={profilePictureUrl}
          initialFollowing={isFollowing}
          >                
              {name}
        </TwitterCard>
        
      ))}
    </div>
  );
}
