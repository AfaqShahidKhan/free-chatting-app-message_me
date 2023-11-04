module ApplicationCable
  class ChatroomChannel < ActionCable::Channel::Base

    def subscribed

      stream_from "chatroom_channel"
    end


  end
end
