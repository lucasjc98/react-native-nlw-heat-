import React from "react";

import { ScrollView } from "react-native";
import { MESSAGES_EXAMPLE } from "../../../utils/messages";

import { Message } from "../Message";

import { styles } from "./styles";

export function MessageList() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={MESSAGES_EXAMPLE[0]} />
      <Message data={MESSAGES_EXAMPLE[1]}/>
      <Message data={MESSAGES_EXAMPLE[2]}/>
      <Message data={MESSAGES_EXAMPLE[3]} />
      <Message data={MESSAGES_EXAMPLE[4]}/>
      <Message data={MESSAGES_EXAMPLE[5]}/>
      <Message data={MESSAGES_EXAMPLE[6]}/>
      <Message data={MESSAGES_EXAMPLE[7]}/>
    </ScrollView>
  );
}
