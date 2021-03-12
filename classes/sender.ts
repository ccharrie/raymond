import Discord from "discord.js";
import { Embed } from "../models/embed";

export class Sender {
    send(message: string | Embed) {
        global.message.channel.send(message);
    }
}