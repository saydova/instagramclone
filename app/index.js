import { Text, View, Image, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';




export default function index() {
  return (
    <View style={{flex:1, backgroundColor:"white"}}>
      
    <ScrollView style={{flex:1}}>
    
      {/* navbar */}
      <View style={{ flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:20, paddingVertical:10}}>
        <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:"30px", fontFamily:'Cochin'}}>Instagram</Text>
          <AntDesign style={{paddingTop:"15px", paddingLeft:"4px"}} name="down" size={15} color="black" />
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-around"}}>
        <AntDesign name="hearto" size={22} color="black" />
        <AntDesign style={{paddingLeft:"20px"}} name="message1" size={22} color="black" />
        </View>
      </View>

      {/* story */}
      <ScrollView horizontal={true} >

        <View style={{paddingHorizontal:"20px" }}>
          <View style={{borderWidth:3,borderRadius:50, borderColor:"gray", height:75}}>
         <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHeioF6sle0gbsZ2aRQdKncwIAv2itfa7ew&s',
            cache: 'only-if-cached',
          }}
          style={{width: 70, height: 70, borderWidth:3 ,borderRadius:50, borderColor:"white"}}
        />
        <Text style={{fontSize:12, textAlign:"center", color:"gray", paddingTop:4}}>Your story</Text>
        </View>
        </View>

        <View style={{paddingRight:"20px"}}>
        <View style={{borderWidth:3,borderRadius:50, borderColor:"lightgreen", height:75}}>
         <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE41u9x00ZRwBdSGola6Wrg-Dw36wVZU90w&s',
            cache: 'only-if-cached',
          }}
          style={{width: 70, height: 70, borderWidth:3 ,borderRadius:50, borderColor:"white"}}
        />
        <Text style={{fontSize:12, textAlign:"center", paddingTop:4}}>VigroJS_69</Text>
        </View>
        </View>

        <View style={{paddingRight:"20px"}}>
        <View style={{borderWidth:3,borderRadius:50, borderColor:"lightgreen", height:75}}>
         <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D4E03AQEh9XtW5ODEDg/profile-displayphoto-shrink_200_200/0/1715693707131?e=2147483647&v=beta&t=BNZlHz8I3ga_6YNzY-gZYIBRMcaS6U-TSdl13KocE1Y',
            cache: 'only-if-cached',
          }}
          style={{width: 70, height: 70, borderWidth:3 ,borderRadius:50, borderColor:"white"}}
        />
        <Text style={{fontSize:12, textAlign:"center", paddingTop:4}}>AlanCo0L</Text>
        </View>
        </View>
        
        <View style={{paddingRight:"20px"}}>
        <View style={{borderWidth:3,borderRadius:50, height:75, borderColor:"red"}} >
         <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D4D03AQFWoSSBZe_O7g/profile-displayphoto-shrink_200_200/0/1713869127578?e=2147483647&v=beta&t=g-bSHXXivNrnTGUFbYKHJgh1QFjb4Kd-KmQijxapcRk',
            cache: 'only-if-cached',
          }}
          style={{width: 70, height: 70, borderWidth:3 ,borderRadius:50, borderColor:"white"}}
        />
        <Text style={{fontSize:12, textAlign:"center", paddingTop:4}}>Oj4nJaman</Text>
        </View>
        </View>

        <View style={{paddingRight:"20px"}}>
        <View style={{borderWidth:3,borderRadius:50, borderColor:"gray", height:75,width:75}}>
         <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGSdAEvSzB5ws5jOn_Xu2Vw729RKg1NxSG1Q&s',
            cache: 'only-if-cached',
          }}
          style={{width: 70, height: 70, borderWidth:3 ,borderRadius:50, borderColor:"white"}}
        />
        <Text style={{fontSize:12, textAlign:"center", paddingTop:4}}>TOmsB4Rber</Text>
        </View>
        </View>

        <View style={{paddingRight:"20px"}}>
        <View style={{borderWidth:3,borderRadius:50, borderColor:"gray", height:75, width:75}}>
         <Image
          source={{
            uri: 'https://cdn.idntimes.com/content-images/community/2022/08/lepik-7e78ff88108f3a721892bae45e940012-30f76ca008ced48104121d294e19fd39_600x400.png',
            cache: 'only-if-cached',
          }}
          style={{width: 70, height: 70, borderWidth:3 ,borderRadius:50, borderColor:"white"}}
        /><Text style={{fontSize:12, textAlign:"center", paddingTop:4}}>LevyAckerman</Text>
        </View>
        </View>
        
      </ScrollView>



      {/* page */}
    
        {/* you seen all */}
        <View style={{paddingHorizontal:20, paddingVertical:15}}>
          <View style={{flexDirection:"row"}}>
           <AntDesign name="checkcircleo" size={22} color="purple" />
            <Text style={{paddingLeft:8, color:"grey"}}>You've seen all new posts from the past 3 days from accounts you follow.</Text>
          </View>
        </View>

        {/* suggest */}
        <View style={{paddingHorizontal:20, paddingVertical:15}}>
          <View style={{flexDirection:"row", alignContent:"center", justifyContent:"space-between"}}>
            <Text style={{fontSize:18}}>Suggested for you</Text>
            <Text style={{paddingTop:4, color:"aqua"}}>Older posts</Text>
          </View>
        </View>

        {/* postingan */}
        <View>
          {/* bar */}
          <View style={{flexDirection:"row" ,justifyContent:"space-between", alignItems:"center", paddingHorizontal:20}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFhZd-UC5RrwbBmIVtk9FO_wOUJVQP2MPOw&s',
                  cache: 'only-if-cached',
                }}
                style={{width: 40, height: 40, borderWidth:3 ,borderRadius:50, borderColor:"lightgreen"}}
              />
              <View style={{paddingLeft:7}}>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:14}}>Folkative</Text>
                <AntDesign style={{paddingLeft:4}} name="checkcircle" size={13} color="blue" />
                </View>
                <Text style={{fontSize:13}}>Suggested for you</Text>
              </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <Text>Follow</Text>
              <Entypo style={{paddingLeft:10}} name="dots-three-vertical" size={24} color="black" />
            </View>
          </View>

          {/* foto */}
          <View>
          <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFE41u9x00ZRwBdSGola6Wrg-Dw36wVZU90w&s',
                  cache: 'only-if-cached',
                }}
                style={{width: 400, height: 400}}
              />
          </View>

          {/* pesawat */}
          <View style={{flexDirection:"row", paddingHorizontal:20, paddingVertical:7, justifyContent:"space-between"}}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
              <AntDesign style={{paddingRight:12}} name="hearto" size={23} color="black" />
              <FontAwesome5 style={{paddingRight:10}} name="comment" size={22} color="black" />
              <Ionicons name="paper-plane-outline" size={25} color="black" />
            </View>
            <View>
            <Feather name="bookmark" size={25} color="black" />
            </View>
          </View>

          {/*like */}
          <View style={{paddingHorizontal:20}}>
            <Text>39 likes</Text>
          </View>

          {/* comment */}
          <View style={{paddingHorizontal:20}}>
            <Text style={{fontSize:14}}>Folkative <span><Text style={{fontSize:14}}>Ditemukan penjahat bersembunyi diketahui bernama Vigro java script
            </Text></span></Text>
          </View>
          <View style={{paddingHorizontal:20}}>
            <Text style={{color:"gray"}}>View 69 comment</Text>
          </View>



        </View>

      </ScrollView>
      {/* footer bar*/}


      <View style={{paddingHorizontal:20, paddingVertical:5, justifyContent:"flex-end"}}>
        <View style={{flexDirection:"row", justifyContent:"space-around "}}>
        <Entypo name="home" size={25} color="black" />
        <AntDesign name="search1" size={25} color="black" />
        <Octicons name="diff-added" size={25} color="black" />
        <Octicons name="video" size={25} color="black" />
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHeioF6sle0gbsZ2aRQdKncwIAv2itfa7ew&s',
            cache: 'only-if-cached',
          }}
          style={{width: 25, height: 25, borderRadius:50}}
        />
        </View>
      </View>
    </View>

  );
}
