export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  export const feedQuery =`*[type == "pin" ]|order(_createdAt desc){
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
        }
      
  }`
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
export const categories= [ {
  name: 'facebook',
  image: 'https://i.pinimg.com/564x/25/ea/59/25ea5941311b06c6cec08f99bf5d72a5.jpg',
},
{
  name: 'instagram',
  image: 'https://i.pinimg.com/564x/91/99/fd/9199fd70dee8e36ea3cc086853b4387d.jpg',
},
{
  name: 'linkedin',
  image: 'https://i.pinimg.com/564x/b0/28/c2/b028c2e59043116dfc0da6ec6fd26d70.jpg',
},
{
  name: 'twitter',
  image: 'https://i.pinimg.com/564x/4b/12/33/4b12332b3e16d94636352f260e4be487.jpg',
},
{
  name: 'youtube',
  image: 'https://i.pinimg.com/736x/9b/7e/b1/9b7eb1fb9e5e2ac4ac7dba4ea57c585d.jpg',
},
{
  name: 'sharechat',
  image: 'https://i.pinimg.com/564x/7f/35/cc/7f35cc834e25d5a543cf47e98114fd15.jpg',
},

];