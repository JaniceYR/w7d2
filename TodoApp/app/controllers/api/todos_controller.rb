class Api::TodosController < ApplicationController
  def show
    @todo = Todo.find_by(id: params[:id])
    render json: @todo
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def index
    @todos = Todo.all
    render json: @todos
  end

  def update
    @todo = Todo.find_by(id: params[:id])
    if @todo.update_attributes(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages
    end
  end

  def destroy
    @todo = Todo.find_by(id: params[:id])
    if @todo
      @todo.destroy
      render json: @todo
    else
      render json: "Todo not found"
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
