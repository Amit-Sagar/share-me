export const categories = [
    {
      name: 'Campus',
      image: 'https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Classroom',
      image: 'https://img.freepik.com/free-vector/student-classroom-template_1308-26333.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Spardha',
      image: 'https://img.freepik.com/free-vector/flat-national-sports-day-illustration_23-2149004634.jpg?size=338&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Scintilla',
      image: 'https://img.freepik.com/premium-vector/silhouette-indian-dancer_27646-161.jpg?size=338&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Induction',
      image: 'https://img.freepik.com/free-photo/focused-students-using-tablet-discussing-information_1262-14929.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Workshops',
      image: 'https://img.freepik.com/premium-photo/rear-side-audiences-sitting-listening-speackers-stage-low-light_41418-2156.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Departmental Fest',
      image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg',
    },
    {
      name: 'Alumini Meet',
      image: 'https://img.freepik.com/free-vector/illustration-university-graduates_53876-28468.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    }, {
      name: 'E-cell',
      image: 'https://img.freepik.com/free-photo/man-with-his-mobile-phone-working-network-connection_1134-50.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Coding',
      image: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    }, 
    {
      name: 'Cars',
      image: 'https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    },
    {
      name: 'Food',
      image: 'https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?size=626&ext=jpg&ga=GA1.2.81392481.1624501374',
    }, 
    {
      name: 'others',
      image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
    },
  ];
  
  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      category,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };