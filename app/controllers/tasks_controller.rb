class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy, :run, :finish]
  def index
    @todayTasks = Task.active
    @q = Task.all.ransack(params[:q])
    @tasks = @q.result(distinct: true).page(params[:page]).per(10).order(created_at: :desc)
  end

  def show
    @comments = @task.comments
    @comment = Comment.new
    @category=Category.find(@task.category_id)
    puts @task.aasm_state
    puts @task.running?

  end

  def new
    @task=Task.new
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      redirect_to tasks_path, notice: "タスク「#{@task.name}」を登録しました。"
    else
      render :new
    end
  end

  def edit

  end

  def update

    @task.update!(task_params)
    redirect_to tasks_url, notice: "タスク「#{@task.name}」を更新しました。"
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to tasks_url, notice: "タスク「#{@task.name}」を削除しました。"
  end

  def run
    @task.run
    puts @task.aasm_state
    @task.save
    puts @task.running?
    redirect_to task_url
  end

  def finish
    @task.finish
    puts @task.aasm_state
    @task.save
    puts @task.running?
    redirect_to task_url

  end

  private

  def task_params
  params.require(:task).permit(:name, :description, :limit_time, :category_id, :aasm_state)
  end

  def set_task
    @task = Task.find(params[:id])
  end

end
