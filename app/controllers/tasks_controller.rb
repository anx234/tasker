class TasksController < ApplicationController

  def index
    @todayTasks = Task.active
    @q = Task.all.ransack(params[:q])
    @tasks = @q.result(distinct: true).page(params[:page])
  end

  def show
    @task = Task.find(params[:id])
    @comments = @task.comments
    @comment = Comment.new
  end

  def new
    @task=Task.new
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      TaskMailer.creation_email(@task).deliver_now
      redirect_to tasks_path, notice: "タスク「#{@task.name}」を登録しました。"
    else
      render :new
    end
  end

  def edit
  @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    @task.update!(task_params)
    redirect_to tasks_url, notice: "タスク「#{@task.name}」を更新しました。"
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_url, notice: "タスク「#{@task.name}」を削除しました。"
  end

  private

  def task_params
  params.require(:task).permit(:name, :description, :limit_time)
  end

end
