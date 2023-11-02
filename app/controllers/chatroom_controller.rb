class ChatroomController < ApplicationController

  before_action :require_user

def new
  @message= Message.new
end

def index
  @message= Message.new
@messages= Message.all
end



end
