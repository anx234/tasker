class CommentsController < ApplicationController

  def create
    puts params[:comment][:content]
    #task = Task.find(params[:task_id])
  puts params[:task_id]
    #  @comment = Comment.new(content: params[:comment][:content],user_id: 1,task_id: 1)
    @comment = Comment.new(comment_params)


@comment.user_id = current_user.id
#@comment.task_id = params[:task_id]

      if @comment.save!
        puts "成功"
        redirect_back(fallback_location: root_path)
      else
        puts "失敗"
        redirect_back(fallback_location: root_path)
      end

    end



    private
    def comment_params
      params.require(:comment).permit(:content).merge(task_id: params[:task_id])
    end

end
