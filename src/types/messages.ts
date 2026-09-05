export type MessageType = "warning" | "error" | "success";

export interface Message {
  text: string;
  type: MessageType;
}
