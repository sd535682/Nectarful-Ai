// import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
// import React from "react";
// import { BodyText, CaptionText } from "../../../constants/uielements";
// import { useState, useEffect } from "react";
// import { supabase } from "../../../lib/supabaseClient";
// import { session } from "@supabase/supabase-js"

// const Profile = ({ session }) => {
//   const [loading, setLoading] = useState(true);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     if (session) getProfile();
//   }, [session]);

//   async function getProfile() {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");

//       const { data, error, status } = await supabase
//         .from("profiles")
//         .select(`username, website, avatar_url`)
//         .eq("id", session?.user.id)
//         .single();
//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setUsername(data.username);;
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProfile({ username, website, avatar_url }) {
//     try {
//       setLoading(true);
//       if (!session?.user) throw new Error("No user on the session!");

//       const updates = {
//         id: session?.user.id,
//         username,
//         website,
//         avatar_url,
//         updated_at: new Date(),
//       };

//       const { error } = await supabase.from("profiles").upsert(updates);

//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         Alert.alert(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   }
//   return (
//     <View style={styles.profile_page}>
//       {/* <CaptionText>Updating Soon</CaptionText> */}
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <TextInput
//           label="Email"
//           value={session?.user?.email}
//           disabled
//           placeholder="Email"
//         />
//       </View>
//       <View style={styles.verticallySpaced}>
//         <TextInput
//           label="Username"
//           value={username || ""}
//           onChangeText={(text) => setUsername(text)}
//           placeholder="Username"
//         />
//       </View>
//       <View style={[styles.verticallySpaced, styles.mt20]}>
//         <Pressable
//           onPress={() => updateProfile({ username, avatar_url: avatarUrl })}
//           disabled={loading}
//         >
//           <BodyText>{loading ? "Loading ..." : "Update"}</BodyText>
//         </Pressable>
//       </View>

//       <View style={styles.verticallySpaced}>
//         <Pressable onPress={() => supabase.auth.signOut()}>
//           <BodyText>Sign Out</BodyText>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   profile_page: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import { Pressable, StyleSheet, TextInput, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import { BodyText } from "../../../constants/uielements";
import { supabase } from "../../../lib/supabaseClient";

const Profile = ({ session }) => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`username`)
        .eq("id", session?.user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        username,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.profile_page}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          value={session?.user?.email}
          editable={false}
          placeholder="Email"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          value={username || ""}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Pressable
          onPress={() => updateProfile({ username })}
          disabled={loading}
        >
          <BodyText>{loading ? "Loading ..." : "Update"}</BodyText>
        </Pressable>
      </View>

      <View style={styles.verticallySpaced}>
        <Pressable onPress={() => supabase.auth.signOut()}>
          <BodyText>Sign Out</BodyText>
        </Pressable>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profile_page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  verticallySpaced: {
    marginBottom: 15,
  },
  mt20: {
    marginTop: 20,
  },
});
