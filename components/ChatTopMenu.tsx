import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { primaryColor } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'

export default function ChatTopMenu() {
  return (
                  <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 32,
            backgroundColor: primaryColor,
            padding: 8,
            borderRadius: 100,
            flexDirection: "row",
            // width: "60%",
          }}
        >
          <Pressable>
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 50,
                flexDirection: "row",
                padding: 4,
                marginRight: 16,
                width: 140,
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="add-circle-outline"
                size={32}
                color={primaryColor}
              />
              <Text
                style={{
                  color: primaryColor,
                  fontSize: 12,
                  marginLeft: 8,
                  padding: 4,
                  fontWeight: "700",
                }}
              >
                Додати
              </Text>
            </View>
          </Pressable>
          <Pressable>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 50,
                flexDirection: "row",
                padding: 4,
                width: 140,
              }}
            >
              <Ionicons name="camera-outline" size={32} color={primaryColor} />
              <Text
                style={{
                  color: primaryColor,
                  fontSize: 12,
                  marginLeft: 8,
                  padding: 4,
                  fontWeight: "700",
                }}
              >
                Камера
              </Text>
            </View>
          </Pressable>
        </View>
  )
}