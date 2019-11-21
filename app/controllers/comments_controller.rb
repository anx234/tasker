class CommentsController < ApplicationController

  def create
    puts params[:comment][:content]
    puts params[:task_id]

    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save!
      #通知
       @comment.task.create_notification_comment!(current_user, @comment.id)
      redirect_back(fallback_location: root_path)
    else
      redirect_back(fallback_location: root_path)
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(task_id: params[:task_id])
  end

end
