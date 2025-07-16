// import { View, Text, Image } from 'react-native';
// import styles from '../blogDetail.style';
// import React, { useState, useEffect } from 'react';
// import blogHomePostDetailService from '../blogDetail.service';
// import { useRoute } from '@react-navigation/native';

// const BlogDetailContent = function BlogDetailContent() {
//   const [post, setPost] = useState(null);
//   const route = useRoute();
//   const { postId } = route.params;

//   useEffect(() => {
//     blogHomePostDetailService.getBlogHomePostDetailById(postId)
//       .then(data => setPost(data))
//       .catch(err => console.log('Error:', err));
//   }, [postId]);

//   if (!post) return null;

//   return (
//     <View style={styles.contentContainer}>
//       <Image source={{ uri: post.image }} style={styles.image} />
//       <Text style={styles.title}>{post.title}</Text>
//       <View style={styles.ownerRow}>
//         <Image source={{ uri: post.avatar }} style={styles.avatar} />
//         <Text style={styles.ownerName}>{post.avatarName}</Text>
//       </View>
//       <View style={styles.descContainer}>
//         <Text style={styles.desc}>{post.description}</Text>
//       </View>
//     </View>
//   );
// };

// export default BlogDetailContent;